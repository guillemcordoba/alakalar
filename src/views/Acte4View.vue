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

      <ExpandPanel title="Descripcio completa del mosaic">
        <p>Un control d'<span class="dc-check">Historia</span> revela el que es pot veure als mosaics que adornen gran part del sostre i les parets: una <strong>gran llum mantenint una foscor a ratlla</strong>.</p>
        <p>Aquells que es troben en la llum provenen de <strong>moltes races</strong>, les seves cares tan detallades que semblen gairebe <strong>reals</strong>. La foscor conte <strong>dimonis i diables</strong>, les seves cares torturades cridant amb un goig terrible. Com mes temps s'hi mira, mes les criatures semblen <strong>remolinar i moure's</strong>.</p>
      </ExpandPanel>
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

      <h3>La Mare</h3>

      <DmNote>
        <p><strong>Si un dels aventurers es originari de Nenyrm:</strong> la seva mare es troba aqui, morta. Aquesta escena hauria de ser un dels moments mes colpidors de l'aventura.</p>
      </DmNote>

      <ReadAloud>
        <p>Darrere un dels escriptoris, mig amagada per una pila de llibres, hi ha una dona. La reconeixeu al moment &mdash; es la vostra mare. Esta asseguda a la cadira, reclinada sobre l'escriptori com si s'hagues adormit llegint. Pero la seva pell es freda i palida, i no respira. Una <strong>ferida profunda i ennegrida</strong> li travessa el costat, la roba al voltant cremada i corrompuda per un poder fosc. Davant seu, un <strong>gran llibre d'encanteris</strong> esta obert, les seves pagines plenes de runes brillants que encara emeten una feble llum daurada. La seva ma esquerra descansa sobre la pagina, com si hagues estat seguint les linies amb el dit en el moment de la seva mort. Porta un amulet identic al que vau trobar a la granja &mdash; un sol amb un ull.</p>
      </ReadAloud>

      <DmNote>
        <ul>
          <li><span class="dc-check">DC mitjana</span> <strong>Medicina:</strong> la mare va morir d'una <strong>ferida demoniaca</strong>. La ferida es fosca i corrompuda &mdash; cap curacio convencional l'hauria pogut salvar. Va ser infligida per una criatura infernal.</li>
          <li>El <strong>llibre d'encanteris</strong> esta obert en un capitol sobre <strong>proteccions i segells de transport</strong> &mdash; estava intentant trobar la manera de treure la reliquia del temple.</li>
          <li>Si l'aventurer te l'amulet de la granja, brilla feblement en presencia del cos de la mare.</li>
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
          <li><span class="dc-check">Detectar Magia</span> pot revelar els dos <strong>Gòlems de Pedra</strong> abans d'entrar. En entrar a l'habitacio, <strong>s'activen i ataquen</strong> fins que son destruits o fins que l'Exarca del quadre es alliberat.</li>
          <li>El <strong>quadre es mou lleugerament</strong>. Un control d'<span class="dc-check">Arcana</span> revela que es magic. <strong>Detectar Magia/Mal</strong> revela que l'encanteri que rete el quadre es <strong>malvat</strong>.</li>
          <li><strong>Cremar o destruir el quadre</strong> allibera l'esperit de l'Exarca empresonat.</li>
        </ul>
      </DmNote>

      <Encounter
        title="Combat a l'Estudi"
        :creatures="[
          { name: 'Gòlems de Pedra', qty: 2, link: 'https://guillemcordoba.com/pimpampum/#/cards/enemies/golem-de-pedra' }
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
          <li>Revela l'existencia de l'<strong>Orde dels Asaris</strong>: una germandat secreta de guerrers sagrats fundada per protegir la reliquia mes preuada del temple &mdash; un artefacte capac de <strong>retornar la vida als morts</strong>.</li>
          <li>Explica que els Asaris van jurar <strong>mai usar la reliquia, mai parlar-ne, i viure en secret</strong> entre la gent comuna, passant el jurament de pares a fills.</li>
          <li><strong>Si els aventurers han trobat la mare a la biblioteca</strong> o mencionen l'amulet del sol amb l'ull, l'Exarca assenteix amb tristesa: &laquo;Els Asaris... els guardians del jurament. Fidels fins al final. La dona de la biblioteca era una d'ells &mdash; una Asari. Va venir a intentar treure la reliquia quan els goblins van comprometre la ubicacio del temple. Pero els dimonis que infesten les profunditats... la van ferir mortalment. Tot i aixi, va arribar fins a la biblioteca. Va morir buscant la manera de treure la reliquia. Ho lamento.&raquo;</li>
          <li>Adverteix solemnement: &laquo;La reliquia <strong>mai</strong> s'ha d'usar. Mai. Independentment de quanta temptacio sentiu. Aquest va ser el jurament. Aquest va ser el preu.&raquo;</li>
          <li>L'Exarca guia el grup fins a la <strong>porta darrere l'altar</strong> i l'obre amb un <strong>esclat de llum</strong>.</li>
          <li>Condueix els personatges <strong>escales avall</strong> fins a la cambra final.</li>
        </ul>
      </DmNote>

      <ExpandPanel title="L'Orde dels Asaris">
        <p>L'<strong>Orde dels Asaris</strong> era una germandat secreta de guerrers sagrats fundada durant l'<strong>Era de la Desolacio</strong>. El seu unic proposit era custodiar la reliquia mes poderosa de la regio: un artefacte capac de retornar la vida als morts. Conscients que aquest poder atreia guerres i corrupcio, els fundadors van establir tres juraments irrevocables:</p>
        <ol>
          <li><strong>Mai usar la reliquia.</strong> Ni tan sols en les circumstancies mes desesperants.</li>
          <li><strong>Mai parlar de la reliquia ni de l'Orde.</strong> Ni a familia, ni a amics, ni a reis.</li>
          <li><strong>Viure en secret.</strong> Els Asaris vivien com a gent comuna, passant el jurament de pares a fills quan els consideraven preparats.</li>
        </ol>
        <p>Els pares de l'aventurer eren Asaris. Probablement l'haurien iniciat en l'Orde en el moment adequat, pero els esdeveniments s'han precipitat. El pare va morir defensant el secret; la mare va morir d'una ferida demoniaca mentre intentava protegir la reliquia.</p>
      </ExpandPanel>
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

      <ExpandPanel title="L'ultima defensa de l'Exarca">
        <p>L'Exarca assenyala els cossos i informa als aventurers que <strong>aquesta va ser la seva ultima resistencia</strong>. Immediatament contra els altars hi ha altres ossos, <strong>mes grans i clarament demonials</strong>.</p>
        <p>Estatues trencades flanquegen el pont, la majoria destrossades o tallades. La postura de les estatues que romanen en peu revela una sensacio de <strong>puresa i poder</strong> desconeguts per als aventurers.</p>
      </ExpandPanel>

      <ExpandPanel title="Visio de les estatues (llegir en veu alta)">
        <ReadAloud>
          <p>Mentre contempleu la meravella de les estatues, la vostra mirada s'hi queda fixada durant uns segons. Alguna cosa us atrau i no podeu apartar la vista, les ombres de la caverna retrocedeixen mentre capteu un breu entramat a traves del temps de la seva esplendor. Sentiu com la forca torna al vostre cos mentre la fatiga s'esvaeix. La sensacio de puresa al vostre cor i, per un moment, sentiu el poder sagrat a les vostres venes.</p>
          <p>Tan rapid com va arribar, es retira i sentiu la foscor tancar-se. Sembla mes a prop que abans i un calfred us recorre quan el fred de la cambra sembla mossegar una mica mes. Inconscientment us estrenyeu la capa i us sentiu disminuits. El soroll profund i eixordador de l'aigua molt avall us recorda una vegada mes on sou realment.</p>
        </ReadAloud>
      </ExpandPanel>

      <img :src="base + 'images/img-027.jpg'" alt="L'Ull de Laki" class="section-image">
      <p class="image-caption">L'Ull de Laki &mdash; L'orbe antic que descansa a l'altar</p>

      <div class="puzzle-text">
        Nomes aquells de cor mes pur, poden prendre d'aqui i marxar.<br>
        Perque quan de nou la foscor vingui, i de maldat el mon s'ompli,<br>
        aquest poder us donara la llum, per encegar i cremar la pesta demoniaca.
      </div>

      <DmNote>
        <p><strong>El poder de resurreccio:</strong> L'Ull de Laki, a mes dels seus poders contra dimonis, te la capacitat suprema de <strong>retornar la vida a un mort</strong>. Aquest poder consumeix <strong>totes les carregues restants</strong> i deixa l'artefacte inert permanentment (nomes es pot recarregar a Aol). Els Asaris van jurar mai usar aquest poder, conscients que la temptacio de la resurreccio ha causat guerres i corrupcio al llarg dels segles.</p>
      </DmNote>

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
          <li>Un <strong>riure malefic ressona</strong> per la cambra. Dos <strong>Diables Banyuts</strong> volen cap amunt des de l'abisme.</li>
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

      <ExpandPanel title="Detalls dels encanteris de l'Exarca">
        <p>L'Exarca avanca i llanca dos poderosos encanteris:</p>
        <ul>
          <li><strong>Castig Major</strong> (Greater Smite): Sostenint el seu martell cap als dimonis, infligeix <strong>8d8 de dany radiant</strong> a ambdos dimonis.</li>
          <li><strong>Aura de Proteccio</strong> (Aura of Warding): Sostenint el seu escut sobre el cap, crea una barrera magica de <strong>4,5m de radi</strong> que bloqueja tots els encanteris hostils i impedeix que dimonis i diables hi entrin durant <strong>1 minut</strong>.</li>
        </ul>
        <p>L'Exarca desapareix quan es llancen els seus encanteris. El seu enorme <strong>Martell de Guerra</strong> i <strong>Escut</strong> cauen al terra com a objectes fisics. Ambdos proporcionen bonificacions addicionals durant aquest combat, pero despres perden les seves propietats magiques (tot i que es poden restaurar a traves de missions futures).</p>
      </ExpandPanel>

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
          { name: 'Diables Banyuts', qty: 2, link: 'https://guillemcordoba.com/pimpampum/#/cards/enemies/horned-devil' }
        ]"
      >
        <template #music>
          <MusicBtn track="The Ice Giants" variant="battle" />
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
      <router-link v-if="room === 12" to="/final">Final de l'Aventura &rarr;</router-link>
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
import ExpandPanel from '../components/ExpandPanel.vue'

const route = useRoute()
const room = computed(() => parseInt(route.params.room))
const base = import.meta.env.BASE_URL

</script>
