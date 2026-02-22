<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: String,
  subtitle: String,
  typeCss: String,
  iconPath: String,
  effectText: String,
  stats: { type: Array, default: () => [] },
  smallName: Boolean,
})

const base = import.meta.env.BASE_URL

const STAT_TOKENS = {
  '{F}': 'icons/crossed-swords.svg',
  '{D}': 'icons/round-shield.svg',
}

const renderedEffect = computed(() => {
  if (!props.effectText) return ''
  return props.effectText.replace(/\{[FD]\}/g, (token) => {
    const src = STAT_TOKENS[token]
    return src ? `<img src="${base + src}" class="stat-inline-icon" alt="${token[1]}">` : token
  })
})
</script>

<template>
  <div class="print-card" :class="typeCss">
    <div class="card-frame"></div>
    <div class="card-inner">
      <div class="card-header">
        <div class="card-name" :class="{ small: smallName }">{{ name }}</div>
        <div class="card-subtitle">{{ subtitle }}</div>
      </div>
      <div class="card-art">
        <img :src="base + iconPath" :alt="name">
      </div>
      <div v-if="effectText" class="card-effect" v-html="renderedEffect"></div>
      <div v-if="stats.length" class="card-stats">
        <div v-for="(stat, i) in stats" :key="i" class="stat">
          <span class="stat-icon"><img :src="base + stat.iconPath" :alt="stat.value"></span>
          <span class="stat-value">{{ stat.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
