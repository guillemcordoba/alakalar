<template>
  <div class="content-area">
    <h1>Final de l'Aventura</h1>
    <MusicBtn track="Big Drumming" variant="ambient" />

    <ReadAloud>
      <p>Amb els dimonis derrotats i l'eco del seu riure malefic esvaint-se en la foscor de l'abisme, el silenci retorna a la cambra. L'artefacte pulsa amb una llum daurada calida a les vostres mans, com un cor que bat amb renovada esperanca. Les parets del temple, tant de temps submergides en la foscor, semblen respirar amb un alleujament antic.</p>
    </ReadAloud>

    <ReadAloud>
      <p>El cami de tornada es diferent del que recordeu. Les trampes que us amenaçaven resten inertes, les runes apagades. Els ossos dels antics defensors semblen descansar amb mes pau ara, com si sabessin que el seu sacrifici no va ser en va. Quan sortiu de la boca de la cova, l'aire fred de la muntanya us colpeja el rostre i, per primera vegada en hores, veieu el cel. Les estrelles brillen amb una intensitat que no recordaveu, i al lluny, les primeres llums del poble parpallejegen com una promesa.</p>
    </ReadAloud>

    <DmNote>
      <p><strong>Escapada del temple:</strong></p>
      <ul>
        <li>Totes les trampes estan desactivades i el poder del temple ha estat eliminat en retirar l'artefacte.</li>
        <li>Aixo fa el temple <strong>vulnerable</strong> &mdash; portals poden obrir-se per vomitar dimonis que els assetjaran mentre fugen.</li>
        <li>Si els aventurers es demoren, una onada de <strong>dimonis menors</strong> comenca a emergir dels portals. No es un combat formal, sino una cursa cap a la sortida.</li>
      </ul>
    </DmNote>

    <ReadAloud>
      <p>Mentre baixeu pels turons cap al poble, sentiu una presencia fosca als vostres talons. No es res que pugueu veure ni tocar, sino una certesa gelada que s'instal&middot;la als vostres ossos: allo que heu pres no sera oblidat, i els qui el volen vindran a buscar-lo.</p>
    </ReadAloud>

    <MusicBtn track="Ascending the Vale" variant="ambient" />
    <h2>Continuacio de l'Aventura</h2>

    <div class="summary-box">
      <p>L'aventura pot continuar de diverses maneres (totes requereixen tornar primer al poble):</p>
      <ul>
        <li><strong>Trobar una traduccio dels Diaris del Gran Mestre</strong> i aprendre mes de la historia durant el cataclisme i la invasio posterior.</li>
        <li><strong>Retornar l'artefacte als Aarakocra a Aol</strong>, on els protegira i estara segur.</li>
        <li><strong>Revelar la ubicacio del temple al mon</strong> i ajudar altres a restaurar-lo.</li>
      </ul>
    </div>

    <DmNote>
      <p>Sigui quin sigui el cami que triin, els dimonis <strong>els perseguiran</strong> i intentaran prendre'ls l'artefacte a cada pas del viatge.</p>
    </DmNote>

    <div class="page-nav">
      <router-link to="/acte4/12">&larr; 12. Cambra del Guardia</router-link>
      <router-link to="/objectes">Objectes &rarr;</router-link>
    </div>

    <div class="music-attribution">
      Musica de <a href="https://incompetech.com" target="_blank" rel="noopener">Kevin MacLeod</a> (incompetech.com),
      llicenciada sota <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a>.
    </div>
  </div>
</template>

<script setup>
import ReadAloud from '../components/ReadAloud.vue'
import DmNote from '../components/DmNote.vue'
import MusicBtn from '../components/MusicBtn.vue'
</script>
