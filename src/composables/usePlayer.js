import { ref } from 'vue'

const FADE_MS = 1500
const FADE_STEP = 50
const STORAGE_KEY = 'alakalar_player'

const bgAudio = typeof Audio !== 'undefined' ? new Audio() : null
const eventAudio = typeof Audio !== 'undefined' ? new Audio() : null

if (bgAudio) {
  bgAudio.loop = true
  bgAudio.preload = 'none'
}
if (eventAudio) {
  eventAudio.preload = 'none'
}

const currentTrack = ref('')
const currentUrl = ref(null)
const volume = ref(0.5)
const isPlaying = ref(false)

let initialized = false

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      bgUrl: currentUrl.value,
      bgName: currentTrack.value,
      volume: volume.value,
      playing: isPlaying.value
    }))
  } catch (e) { /* ignore */ }
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const s = JSON.parse(raw)
      currentUrl.value = s.bgUrl || null
      currentTrack.value = s.bgName || ''
      volume.value = typeof s.volume === 'number' ? s.volume : 0.5
      isPlaying.value = !!s.playing
    }
  } catch (e) { /* ignore */ }
}

function fadeOut(audio, duration, cb) {
  const start = audio.volume
  const steps = Math.ceil(duration / FADE_STEP)
  const decrement = start / steps
  let i = 0
  const interval = setInterval(() => {
    i++
    audio.volume = Math.max(0, start - decrement * i)
    if (i >= steps) {
      clearInterval(interval)
      audio.volume = 0
      if (cb) cb()
    }
  }, FADE_STEP)
}

function fadeIn(audio, targetVol, duration) {
  audio.volume = 0
  const steps = Math.ceil(duration / FADE_STEP)
  const increment = targetVol / steps
  let i = 0
  const interval = setInterval(() => {
    i++
    audio.volume = Math.min(targetVol, increment * i)
    if (i >= steps) {
      clearInterval(interval)
      audio.volume = targetVol
    }
  }, FADE_STEP)
}

function playBackground(url, name) {
  if (!bgAudio) return

  if (!eventAudio.paused) {
    eventAudio.pause()
    eventAudio.currentTime = 0
  }

  if (currentUrl.value === url && isPlaying.value) return

  currentUrl.value = url
  currentTrack.value = name
  isPlaying.value = true

  bgAudio.src = url
  bgAudio.volume = volume.value
  bgAudio.play().catch(() => { /* autoplay blocked */ })

  save()
}

function playEvent(url, name) {
  if (!eventAudio) return

  if (!isPlaying.value && !currentUrl.value) {
    eventAudio.src = url
    eventAudio.volume = volume.value
    eventAudio.play().catch(() => {})
    currentTrack.value = name
    isPlaying.value = true
    eventAudio.onended = () => {
      currentTrack.value = ''
      isPlaying.value = false
    }
    return
  }

  const savedName = currentTrack.value
  currentTrack.value = name

  fadeOut(bgAudio, FADE_MS, () => {
    bgAudio.pause()
    eventAudio.src = url
    eventAudio.volume = volume.value
    eventAudio.play().catch(() => {})

    eventAudio.onended = () => {
      eventAudio.onended = null
      currentTrack.value = savedName
      bgAudio.play().catch(() => {})
      fadeIn(bgAudio, volume.value, FADE_MS)
    }
  })
}

function togglePlayPause() {
  if (!bgAudio || !currentUrl.value) return

  if (isPlaying.value) {
    bgAudio.pause()
    isPlaying.value = false
  } else {
    bgAudio.volume = volume.value
    bgAudio.play().catch(() => {})
    isPlaying.value = true
  }
  save()
}

function setVolume(v) {
  volume.value = v
  if (bgAudio) bgAudio.volume = v
  if (eventAudio && !eventAudio.paused) eventAudio.volume = v
  save()
}

function stop() {
  if (bgAudio) {
    bgAudio.pause()
    bgAudio.currentTime = 0
  }
  if (eventAudio) {
    eventAudio.pause()
    eventAudio.currentTime = 0
  }
  isPlaying.value = false
  currentUrl.value = null
  currentTrack.value = ''
  save()
}

function init() {
  if (initialized) return
  initialized = true
  load()

  if (currentUrl.value && isPlaying.value && bgAudio) {
    bgAudio.src = currentUrl.value
    bgAudio.volume = volume.value
    bgAudio.play().catch(() => {
      const resumeOnClick = () => {
        if (isPlaying.value && bgAudio.paused) {
          bgAudio.play().catch(() => {})
        }
        document.removeEventListener('click', resumeOnClick)
      }
      document.addEventListener('click', resumeOnClick)
    })
  }
}

export function usePlayer() {
  init()
  return {
    currentTrack,
    currentUrl,
    volume,
    isPlaying,
    playBackground,
    playEvent,
    togglePlayPause,
    setVolume,
    stop
  }
}
