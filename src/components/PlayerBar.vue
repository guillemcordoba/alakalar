<template>
  <div class="player-bar">
    <button @click="togglePlayPause()" :title="isPlaying ? 'Pausa' : 'Reproduir'">
      {{ isPlaying ? '\u275A\u275A' : '\u25B6' }}
    </button>
    <button class="player-stop-btn" @click="stop()" title="Aturar">&#9632;</button>
    <span class="player-track-name">{{ currentTrack || 'Cap pista seleccionada' }}</span>
    <span class="vol-icon">&#128264;</span>
    <input
      type="range"
      min="0"
      max="1"
      step="0.05"
      :value="volume"
      @input="setVolume(parseFloat($event.target.value))"
    >
  </div>
</template>

<script setup>
import { usePlayer } from '../composables/usePlayer.js'

const { currentTrack, volume, isPlaying, togglePlayPause, stop, setVolume } = usePlayer()
</script>
