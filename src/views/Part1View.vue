<template>
  <div class="content-area">
    <!-- Zona 0: Encontre amb Llops (Tutorial de Combat) -->
    <ZoneCard v-if="zone === 'llops'" id="zona-llops" title="El Cami cap a les Granges">
      <MusicBtn track="Long Note Four" variant="ambient" />
      <div class="summary-box">
        <p>Un encontre senzill amb llops que serveix com a tutorial del sistema de combat per als jugadors.</p>
      </div>

      <ReadAloud>
        <p>El cami de l'est serpenteja entre els turons baixos, allunyant-se de les ultimes llars del poble. La lluna, gairebe plena, il&middot;lumina el paisatge amb una llum platejada que projecta ombres llargues entre les roques i els arbustos. L'aire es gla&ccedil;at i cada ale es converteix en un nuvolet de boira. De sobte, un udol llunya trenca el silenci &mdash; seguit d'un altre, mes a prop. Entre les ombres dels arbustos, tres parells d'ulls groguencs brillen reflectint la llum de la lluna.</p>
      </ReadAloud>

      <DmNote>
        <ul>
          <li><strong>Tutorial de combat:</strong> aquest encontre esta pensat per introduir les mecaniques basiques del <a href="https://guillemcordoba.com/pimpampum/rules" target="_blank">sistema de combat</a>. Aprofiteu per explicar la seleccio de cartes, la velocitat de resolucio i els tipus de cartes (atac, defensa, focus).</li>
          <li>Els llops <strong>no lluitaran fins a la mort</strong>. Si un llop cau, els supervivents fugen cap a la foscor.</li>
          <li>Si els aventurers fan molt soroll o porten torxes, els llops poden ser espantats sense necessitat de combatre.</li>
        </ul>
      </DmNote>

      <Encounter
        title="Llops Afamats"
        :creatures="[
          { name: 'Llop', qty: 3, link: 'https://guillemcordoba.com/pimpampum/cards/enemies/wolf' }
        ]"
      >
        <template #music>
          <MusicBtn track="Prelude and Action" variant="battle" />
        </template>
        <p><strong>Tactica de ramat:</strong> els llops guanyen bonus d'atac quan ataquen en grup.</p>
      </Encounter>
    </ZoneCard>

    <!-- Zona 1: Les Granges -->
    <ZoneCard v-if="zone === 'granges'" id="zona-granges" title="Les Granges">
      <MusicBtn track="Long Note Four" variant="ambient" />
      <div class="summary-box">
        <p>Les granges son probablement la primera parada dels aventurers. Els jugadors investiguen que ha passat amb els qui han estat enduts.</p>
      </div>

      <ReadAloud>
        <p>Una fresca brisa d'hivern bufa un vent sospirant sobre els camps entre les granges abandonades a l'est del poble. Un de vosaltres reconeix cada tanca, cada pou, cada cami entre les cases &mdash; es el lloc on va creixer. Els seus exteriors apagats semblen mes deteriorats del que haurien de ser, patint l'absencia de la vida que normalment contindrien. Al vostre voltant, altes tiges de blat tremolen amb el suau dringar de la seva collita madura. L'unic so en una nit que, altrament, es silent.</p>
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

      <h3>La Granja Familiar</h3>

      <DmNote>
        <p><strong>Si un dels aventurers es originari de Nenyrm</strong>, la granja dels seus pares es troba entre les mes allunyades del poble, a tocar dels turons. L'aventurer la reconeixera immediatament.</p>
      </DmNote>

      <ReadAloud>
        <p>Reconeixeu la granja dels vostres pares de seguida: la tanca de fusta que el vostre pare va construir amb les seves propies mans, el pou al pati, l'hort que la vostra mare cuidava amb tanta dedicacio. Pero alguna cosa no va be. La porta esta arrencada dels golfos. A dins, els mobles estan bolcats i hi ha taques de sang al terra de pedra. Marques de cremades estranyes cobreixen les parets &mdash; no son de foc normal, sino d'alguna cosa diferent, alguna cosa que ha deixat rastres d'energia que encara crepiten feblement en la foscor. No hi ha cap senyal dels vostres pares.</p>
      </ReadAloud>

      <DmNote>
        <ul>
          <li><span class="dc-check">DC mitjana</span> <strong>Arcana:</strong> les marques de cremades son d'origen magic &mdash; encanteris de proteccio i atac. Algu aqui sabia usar magia, cosa que l'aventurer no sabia dels seus pares.</li>
          <li><span class="dc-check">DC baixa</span> <strong>Investigacio:</strong> hi ha evidencia d'una lluita ferotge. Sang de dues tonalitats: vermella humana i un icor blavos (sang de goblin de gel).</li>
          <li><span class="dc-check">DC alta</span> <strong>Supervivencia:</strong> les petjades mostren que almenys dues persones van ser arrossegades fora de la casa cap als turons. Les marques d'arrossegament son acompanyades de petjades petites amb botes.</li>
          <li>A la rebotiga, amagat darrere uns taulons solts (<span class="dc-check">DC mitjana Investigacio</span> si busquen especificament, o <span class="dc-check">DC alta Percepcio</span> de passada), hi ha un petit cofre tancat amb clau que conte: un <strong>amulet d'argent amb el simbol d'un sol amb un ull</strong> (el simbol de l'Orde dels Asaris, tot i que l'aventurer no el reconeixera), antic pero ben conservat, clarament un objecte preuat; i unes <strong>cartes antigues en un idioma desconegut</strong> &mdash; un control d'<span class="dc-check">DC molt alta Historia</span> suggereix que podrien ser d'un antic dialecte sagrat. L'aventurer no haura vist mai aquest amulet ni aquestes cartes.</li>
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
        <p>Els goblins <strong>atacaran en veure'ls</strong>. Son extremadament hostils.</p>
        <p><strong>Opcions d'aproximacio:</strong></p>
        <ul>
          <li><strong>Si van directament als llums</strong> (sense investigar les granges): arriben al campament pero probablement activaran l'alarma, tret que facin sigil en l'aproximacio final i evitin les dues sentinelles.</li>
          <li><strong>Si segueixen les pistes des de la granja:</strong> el goblin de gel que va baixar per raptar mes humans haura <strong>avisat els altres</strong> dels aventurers que s'acosten. Estaran preparats per <strong>saltar una emboscada</strong> al final del cami.</li>
          <li><strong>Si desactiven o esquiven les sentinelles:</strong> podran <strong>preparar una emboscada al campament</strong>.</li>
        </ul>
      </DmNote>

      <ReadAloud>
        <p>El cami s'atura i sortiu a un altipla de pedra amb poques possibilitats de cobertura arboria. Sis o vuit cabanes de fusta toscament construides envolten un estendard central. Un drap blau fosc amb tres estelles blanques de gel apuntant cap enfora penja d'ell. Diverses fogueres petites, les seves flames una gelor blava lluminosa, jauran escampades pel campament. Darrere d'elles s'alca una entrada de cova, mes semblant a una cicatriu negra travessant les muntanyes grises. Vuit goblins de pell blava es mouen pel campament, entrant i sortint ocasionalment de la cova. Un d'ells, amb bastons i amulets penjant-li del cos, murmura encanteris prop d'una de les fogueres.</p>
      </ReadAloud>

      <Encounter
        title="Campament dels Goblins de Gel"
        :creatures="[
          { name: 'Goblins de gel', qty: 8, link: 'https://guillemcordoba.com/pimpampum/cards/enemies/goblin' },
          { name: 'Xaman Goblin', qty: 1, link: 'https://guillemcordoba.com/pimpampum/cards/enemies/goblin-shaman' }
        ]"
      >
        <template #music>
          <MusicBtn track="Volatile Reaction" variant="battle" />
        </template>
        <ul>
          <li>Eren servents de la <strong>Reina Mab</strong> que han fugit del seu servei al centre de les <strong>Muntanyes Arbormark</strong>.</li>
          <li>Han establert un campament temporal a l'altipla, <strong>atrets aqui per alguna cosa mes</strong> &mdash; alguna cosa dins la cova.</li>
        </ul>
      </Encounter>

      <h3>El Pare Ferit</h3>

      <DmNote>
        <p><strong>Si un dels aventurers es originari de Nenyrm:</strong> despres de derrotar els goblins, troben el seu pare en una de les cabanes, greument ferit i encadenat. Esta pal&middot;lid, amb ferides profundes i evidencia de tortura. Li queden pocs instants de vida.</p>
      </DmNote>

      <ReadAloud>
        <p>A l'interior d'una de les cabanes mes apartades, entre sacs de roba i pertinences robades, trobeu una figura encadenada a un pal de fusta. El reconeixeu immediatament &mdash; es el vostre pare. El seu rostre esta inflat i ensangonat, els seus bracos plens de ferides i cremades. Quan us veu, els seus ulls s'omplen de llagrimes, pero no d'alleujament &mdash; de terror.</p>
      </ReadAloud>

      <ReadAloud>
        <p>&laquo;Fill meu... has vingut...&raquo; La seva veu es un murmuri trencat. Us agafa la ma amb una forca que no hauriu esperat d'un home tan ferit. &laquo;La teva mare... els goblins se l'han endut... a dins de la cova. Has de salvar-la.&raquo; La seva respiracio es fa mes erratica. &laquo;El secret de l'Orde dels Asaris... no pot ser revelat mai... mai...&raquo; Els seus ulls es fixen en un punt lluny, mes enlla de vosaltres, i la seva ma es relaxa. El vostre pare ha mort.</p>
      </ReadAloud>

      <DmNote>
        <ul>
          <li>L'aventurer no te <strong>ni idea</strong> de que es l'Orde dels Asaris. El seu pare mai li'n va parlar.</li>
          <li><span class="dc-check">DC mitjana</span> <strong>Medicina:</strong> les ferides del pare inclouen cremades magiques similars a les de la granja. El pare va lluitar amb magia contra els goblins &mdash; una habilitat que l'aventurer desconeixia.</li>
          <li>Si l'aventurer va trobar l'<strong>amulet del sol amb l'ull</strong> a la granja, un control d'<span class="dc-check">Investigacio</span> revela que el pare porta una <strong>marca tatuada al canell</strong> identica al simbol de l'amulet.</li>
          <li>El DM hauria de donar un moment emotiu als jugadors. Deixar que l'aventurer reaccioni a la perdua del seu pare i al misteri de l'Orde dels Asaris.</li>
        </ul>
      </DmNote>
    </ZoneCard>

    <div class="page-nav">
      <router-link v-if="zone === 'llops'" to="/introduccio">&larr; Introduccio</router-link>
      <router-link v-if="zone === 'granges'" to="/part1/llops">&larr; El Cami</router-link>
      <router-link v-if="zone === 'campament'" to="/part1/granges">&larr; Les Granges</router-link>
      <router-link v-if="zone === 'llops'" to="/part1/granges">Les Granges &rarr;</router-link>
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
