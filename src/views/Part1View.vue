<template>
  <div class="content-area">
    <!-- Zona 1: Les Granges -->
    <ZoneCard v-if="zone === 'granges'" id="zona-granges" title="Les Granges">
      <MusicBtn track="Long Note Four" variant="ambient" />
      <div class="summary-box">
        <p>Les granges son probablement la primera parada dels aventurers. Els jugadors investiguen que ha passat amb els qui han estat enduts.</p>
      </div>

      <ReadAloud>
        <p>Una fresca brisa d'hivern bufa un vent sospirant sobre els camps entre les granges abandonades a l'est del poble. Els seus exteriors apagats semblen mes deteriorats del que sabeu que son, patint l'absencia de la vida que normalment contindrien. Al vostre voltant, altes tiges de blat tremolen amb el suau dringar de la seva collita madura. L'unic so en una nit que, altrament, es silent.</p>
      </ReadAloud>

      <DmNote>
        <ul>
          <li><strong>Investigar les cases:</strong> roba, objectes i estris de cuina escampats. Rastres de sang i evidencia de lluita.</li>
          <li><span class="dc-check">DC baixa</span> <strong>Percepcio/Investigacio:</strong> troben sang i evidencia de lluita.</li>
          <li><span class="dc-check">DC alta</span> <strong>Percepcio/Investigacio:</strong> taques de sang i petjades que surten de la granja cap als turons de l'est. La sang dona pas a marques d'arrossegament i petites petjades amb botes.</li>
          <li><span class="dc-check">DC alta</span> <strong>Percepcio (exterior):</strong> un so de cruixit lleuger provinent dels camps. Direccio impossible de determinar. Sensacio de ser observats.</li>
          <li><strong>Si investiguen els camps:</strong> no troben res, es perden entre el blat d'alcada del pit.</li>
          <li><strong>Seguir el rastre:</strong> porta als turons. Nomes petjades fresques amb botes petites amb <span class="dc-check">DC alta</span> de <strong>Supervivencia/Investigacio</strong> (la sang ha estat rentada pel temps).</li>
        </ul>
      </DmNote>
    </ZoneCard>

    <!-- Zona 2: El Campament -->
    <ZoneCard v-if="zone === 'campament'" id="zona-campament" title="El Campament dels Goblins de Gel">
      <MusicBtn track="Crypto" variant="ambient" />
      <div class="summary-box">
        <p>El cami rocos ascendeix i els llums es revelen com a torxes. La zona ofereix poca cobertura i la lluna es alta.</p>
      </div>

      <DmNote>
        <p><strong>Opcions d'aproximacio:</strong></p>
        <ul>
          <li><strong>Si els aventurers van directament als llums</strong> (sense investigar les granges): arriben al campament pero probablement activaran l'alarma, tret que facin sigil en l'aproximacio final i evitin les dues sentinelles.</li>
          <li><strong>Si segueixen les pistes des de la granja:</strong> el goblin que va baixar a raptar humans haura avisat els altres, i estaran preparats per una emboscada al final del cami.</li>
          <li><strong>Si aconsegueixen desactivar o esquivar les sentinelles:</strong> poden preparar una emboscada al campament.</li>
        </ul>
      </DmNote>

      <ReadAloud>
        <p>El cami s'atura i sortiu a un altipla de pedra amb poques possibilitats de cobertura arboria. Sis o vuit cabanes de fusta toscament construides envolten un estendard central. Un drap blau fosc amb tres estelles blanques de gel apuntant cap enfora penja d'ell. Diverses fogueres petites, les seves flames una gelor blava lluminosa, jauran escampades pel campament. Darrere d'elles s'alca una entrada de cova, mes semblant a una cicatriu negra travessant les muntanyes grises. Una dotzena de goblins de pell blava es mouen pel campament, entrant i sortint ocasionalment de la cova. Un cabdill dels goblins de gel es troba al centre del campament, contemplant l'estendard que hi penja.</p>
      </ReadAloud>

      <Encounter
        title="Campament dels Goblins de Gel"
        :creatures="[
          { name: 'Goblins de gel', qty: 12 },
          { name: 'Exploradors', qty: 2 },
          { name: 'Cabdill', qty: 1 },
          { name: 'Xaman', qty: 1 }
        ]"
      >
        <template #music>
          <MusicBtn track="Volatile Reaction" variant="battle" />
        </template>
        <p><strong>Alineament:</strong> Caotic Malvat</p>
        <ul>
          <li>Stats similars als goblins normals pero: <strong>CA natural 14</strong>, armes magiques, immunitat al fred i dany necrotic.</li>
          <li>Eren servents de la <strong>Reina Mab</strong> que han fugit del seu servei al centre de les <strong>Muntanyes Arbormark</strong>.</li>
          <li>Han establert un campament temporal atrets per alguna cosa dins la cova.</li>
        </ul>
      </Encounter>
    </ZoneCard>

    <div class="page-nav">
      <router-link v-if="zone === 'granges'" to="/introduccio">&larr; Introduccio</router-link>
      <router-link v-if="zone === 'campament'" to="/part1/granges">&larr; Les Granges</router-link>
      <router-link v-if="zone === 'granges'" to="/part1/campament">El Campament &rarr;</router-link>
      <router-link v-if="zone === 'campament'" to="/part2/saqueig">Saqueig del Campament &rarr;</router-link>
    </div>

    <div class="music-attribution">
      Musica de <a href="https://incompetech.com" target="_blank" rel="noopener">Kevin MacLeod</a> (incompetech.com),
      llicenciada sota <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a>.
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ZoneCard from '../components/ZoneCard.vue'
import ReadAloud from '../components/ReadAloud.vue'
import DmNote from '../components/DmNote.vue'
import MusicBtn from '../components/MusicBtn.vue'
import Encounter from '../components/Encounter.vue'

const route = useRoute()
const zone = computed(() => route.params.zone)
</script>
