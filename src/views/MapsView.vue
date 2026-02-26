<template>
  <div class="content-area">
    <h1>Mapes del Temple</h1>

    <h2>Temple Superior</h2>
    <img :src="base + 'images/img-018.jpg'" alt="Mapa del temple superior" class="section-image">
    <p class="image-caption">Mapa del Temple Superior &mdash; El complex antic tallat a la pedra</p>

    <h2>Temple Inferior</h2>
    <img :src="base + 'images/img-016.jpg'" alt="Mapa del temple inferior" class="section-image">
    <p class="image-caption">Mapa del Temple Inferior &mdash; Les cambres mes profundes del complex</p>

    <div class="page-nav">
      <router-link to="/nenyrm">&larr; Mapa de Nenyrm</router-link>
      <router-link to="/">Tornar a l'Inici &rarr;</router-link>
    </div>
  </div>
</template>

<script setup>
const base = import.meta.env.BASE_URL
</script>
