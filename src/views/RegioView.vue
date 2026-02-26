<template>
  <div class="content-area">
    <h1>Mapa de la Regio</h1>

    <img :src="base + 'images/img-002.jpg'" alt="Mapa de la regio de Nenyrm" class="section-image">
    <p class="image-caption">Mapa de la regio al voltant de Nenyrm</p>

    <DmNote>
      <p>Totes les zones circumdants requereixen mes d'un dia de viatge i queden fora de l'abast d'aquesta aventura, pero cadascuna te ganxos per a futures sessions:</p>
      <ul>
        <li><strong>Bosc de Firnost:</strong> Poc repte &mdash; besties, llops i alguna bruixa ocasional que intenta atraure'ls al seu cau per sopar.</li>
        <li><strong>Altiplans d'Arbormark:</strong> Criatures mes mortiferes. Probablement trobaran els <strong>servents de Mab</strong> entre els cims.</li>
        <li><strong>Pont i Ruines de Shal'Uran:</strong> Al nord, hi ha <strong>antics espectres</strong> al voltant de les ruines.</li>
        <li><strong>Turons de Darrowden:</strong> <strong>Agents i monstres del Shadowfell</strong>, amb trobades d'estrangers i animals congelats instantaniament a la vora dels turons emboirats.</li>
      </ul>
    </DmNote>

    <div class="page-nav">
      <router-link to="/acte3/1">&larr; Acte III</router-link>
      <router-link to="/nenyrm">Mapa de Nenyrm &rarr;</router-link>
    </div>
  </div>
</template>

<script setup>
import DmNote from '../components/DmNote.vue'

const base = import.meta.env.BASE_URL
</script>
