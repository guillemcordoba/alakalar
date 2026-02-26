<template>
  <div class="content-area">
    <h1>Mapa de Nenyrm</h1>

    <div class="cards-controls no-print">
      <button @click="handlePrint">Imprimir mapa</button>
    </div>
    <img :src="base + 'images/mapa-nenyrm.svg'" alt="Mapa del poble de Nenyrm" class="section-image">
    <p class="image-caption no-print">Mapa del poble de Nenyrm &mdash; Al peu de les Muntanyes Arbormark</p>

    <div class="page-nav">
      <router-link to="/regio">&larr; Mapa de la Regio</router-link>
      <router-link to="/mapes">Mapes del Temple &rarr;</router-link>
    </div>
  </div>
</template>

<script setup>
import '../assets/cards.css'
const base = import.meta.env.BASE_URL
function handlePrint() { window.print() }
</script>
