<template>
  <button
    class="music-btn"
    :class="[variantClass, { active: isActive }]"
    @click="handleClick"
  >
    {{ label }}: {{ track }}
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { usePlayer } from '../composables/usePlayer.js'

const props = defineProps({
  track: { type: String, required: true },
  variant: { type: String, default: 'ambient' },
  url: { type: String, default: null }
})

const { playBackground, playEvent, currentUrl, isPlaying } = usePlayer()

const trackUrl = computed(() => {
  if (props.url) return props.url
  return 'https://incompetech.com/music/royalty-free/mp3-royaltyfree/'
    + encodeURIComponent(props.track)
    + '.mp3'
})

const variantClass = computed(() => {
  if (props.variant === 'battle') return 'music-btn-battle'
  if (props.variant === 'event') return 'music-btn-event'
  return ''
})

const label = computed(() => {
  if (props.variant === 'battle') return 'Combat'
  if (props.variant === 'event') return 'Event'
  return 'Ambient'
})

const isActive = computed(() => currentUrl.value === trackUrl.value && isPlaying.value)

function handleClick() {
  if (props.variant === 'event') {
    playEvent(trackUrl.value, props.track)
  } else {
    playBackground(trackUrl.value, props.track)
  }
}
</script>
