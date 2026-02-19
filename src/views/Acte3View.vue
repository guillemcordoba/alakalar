<template>
  <div class="content-area">
    <!-- Sala 1: Cau dels Basiliscs -->
    <ZoneCard v-if="room === 1" id="sala-1" title="Cau dels Basiliscs" :room="1">
      <MusicBtn track="Anxiety" variant="ambient" />
      <ReadAloud>
        <p>El tunel de parets llises s'enfonsa cap a la foscor per un costat, la llum de la torxa llepant els racons d'una cova natural. A mesura que la llum s'escampa per la sala, la superficie reflectant de petites basses il&middot;lumina els ossos, les carcasses mig devorades i la roba esquincada d'humans i altres animals. Al fons de la caverna, un voladis fosc amaga dotzenes d'ous d'un verd fosc intens, coberts d'escates.</p>
      </ReadAloud>

      <DmNote>
        <MusicBtn track="SCP-x1x" variant="battle" />
        <p>Si lluiten contra els basiliscs i saquegen el cau: diversos <strong>ous de basilisk</strong>, ossos i petits <strong>idols</strong> deixats pels goblins de gel.</p>
      </DmNote>
    </ZoneCard>

    <!-- Sala 2: El Pont Trencat -->
    <ZoneCard v-if="room === 2" id="sala-2" title="El Pont Trencat" :room="2">
      <MusicBtn track="Arcane" variant="ambient" />
      <ReadAloud>
        <p>El tunel continua avall mes enlla del cau i s'obre en una caverna enorme. Les parts mes altes de la cambra desapareixen en la foscor i un temple antic s'alca a l'altra banda de l'abisme, tallat directament en un monolit de pedra mes enlla d'un pont de fusta podrit. Els ossos d'una criatura gegantina s'estenen des del costat de la terrassa i es perden en la negrura de sota. Una sequera rancia impregna l'aire, pols i runa cobrint gairebe cada centimetre del terra cremat i picat.</p>
      </ReadAloud>

      <DmNote>
        <p><strong>Plataforma de pedra</strong> amb una petita sala de guardia al costat. A l'altre costat: ossos d'una <strong>criatura gegantina</strong> que s'estenen cap a l'abisme.</p>
        <ul>
          <li><strong>Cos dessecat d'un huma armat, 'Renkidu':</strong> porta una <strong>espasa de plata +1</strong> amb la inscripcio <em>&laquo;Renkidu &mdash; la meva vida per la llum&raquo;</em>, un <strong>Pou d'Esperits</strong> intricadament tallat en forma de collaret, i una <strong>Pedra d'Obsidiana</strong> (preso d'un poderos diable &mdash; es trencara en un moment de gran estres si se l'emporten).</li>
          <li><strong>Runa de prohibicio al terra</strong> (<span class="dc-check">Arcana DC 19</span>): no es permet teletransportacio, portes planars ni transport magic dins del temple.</li>
          <li><strong>Sala de guardia:</strong> conte algunes <strong>claus</strong> entre les runes.</li>
          <li><strong>El pont cruix</strong> quan s'hi camina &mdash; baixa probabilitat de trencar-se pero <strong>alta probabilitat de fer soroll</strong>.</li>
          <li><strong>Portes del temple</strong> entreobertes, cobertes de cicatrius de batalla. Una estatua es mante dreta a la porta; l'altra esta trencada.</li>
        </ul>
      </DmNote>

      <ItemCard title="Pou d'Esperits" type="Objecte Unic, 2 carregues diaries, Requereix Sintonitzacio">
        <ul>
          <li>Forma de petita llanterna, emet <strong>llum blava freda</strong> en 3m de radi.</li>
          <li>Brillar-la sobre restes causa <strong>il&middot;lusions fantasmals</strong> de les criatures mortes.</li>
          <li>La il&middot;lusio plana sobre les restes i representa l'<strong>ultim minut de vida</strong> de la criatura (silencios, sense revelar altres presents).</li>
          <li><strong>Avis:</strong> l'exposicio continuada al mon espiritual pot causar efectes duradors.</li>
        </ul>
      </ItemCard>

      <DmNote>
        <p><strong>Si usen el Pou d'Esperits sobre Renkidu:</strong> el veuen aguantant la llanterna enlaire, sang caient-li dels ulls, mirant fixament els ossos del monstre.</p>
        <p><strong>Si volen veure la mort del monstre:</strong> <span class="dc-check">DC 15 Saviesa</span> o guanyen un punt de <strong>Follia</strong>.</p>
      </DmNote>
    </ZoneCard>

    <!-- Sala 3: Armeria -->
    <ZoneCard v-if="room === 3" id="sala-3" title="Armeria" :room="3">
      <MusicBtn track="Ancient Rite" variant="ambient" />
      <ReadAloud>
        <p>Una gruixuda capa de pols cobreix els prestatges de fusta podrida, i dotzenes d'armes finament forjades escampen el terra on els seus prestatges els han fallat, la llum de les torxes reflectint-se en les seves superficies platejades.</p>
      </ReadAloud>

      <DmNote>
        <p>S'obre amb les <strong>claus de la sala de guardia</strong>. Armes platejades estandard: dagues, fletxes, virots, llances, maces i espases, la majoria antigues i decrepites. Tambe hi ha <strong>cota de malla</strong> i <strong>armadura de plaques</strong>.</p>
      </DmNote>
    </ZoneCard>

    <!-- Sala 4: Quarters de l'Exarca -->
    <ZoneCard v-if="room === 4" id="sala-4" title="Quarters de l'Exarca" :room="4">
      <MusicBtn track="Ancient Rite" variant="ambient" />
      <ReadAloud>
        <p>La porta s'obre amb un grinyol de frontisses rovellades i la vostra llum llepeja la fusta destrossada i els llibres esquincats que escampen el terra. Tot esta ara destrossat fins a ser irreconeixible.</p>
      </ReadAloud>

      <DmNote>
        <ul>
          <li><strong>Investigacio:</strong> els materials son de millor qualitat que a altres parts del temple. La porta interior encara esta <strong>tancada amb clau</strong> (claus de la sala de guardia).</li>
          <li>Conte els <strong>Diaris de l'Exarca</strong> en antic idioma Aarakocran. Es poden portar a la seva ciutat per desxifrar-los. Fins i tot amb coneixement de l'idioma, gran part esta codificat.</li>
          <li><strong>El que en poden extreure:</strong> l'Exarca es l'encarnacio mortal de <strong>&laquo;Laki &mdash; El Deu Justicier&raquo;</strong> i aquest temple va ser amagat per protegir un <strong>artefacte antic</strong> durant la invasio del mon.</li>
        </ul>
      </DmNote>
    </ZoneCard>

    <!-- Sala 5: Sala del Temple -->
    <ZoneCard v-if="room === 5" id="sala-5" title="Sala del Temple" :room="5">
      <MusicBtn track="Ancient Rite" variant="ambient" />
      <DmNote>
        <ul>
          <li><strong>Percepcio alta:</strong> alguna cosa els observa des de dalt.</li>
          <li><strong>Percepcio molt alta:</strong> moviment a les altures del sostre.</li>
          <li>Les sales son fosques; es poden encendre els <strong>brasers</strong> (no il&middot;luminen els sostres alts).</li>
          <li>La sala principal te una <strong>estatua del deu Laki</strong>.</li>
          <li>Un <strong>Dimoni d'Os</strong> i <strong>Dimonis Espinosos</strong> s'amaguen (vegeu Sales 7/8).</li>
        </ul>
      </DmNote>

    </ZoneCard>

    <!-- Sala 6: Quarters del Temple -->
    <ZoneCard v-if="room === 6" id="sala-6" title="Quarters del Temple" :room="6">
      <MusicBtn track="Ancient Rite" variant="ambient" />
      <ReadAloud>
        <p>Les portes estan rebentades cap endins, com si haguessin estat esquincades, i taques de sang, enfosquides fins al negre amb el temps, s'arrosseguen des de les robes brutes i els mobles trencats de l'interior.</p>
      </ReadAloud>

      <DmNote>
        <p>Res de valor. Fusta trencada i podrida, robes esquincades i brutes, un unic <strong>amulet de peltre esquerdat</strong> dedicat a Laki.</p>
      </DmNote>
    </ZoneCard>

    <!-- Sala 7: Menjador -->
    <ZoneCard v-if="room === 7" id="sala-7" title="Menjador" :room="7">
      <MusicBtn track="Ancient Rite" variant="ambient" />
      <ReadAloud>
        <p>Diverses taules llargues i bancs tomats descansen al terra davant d'una llar de foc buida, com si haguessin estat llancats de qualsevol manera. Mes taques cobreixen el terra i les parets, i plats trencats brillen des del terra enfosquit amb la llum.</p>
      </ReadAloud>

      <DmNote>
        <ul>
          <li><strong>Investigacio:</strong> revela un antic menjador amb <strong>rastres de sang</strong> que porten a la cuina (Sala 8).</li>
          <li>La cuina conte un <strong>Dimoni d'Os</strong> assegut sobre ossos decrepits.</li>
          <li><strong>Si els aventurers han alertat el dimoni d'os</strong> (p. ex., cruixit del pont o altres sorolls): surt per <strong>emboscar el grup</strong> juntament amb mitja dotzena de Dimonis Espinosos amagats al sostre alt de la Sala del Temple.</li>
        </ul>
      </DmNote>

      <Encounter
        title="Combat al Temple"
        :creatures="[
          { name: 'Dimoni d\'Os (Bone Devil)', qty: 1 },
          { name: 'Dimonis Espinosos (Spined Devils)', qty: 6 }
        ]"
      >
        <template #music>
          <MusicBtn track="Feral Angel Waltz" url="https://incompetech.com/music/royalty-free/mp3-royaltyfree/Feral%20Angel%20Waltz%20.mp3" variant="battle" />
        </template>
        <p><strong>Emboscada</strong> si han fet soroll al pont o en explorar.</p>
      </Encounter>
    </ZoneCard>

    <!-- Sala 8: Atri del Temple -->
    <ZoneCard v-if="room === 8" id="sala-8" title="Atri del Temple" :room="8">
      <MusicBtn track="Ancient Rite" variant="ambient" />
      <ReadAloud>
        <p>Al terra hi ha gravada una altra runa, gairebe indistingible del terra si no fos pels polsos ocasionals de llum daurada tenue. En canvi, els vostres ulls son atrets pels contorns carbonitzats de formes terrorifiques contra la paret al voltant de l'entrada de les escales.</p>
      </ReadAloud>

      <DmNote>
        <ul>
          <li><strong>Runa oculta</strong> davant les escales cap al Temple Inferior. Es descobreix amb un control d'<strong>Investigacio</strong> o <strong>Detectar Magia</strong>.</li>
          <li>La runa <strong>vaporitza qualsevol persona amb cor o intencions malvades</strong> que la trepitgi.</li>
          <li>Els aventurers poden intentar desactivar-la (amb <strong>gran dificultat</strong>).</li>
          <li>Si la trepitgen, <strong>nomes fa mal als qui tinguin intencions hostils o malvades</strong>.</li>
        </ul>
      </DmNote>

      <h3>Dany per Corrupcio</h3>
      <table class="stat-table">
        <tr>
          <th>Corrupcio</th>
          <th>Dany</th>
        </tr>
        <tr>
          <td>1&ndash;5</td>
          <td>Cap</td>
        </tr>
        <tr>
          <td>6&ndash;10</td>
          <td>3d6 radiant</td>
        </tr>
        <tr>
          <td>11&ndash;15</td>
          <td>6d6 radiant</td>
        </tr>
        <tr>
          <td>15+</td>
          <td>9d6 radiant</td>
        </tr>
      </table>

      <DmNote>
        <ul>
          <li>La runa tambe <strong>elimina 1 punt de corrupcio</strong> a tots els qui la travessin.</li>
          <li>Les marques carbonitzades son <strong>dimonis i diables</strong> que van ser incinerats.</li>
          <li>Les escales cap avall estan plenes d'<strong>ossos de defensors del temple</strong> amb armadura de plaques esquerdada (multiples especies).</li>
        </ul>
      </DmNote>
    </ZoneCard>

    <div class="page-nav">
      <router-link v-if="room === 1" to="/part2/mur">&larr; El Mur de Sang</router-link>
      <router-link v-if="room > 1" :to="'/acte3/' + (room - 1)">&larr; Sala {{ room - 1 }}</router-link>
      <router-link v-if="room < 8" :to="'/acte3/' + (room + 1)">Sala {{ room + 1 }} &rarr;</router-link>
      <router-link v-if="room === 8" to="/acte4/9">9. Temple Interior &rarr;</router-link>
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
import ItemCard from '../components/ItemCard.vue'

const route = useRoute()
const room = computed(() => parseInt(route.params.room))
</script>
