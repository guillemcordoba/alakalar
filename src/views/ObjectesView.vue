<template>
  <div class="content-area">
    <h1>Objectes i Continuacio</h1>
    <MusicBtn track="Ascending the Vale" variant="ambient" />

    <!-- Continuacio -->
    <h2>Continuacio de l'Aventura</h2>

    <DmNote>
      <p><strong>Opcions de continuacio:</strong> Si els aventurers volen continuar des d'aquest punt, l'aventura pot seguir de diverses maneres. Totes requereixen tornar al poble per reclamar la recompensa i despres viatjar al nord cap a <strong>Aol</strong>:</p>
      <ul>
        <li>Trobar una traduccio del <strong>diari del Gran Mestre</strong> i aprendre mes de la historia durant el cataclisme i la invasio posterior.</li>
        <li>Retornar l'artefacte als <strong>asari a Aol</strong>, on els protegira i estara segur.</li>
        <li>Revelar la ubicacio del temple al mon i ajudar altres a restaurar-lo.</li>
      </ul>
      <p>En qualsevol cas, els <strong>dimonis els perseguiran</strong> i intentaran prendre l'artefacte a cada pas del viatge.</p>
    </DmNote>

    <div class="page-nav">
      <router-link to="/final">&larr; Final de l'Aventura</router-link>
      <router-link to="/">Tornar a l'Inici &rarr;</router-link>
    </div>

    <div class="music-attribution">
      Musica de <a href="https://incompetech.com" target="_blank" rel="noopener">Kevin MacLeod</a> (incompetech.com),
      llicenciada sota <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a>.
    </div>
  </div>
</template>

<script setup>
import DmNote from '../components/DmNote.vue'
import ReadAloud from '../components/ReadAloud.vue'
import MusicBtn from '../components/MusicBtn.vue'
import ItemCard from '../components/ItemCard.vue'

const base = import.meta.env.BASE_URL
</script>
