<template>
  <div class="encounter">
    <h3 v-if="title">{{ title }}</h3>
    <slot name="music" />
    <table class="stat-table" v-if="creatures && creatures.length">
      <tr>
        <th>Criatura</th>
        <th>Quantitat</th>
      </tr>
      <tr v-for="c in creatures" :key="c.name">
        <td><a v-if="c.link" :href="c.link" target="_blank" rel="noopener">{{ c.name }}</a><span v-else>{{ c.name }}</span></td>
        <td>{{ c.qty }}</td>
      </tr>
    </table>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  title: String,
  creatures: Array
})
</script>
