<template>
  <div class="item-card">
    <h3>{{ title }}</h3>
    <p v-if="type" class="item-type">{{ type }}</p>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  title: String,
  type: String
})
</script>
