<template>
  <button class="menu-toggle" @click="sidebarOpen = !sidebarOpen">&#9776; Menu</button>
  <div class="page-wrapper">
    <Sidebar :open="sidebarOpen" @close="sidebarOpen = false" />
    <main class="main-content">
      <router-view />
    </main>
  </div>
  <PlayerBar />
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from './components/Sidebar.vue'
import PlayerBar from './components/PlayerBar.vue'

const sidebarOpen = ref(false)
</script>
