// ===== Alak'Alar Music Player =====
(function () {
  'use strict';

  var FADE_MS = 1500;
  var FADE_STEP = 50;
  var STORAGE_KEY = 'alakalar_player';

  var bgAudio = new Audio();
  var eventAudio = new Audio();
  bgAudio.loop = true;
  bgAudio.preload = 'none';
  eventAudio.preload = 'none';

  var state = {
    bgUrl: null,
    bgName: '',
    volume: 0.5,
    playing: false
  };

  // --- LocalStorage persistence ---
  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        bgUrl: state.bgUrl,
        bgName: state.bgName,
        volume: state.volume,
        playing: state.playing
      }));
    } catch (e) { /* ignore */ }
  }

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        var s = JSON.parse(raw);
        state.bgUrl = s.bgUrl || null;
        state.bgName = s.bgName || '';
        state.volume = typeof s.volume === 'number' ? s.volume : 0.5;
        state.playing = !!s.playing;
      }
    } catch (e) { /* ignore */ }
  }

  // --- Fade helpers ---
  function fadeOut(audio, duration, cb) {
    var start = audio.volume;
    var steps = Math.ceil(duration / FADE_STEP);
    var decrement = start / steps;
    var i = 0;
    var interval = setInterval(function () {
      i++;
      var v = start - decrement * i;
      audio.volume = Math.max(0, v);
      if (i >= steps) {
        clearInterval(interval);
        audio.volume = 0;
        if (cb) cb();
      }
    }, FADE_STEP);
    return interval;
  }

  function fadeIn(audio, targetVol, duration) {
    audio.volume = 0;
    var steps = Math.ceil(duration / FADE_STEP);
    var increment = targetVol / steps;
    var i = 0;
    var interval = setInterval(function () {
      i++;
      var v = increment * i;
      audio.volume = Math.min(targetVol, v);
      if (i >= steps) {
        clearInterval(interval);
        audio.volume = targetVol;
      }
    }, FADE_STEP);
    return interval;
  }

  // --- UI update ---
  function updateUI() {
    var nameEl = document.getElementById('player-track-name');
    var btnEl = document.getElementById('player-play-btn');
    var volEl = document.getElementById('player-volume');
    if (nameEl) {
      if (state.bgName) {
        nameEl.textContent = state.bgName;
      } else {
        nameEl.textContent = 'Cap pista seleccionada';
      }
    }
    if (btnEl) {
      btnEl.textContent = state.playing ? '\u275A\u275A' : '\u25B6';
      btnEl.title = state.playing ? 'Pausa' : 'Reproduir';
    }
    if (volEl) {
      volEl.value = state.volume;
    }
  }

  // --- Public API ---
  function playBackground(url, name) {
    // If event is playing, stop it first
    if (!eventAudio.paused) {
      eventAudio.pause();
      eventAudio.currentTime = 0;
    }

    if (state.bgUrl === url && state.playing) {
      // Already playing this track
      return;
    }

    state.bgUrl = url;
    state.bgName = name;
    state.playing = true;

    bgAudio.src = url;
    bgAudio.volume = state.volume;
    bgAudio.play().catch(function () { /* autoplay blocked */ });

    save();
    updateUI();
    highlightActiveButtons();
  }

  function playEvent(url, name) {
    if (!state.playing && !state.bgUrl) {
      // No background track, just play event standalone
      eventAudio.src = url;
      eventAudio.volume = state.volume;
      eventAudio.play().catch(function () { /* autoplay blocked */ });
      state.bgName = name;
      state.playing = true;
      updateUI();
      eventAudio.onended = function () {
        state.bgName = '';
        state.playing = false;
        updateUI();
      };
      return;
    }

    // Fade out background, play event, fade back in when done
    var nameEl = document.getElementById('player-track-name');
    var savedName = state.bgName;
    if (nameEl) nameEl.textContent = name;

    fadeOut(bgAudio, FADE_MS, function () {
      bgAudio.pause();
      eventAudio.src = url;
      eventAudio.volume = state.volume;
      eventAudio.play().catch(function () { /* blocked */ });

      eventAudio.onended = function () {
        eventAudio.onended = null;
        if (nameEl) nameEl.textContent = savedName;
        bgAudio.play().catch(function () { /* blocked */ });
        fadeIn(bgAudio, state.volume, FADE_MS);
      };
    });
  }

  function togglePlayPause() {
    if (!state.bgUrl) return;

    if (state.playing) {
      bgAudio.pause();
      state.playing = false;
    } else {
      bgAudio.volume = state.volume;
      bgAudio.play().catch(function () { /* blocked */ });
      state.playing = true;
    }
    save();
    updateUI();
  }

  function setVolume(v) {
    state.volume = v;
    bgAudio.volume = v;
    if (!eventAudio.paused) eventAudio.volume = v;
    save();
  }

  function stopAll() {
    bgAudio.pause();
    bgAudio.currentTime = 0;
    eventAudio.pause();
    eventAudio.currentTime = 0;
    state.playing = false;
    state.bgUrl = null;
    state.bgName = '';
    save();
    updateUI();
    highlightActiveButtons();
  }

  // --- Highlight active music buttons ---
  function highlightActiveButtons() {
    var btns = document.querySelectorAll('.music-btn');
    for (var i = 0; i < btns.length; i++) {
      var btn = btns[i];
      if (btn.dataset.url === state.bgUrl && state.playing) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }
  }

  // --- Init on DOM ready ---
  function init() {
    load();

    // Set up volume slider
    var volEl = document.getElementById('player-volume');
    if (volEl) {
      volEl.addEventListener('input', function () {
        setVolume(parseFloat(this.value));
      });
    }

    // Set up play/pause button
    var btnEl = document.getElementById('player-play-btn');
    if (btnEl) {
      btnEl.addEventListener('click', togglePlayPause);
    }

    // Set up stop button
    var stopEl = document.getElementById('player-stop-btn');
    if (stopEl) {
      stopEl.addEventListener('click', stopAll);
    }

    // Wire up all music buttons
    var musicBtns = document.querySelectorAll('.music-btn');
    for (var i = 0; i < musicBtns.length; i++) {
      (function (btn) {
        btn.addEventListener('click', function () {
          var url = btn.dataset.url;
          var name = btn.dataset.track;
          if (btn.classList.contains('music-btn-event') || btn.classList.contains('music-btn-battle')) {
            playEvent(url, name);
          } else {
            playBackground(url, name);
          }
        });
      })(musicBtns[i]);
    }

    // Resume playback from localStorage
    if (state.bgUrl && state.playing) {
      bgAudio.src = state.bgUrl;
      bgAudio.volume = state.volume;
      bgAudio.play().catch(function () {
        // Autoplay blocked — wait for user interaction
        var resumeOnClick = function () {
          if (state.playing && bgAudio.paused) {
            bgAudio.play().catch(function () { /* still blocked */ });
          }
          document.removeEventListener('click', resumeOnClick);
        };
        document.addEventListener('click', resumeOnClick);
      });
    }

    updateUI();
    highlightActiveButtons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose API globally
  window.AlakaларPlayer = {
    playBackground: playBackground,
    playEvent: playEvent,
    togglePlayPause: togglePlayPause,
    setVolume: setVolume,
    stopAll: stopAll
  };
})();
