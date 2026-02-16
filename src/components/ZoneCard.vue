<template>
  <div class="zone-card" :id="id">
    <div class="zone-card-header" v-if="title">
      <span v-if="room" class="room-number">{{ room }}</span>
      <span class="room-name">{{ title }}</span>
    </div>
    <div class="zone-card-body">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: String,
  title: String,
  room: [String, Number]
})
</script>
