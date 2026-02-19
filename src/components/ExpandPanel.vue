<template>
  <details class="expand-panel">
    <summary>{{ title }}</summary>
    <div class="expand-panel-body"><slot /></div>
  </details>
</template>

<script setup>
defineProps({
  title: { type: String, required: true }
})
</script>
