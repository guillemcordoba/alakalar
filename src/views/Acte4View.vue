<template>
  <div class="content-area">
    <MusicBtn track="Ghost Story" variant="ambient" />

    <div class="summary-box">
      <p>El Temple Inferior porta les cicatrius d'una batalla sagnant. Cossos, armes i llits improvisats escampen la sala destrossada. Les formidables defenses del temple no van poder aturar l'horda de monstres que va envair el santuari.</p>
    </div>

    <!-- Sala 9: El Temple Interior -->
    <ZoneCard v-if="room === 9" id="sala-9" title="El Temple Interior" :room="9">
      <ReadAloud>
        <p>La vostra llum omple el temple com si fos impulsada per algun altre agent. L'intricada obra artistica i la filigrana daurada estan destrossades i esquincades. Bancs trencats omplen la sala i un altar de marbre esquerdat jau al capdavant del salo. Tot i que els vostres ulls son atrets pels ossos dels antics defensors i d'aquells que van buscar refugi aqui, escampats pel terra, retorcats i trencats.</p>
      </ReadAloud>

      <DmNote>
        <ul>
          <li>Una <strong>gran porta</strong> darrere l'altar, tancada amb pany i sense cap manera discernible d'obrir-la.</li>
          <li><span class="dc-check">Historia</span>: els mosaics mostren una <strong>gran llum mantenint la foscor a ratlla</strong>. Figures de moltes races amb un detall molt realista. La foscor conte dimonis i diables amb cares torturades i crispades. Com mes temps s'hi mira, mes sembla que les criatures <strong>remolinen i es moguin</strong>.</li>
        </ul>
      </DmNote>
    </ZoneCard>

    <!-- Sala 10: La Biblioteca -->
    <ZoneCard v-if="room === 10" id="sala-10" title="La Biblioteca" :room="10">
      <ReadAloud>
        <p>Prestatgeries de llibres, carregades amb els lloms acolorits de dotzenes de volums, ocupen gran part d'aquest raco del temple, amb alguns escriptoris senzills i cofres.</p>
      </ReadAloud>

      <DmNote>
        <ul>
          <li><strong>Cofres trencats</strong> al llarg de la paret i un petit <strong>idol de basalt</strong>.</li>
          <li>Diverses <strong>pocions de curacio</strong> als cofres trencats.</li>
          <li>Alguns <strong>escrits en alfabet antic</strong>, dificils de desxifrar.</li>
        </ul>
      </DmNote>
    </ZoneCard>

    <!-- Sala 11: L'Estudi -->
    <ZoneCard v-if="room === 11" id="sala-11" title="L'Estudi" :room="11">
      <ReadAloud>
        <p>Dues estatues de criatures desconegudes us observen des de dalt mentre entreu. Dos sofas, antany comodes, reposen davant d'una llar de foc massiva i apagada, sobre la qual descansa un retrat majestuos d'un Aarakocra divi, que no esta tacat per la pols, les runes i l'edat que afecten la resta del temple.</p>
      </ReadAloud>

      <DmNote>
        <p><strong>MOLT IMPORTANT:</strong></p>
        <ul>
          <li><span class="dc-check">Detectar Magia</span> pot revelar els dos <strong>Golems de Pedra</strong> abans d'entrar. En entrar a l'habitacio, <strong>s'activen i ataquen</strong> fins que son destruits o fins que l'Exarca del quadre es alliberat.</li>
          <li>El <strong>quadre es mou lleugerament</strong>. Un control d'<span class="dc-check">Arcana</span> revela que es magic. <strong>Detectar Magia/Mal</strong> revela que l'encanteri que rete el quadre es <strong>malvat</strong>.</li>
          <li><strong>Cremar o destruir el quadre</strong> allibera l'esperit de l'Exarca empresonat.</li>
        </ul>
      </DmNote>

      <Encounter
        title="Combat a l'Estudi"
        :creatures="[
          { name: 'Golems de Pedra (Stone Golems)', qty: 2 }
        ]"
      >
        <template #music>
          <MusicBtn track="Ambush" variant="battle" />
        </template>
        <p><strong>S'activen en entrar a l'habitacio.</strong></p>
        <p>Es desactiven si es destrueix el quadre i s'allibera l'Exarca.</p>
      </Encounter>

      <DmNote>
        <p><strong>L'Exarca Alliberat:</strong></p>
        <ul>
          <li>Apareix com un <strong>fantasma efimer</strong>, es comunica telepaticament. Te la memoria limitada.</li>
          <li>Explica als aventurers: la <strong>batalla pel temple</strong>, les <strong>proteccions activades</strong> per mantenir el mal fora, i el <strong>proposit del temple</strong> (custodiar una reliquia antiga).</li>
          <li>Va ser <strong>empresonat al quadre per un senyor dels dimonis</strong> com a tortura per trencar la seva voluntat i fer-li obrir la porta.</li>
          <li>L'Exarca guia el grup fins a la <strong>porta darrere l'altar</strong> i l'obre amb un <strong>esclat de llum</strong>.</li>
          <li>Condueix els personatges <strong>escales avall</strong> fins a la cambra final.</li>
        </ul>
      </DmNote>
    </ZoneCard>

    <!-- Sala 12: La Cambra del Guardia -->
    <ZoneCard v-if="room === 12" id="sala-12" title="La Cambra del Guardia" :room="12">
      <ReadAloud>
        <p>Un abisme profund ocupa el centre de la gran cambra, el so de l'aigua ressonant des de molt avall. Un pont s'esten cap a una plataforma al centre de l'abisme, coberta d'ossos trencats i esquelets destrossats. Sobre la plataforma reposa un altar antic contra el qual s'ha esfondrat un esquelet inhuma.</p>
      </ReadAloud>

      <DmNote>
        <ul>
          <li>L'Exarca assenyala els cossos: <strong>aquesta va ser la seva ultima defensa</strong>. Ossos demonials mes grans contra l'altar.</li>
          <li><strong>Estatues trencades</strong> flanquegen el pont. Les que queden en peu <strong>irradien puresa i poder</strong>.</li>
        </ul>
      </DmNote>

      <ReadAloud>
        <p>Mentre contempleu la meravella de les estatues, la vostra mirada s'hi queda fixada durant uns segons. Alguna cosa us atrau i no podeu apartar la vista, les ombres de la caverna retrocedeixen mentre capteu un breu entramat a traves del temps de la seva esplendor. Sentiu com la forca torna al vostre cos mentre la fatiga s'esvaeix. La sensacio de puresa al vostre cor i, per un moment, sentiu el poder sagrat a les vostres venes. Tan rapid com va arribar, es retira i sentiu la foscor tancar-se. Sembla mes a prop que abans i un calfred us recorre quan el fred de la cambra sembla mossegar una mica mes. Inconscientment us estrenyeu la capa i us sentiu disminuits. El soroll profund i eixordador de l'aigua molt avall us recorda una vegada mes on sou realment.</p>
      </ReadAloud>

      <img :src="base + 'images/img-027.jpg'" alt="L'Ull de Laki" class="section-image">
      <p class="image-caption">L'Ull de Laki &mdash; L'orbe antic que descansa a l'altar</p>

      <div class="puzzle-text">
        Nomes aquells de cor mes pur, poden prendre d'aqui i marxar.<br>
        Perque quan de nou la foscor vingui, i de maldat el mon s'ompli,<br>
        aquest poder us donara la llum, per encegar i cremar la pesta demoniaca.
      </div>

      <DmNote>
        <p><strong>Prendre l'objecte:</strong></p>
        <ul>
          <li>Qualsevol persona <strong>pura</strong> pot prendre l'objecte del forat sense problemes.</li>
          <li>Qualsevol persona amb <strong>intencions malvades o corrupcio 5+</strong>: <span class="dc-check">Constitucio DC 18</span>. En cas de fallida: <strong>8d6 de dany radiant</strong>.</li>
        </ul>
      </DmNote>

      <DmNote>
        <p><strong>Quan es retira l'objecte:</strong></p>
        <ul>
          <li>Un <strong>riure malefic ressona</strong> per la cambra. Dos <strong>Dimonis Cornuts</strong> (Horned Devils) volen cap amunt des de l'abisme.</li>
          <li>Intenten <strong>prendre l'objecte</strong> als aventurers.</li>
          <li>L'Alt Exarca diu als aventurers que portin l'objecte a la <strong>ciutat dels Aarakocra al nord, mes enlla de les muntanyes</strong>.</li>
          <li>Avanca i llanca dos poderosos encanteris:
            <ul>
              <li><strong>Castig Major</strong> (Greater Smite): <strong>8d8 de dany radiant</strong> a ambdos dimonis amb el seu martell.</li>
              <li><strong>Aura de Proteccio</strong> (Aura of Warding): barrera magica de <strong>4,5m</strong> que bloqueja encanteris i dimonis durant <strong>1 minut</strong> amb el seu escut.</li>
            </ul>
          </li>
          <li>L'Exarca <strong>desapareix</strong>. El seu <strong>Martell de Guerra</strong> i <strong>Escut</strong> cauen com a objectes fisics.</li>
        </ul>
      </DmNote>

      <ItemCard title="Martell de Guerra de l'Exarca" type="Arma (martell de guerra), +2, platejada">
        <ul>
          <li><strong>+2 al atac i al dany.</strong></li>
          <li><strong>2d6 de dany radiant addicional</strong> per impacte.</li>
          <li>Les propietats magiques funcionen durant <strong>aquest combat</strong>, pero perden el poder despres (es pot recuperar amb tasques futures).</li>
          <li>L'arma es <strong>platejada</strong>.</li>
        </ul>
      </ItemCard>

      <ItemCard title="Escut de l'Exarca" type="Armadura (escut), +3 CA, platejat">
        <ul>
          <li><strong>+3 a la CA</strong> (en lloc del +2 habitual dels escuts).</li>
          <li><strong>Activar:</strong> crea una barrera de <strong>4,5m de radi</strong> que bloqueja encanteris i dimonis durant <strong>1 minut</strong>.</li>
          <li>Les propietats magiques funcionen durant <strong>aquest combat</strong>, pero perden el poder despres (es pot recuperar amb tasques futures).</li>
          <li>L'escut es <strong>platejat</strong>.</li>
        </ul>
      </ItemCard>

      <Encounter
        title="Combat Final: La Cambra del Guardia"
        :creatures="[
          { name: 'Dimonis Cornuts (Horned Devils)', qty: 2 }
        ]"
      >
        <template #music>
          <MusicBtn track="Impact Lento" variant="battle" />
          <MusicBtn track="Aurea Carmina" variant="event" />
        </template>
        <p><strong>L'Exarca interve</strong> amb Castig Major i Aura de Proteccio.</p>
        <p>Despres desapareix, deixant el seu <strong>martell</strong> i <strong>escut</strong>.</p>
      </Encounter>
    </ZoneCard>

    <div class="page-nav">
      <router-link v-if="room === 9" to="/acte3/8">&larr; 8. Atri del Temple</router-link>
      <router-link v-if="room > 9" :to="'/acte4/' + (room - 1)">&larr; Sala {{ room - 1 }}</router-link>
      <router-link v-if="room < 12" :to="'/acte4/' + (room + 1)">Sala {{ room + 1 }} &rarr;</router-link>
      <router-link v-if="room === 12" to="/objectes">Objectes i Continuacio &rarr;</router-link>
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
const base = import.meta.env.BASE_URL

</script>
