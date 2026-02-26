<template>
  <div class="content-area" :class="{ 'save-ink': saveInk }">
    <h1 class="no-print">Mapa de Nenyrm</h1>

    <div class="cards-controls no-print">
      <button @click="handlePrint">Imprimir mapa</button>
      <label>
        <input type="checkbox" v-model="saveInk">
        Estalvi de tinta
      </label>
    </div>
    <img :src="base + 'images/mapa-nenyrm.svg'" alt="Mapa del poble de Nenyrm" class="section-image nenyrm-map">
    <p class="image-caption no-print">Mapa del poble de Nenyrm &mdash; Al peu de les Muntanyes Arbormark</p>

    <div class="page-nav no-print">
      <router-link to="/regio">&larr; Mapa de la Regio</router-link>
      <router-link to="/mapes">Mapes del Temple &rarr;</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import '../assets/cards.css'
const base = import.meta.env.BASE_URL
const saveInk = ref(false)
function handlePrint() { window.print() }
</script>

<style>
@media print {
  @page { margin: 0; }

  html, body, .page-wrapper, .main-content, .content-area {
    margin: 0 !important;
    padding: 0 !important;
    max-width: none !important;
    overflow: visible !important;
  }

  .nenyrm-map {
    display: block;
    width: 100vw;
    height: 100vh;
    object-fit: contain;
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .save-ink .nenyrm-map {
    filter: grayscale(1) contrast(1.3);
  }
}
</style>
