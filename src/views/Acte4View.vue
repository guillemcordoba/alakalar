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
          <li><span class="dc-check">Historia</span>: els mosaics mostren una <strong>gran llum mantenint la foscor a ratlla</strong>. Les figures de la llum provenen de <strong>moltes races</strong>, les seves cares tan detallades que semblen gairebe <strong>reals</strong>. La foscor conte <strong>dimonis i diables</strong>, les seves cares torturades cridant amb un <strong>goig terrible</strong>. Com mes temps s'hi mira, mes sembla que les criatures <strong>remolinen i es moguin</strong>.</li>
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

      <h3>La Mare</h3>

      <DmNote>
        <p><strong>Si un dels aventurers es originari de Nenyrm:</strong> la seva mare es troba aqui, morta. Aquesta escena hauria de ser un dels moments mes colpidors de l'aventura.</p>
      </DmNote>

      <ReadAloud>
        <p>Darrere un dels escriptoris, mig amagada per una pila de llibres, hi ha una dona. La reconeixeu al moment &mdash; es la vostra mare. Esta asseguda a la cadira, reclinada sobre l'escriptori com si s'hagues adormit llegint. Pero la seva pell es freda i palida, i no respira. Una <strong>ferida profunda i ennegrida</strong> li travessa el costat, la roba al voltant cremada i corrompuda per un poder fosc. Davant seu, un <strong>gran llibre d'encanteris</strong> esta obert, les seves pagines plenes de runes brillants que encara emeten una feble llum daurada. La seva ma esquerra descansa sobre la pagina, com si hagues estat seguint les linies amb el dit en el moment de la seva mort. Porta un amulet identic al que vau trobar a la granja &mdash; un sol amb un ull.</p>
      </ReadAloud>

      <DmNote>
        <ul>
          <li><span class="dc-check">DC mitjana</span> <strong>Medicina:</strong> la mare va morir d'una <strong>ferida demoniaca</strong>. La ferida es fosca i corrompuda &mdash; cap curacio convencional l'hauria pogut salvar. Va ser infligida per una criatura infernal. Estava llegint el llibre quan va ser atacada.</li>
          <li>La mare va ser <strong>capturada</strong> pels goblins de gel juntament amb el pare a la granja. Quan els goblins la van portar al <strong>cau dels basiliscs</strong> per alimentar-la a les besties, va aconseguir <strong>escapar</strong>. Com a Asari, coneixia el temple i va fugir cap a les profunditats, arribant fins a la biblioteca.</li>
          <li>El <strong>llibre d'encanteris</strong> esta obert en un capitol sobre <strong>proteccions i segells de transport</strong> &mdash; estava buscant la manera de treure la reliquia del temple quan un <strong>dimoni la va trobar i la va matar</strong>.</li>
          <li>Si l'aventurer te l'amulet de la granja, brilla feblement en presencia del cos de la mare.</li>
        </ul>
      </DmNote>

    </ZoneCard>

    <!-- Sala 11: L'Estudi -->
    <ZoneCard v-if="room === 11" id="sala-11" title="L'Estudi" :room="11">
      <ReadAloud>
        <p>Dues estatues de criatures desconegudes us observen des de dalt mentre entreu. Dos sofas, antany comodes, reposen davant d'una llar de foc massiva i apagada, sobre la qual descansa un retrat majestuos d'un asari divi, que no esta tacat per la pols, les runes i l'edat que afecten la resta del temple.</p>
      </ReadAloud>

      <DmNote>
        <p><strong>MOLT IMPORTANT:</strong></p>
        <ul>
          <li><span class="dc-check">Detectar Magia</span> pot revelar els dos <strong>Gòlems de Pedra</strong> abans d'entrar. En entrar a l'habitacio, <strong>s'activen i ataquen</strong> fins que son destruits o fins que el Gran Mestre del quadre es alliberat.</li>
          <li>El <strong>quadre es mou lleugerament</strong>. Un control d'<span class="dc-check">Arcana</span> revela que es magic. <strong>Detectar Magia/Mal</strong> revela que l'encanteri que rete el quadre es <strong>malvat</strong>.</li>
          <li><strong>Cremar o destruir el quadre</strong> allibera l'esperit del Gran Mestre empresonat.</li>
        </ul>
      </DmNote>

      <Encounter
        title="Combat a l'Estudi"
        :creatures="[
          { name: 'Gòlems de Pedra', qty: 2, link: 'https://guillemcordoba.com/pimpampum/cards/enemies/golem-de-pedra' }
        ]"
      >
        <template #music>
          <MusicBtn track="Ambush" variant="battle" />
        </template>
        <p><strong>S'activen en entrar a l'habitacio.</strong></p>
        <p>Es desactiven si es destrueix el quadre i s'allibera el Gran Mestre.</p>
      </Encounter>

      <DmNote>
        <p><strong>El Gran Mestre Alliberat:</strong></p>
        <ul>
          <li>Apareix com un <strong>fantasma efimer</strong>, es comunica telepaticament. Te la memoria limitada.</li>
          <li>Explica als aventurers: la <strong>batalla pel temple</strong>, les <strong>proteccions activades</strong> per mantenir el mal fora, i el <strong>proposit del temple</strong> (custodiar una reliquia antiga).</li>
          <li>Va ser <strong>empresonat al quadre per un senyor dels dimonis</strong> com a tortura per trencar la seva voluntat i fer-li obrir la porta.</li>
          <li>Explica que la reliquia va ser la <strong>causa de grans guerres</strong> en el passat. Regnes sencers van caure, pobles van ser arrasats i milers van morir &mdash; tot per controlar el poder de <strong>retornar la vida als morts</strong>. La destruccio va ser tan terrible que un grup de guerrers va jurar que mai mes es tornaria a usar.</li>
          <li>Aixi va neixer l'<strong>Orde dels Asaris</strong>: una germandat secreta de guerrers sagrats fundada per custodiar la reliquia i assegurar-se que <strong>ningu</strong> la tornes a emprar. El Gran Mestre n'era el <strong>lider</strong>.</li>
          <li>Explica que els Asaris van establir tres juraments irrevocables: <strong>(1) Mai usar la reliquia</strong>, ni tan sols en les circumstancies mes desesperants. <strong>(2) Mai parlar de la reliquia ni de l'Orde</strong>, ni a familia, ni a amics, ni a reis. <strong>(3) Viure en secret</strong> entre la gent comuna, passant el jurament de pares a fills quan els consideraven preparats.</li>
          <li>Quan els dimonis van atacar el temple, l'Orde dels Asaris va ser <strong>aniquilada</strong>. Els pares de l'aventurer van ser els <strong>unics supervivents</strong> &mdash; van escapar i van viure amagats com a gent comuna, mantenint el jurament en secret. Probablement l'haurien iniciat en l'Orde en el moment adequat, pero els esdeveniments s'han precipitat.</li>
          <li><strong>Si els aventurers han trobat la mare a la biblioteca</strong> o mencionen l'amulet del sol amb l'ull, el Gran Mestre assenteix amb tristesa: &laquo;Els Asaris... els guardians del jurament. Fidels fins al final. La dona de la biblioteca era una d'ells &mdash; una Asari. Va ser capturada pels goblins, pero quan la van portar als basiliscs va aconseguir escapar. Coneixia el temple... sabia on anar. Va arribar fins a la biblioteca per intentar treure la reliquia... pero un dimoni la va trobar i la va matar mentre llegia. Ho lamento.&raquo;</li>
          <li>Adverteix solemnement: &laquo;La reliquia <strong>mai</strong> s'ha d'usar. Mai. Independentment de quanta temptacio sentiu. Aquest va ser el jurament. Aquest va ser el preu.&raquo;</li>
          <li>El Gran Mestre guia el grup fins a la <strong>porta darrere l'altar</strong> i l'obre amb un <strong>esclat de llum</strong>.</li>
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
          <li>El Gran Mestre assenyala els cossos: <strong>aquesta va ser la seva ultima defensa</strong>. Ossos demonials mes grans contra l'altar.</li>
          <li><strong>Estatues trencades</strong> flanquegen el pont, la majoria destrossades o tallades. La postura de les que romanen en peu revela una sensacio de <strong>puresa i poder</strong> desconeguts per als aventurers.</li>
        </ul>
      </DmNote>

      <ReadAloud>
        <p>Mentre contempleu la meravella de les estatues, la vostra mirada s'hi queda fixada durant uns segons. Alguna cosa us atrau i no podeu apartar la vista, les ombres de la caverna retrocedeixen mentre capteu un breu entramat a traves del temps de la seva esplendor. Sentiu com la forca torna al vostre cos mentre la fatiga s'esvaeix. La sensacio de puresa al vostre cor i, per un moment, sentiu el poder sagrat a les vostres venes.</p>
        <p>Tan rapid com va arribar, es retira i sentiu la foscor tancar-se. Sembla mes a prop que abans i un calfred us recorre quan el fred de la cambra sembla mossegar una mica mes. Inconscientment us estrenyeu la capa i us sentiu disminuits. El soroll profund i eixordador de l'aigua molt avall us recorda una vegada mes on sou realment.</p>
      </ReadAloud>

      <img :src="base + 'images/img-027.jpg'" alt="L'Ull de Laki" class="section-image">
      <p class="image-caption">L'Ull de Laki &mdash; L'orbe antic que descansa a l'altar</p>

      <div class="puzzle-text">
        Nomes aquells de cor mes pur, poden prendre d'aqui i marxar.<br>
        Perque quan de nou la foscor vingui, i de maldat el mon s'ompli,<br>
        aquest poder us donara la llum, per encegar i cremar la pesta demoniaca.
      </div>

      <DmNote>
        <p><strong>El poder de resurreccio:</strong> L'Ull de Laki, a mes dels seus poders contra dimonis, te la capacitat suprema de <strong>retornar la vida a un mort</strong>, sempre que la mort no hagi passat fa mes de <strong>7 dies</strong>. Els Asaris van jurar mai usar aquest poder, conscients que la temptacio de la resurreccio ha causat guerres i corrupcio al llarg dels segles.</p>
      </DmNote>

      <DmNote>
        <p><strong>Prendre l'objecte:</strong></p>
        <ul>
          <li>Qualsevol persona <strong>pura</strong> pot prendre l'objecte del forat sense problemes.</li>
          <li>Qualsevol persona amb <strong>intencions malvades o corrupcio 5+</strong> pateix <strong>dany radiant sever</strong>.</li>
        </ul>
      </DmNote>

      <DmNote>
        <p><strong>Quan es retira l'objecte:</strong></p>
        <ul>
          <li>Un <strong>riure malefic ressona</strong> per la cambra. Dos <strong>Diables Banyuts</strong> volen cap amunt des de l'abisme.</li>
          <li>Intenten <strong>prendre l'objecte</strong> als aventurers.</li>
          <li>El Gran Mestre diu als aventurers que portin l'objecte a l'<strong>ancià Thalrek a Bemegarde</strong>.</li>
          <li>Avanca i llanca dos poderosos encanteris:
            <ul>
              <li><strong>Castig Major:</strong> Sostenint el seu martell cap als dimonis, allibera un <strong>esclat de llum radiant devastadora</strong> que colpeja ambdos dimonis.</li>
              <li><strong>Aura de Proteccio:</strong> Sostenint el seu escut sobre el cap, crea una <strong>barrera magica</strong> que bloqueja tots els encanteris hostils i impedeix que dimonis i diables hi entrin temporalment.</li>
            </ul>
          </li>
          <li>El Gran Mestre <strong>desapareix</strong>. El seu enorme <strong>Martell de Guerra</strong> i <strong>Escut</strong> cauen al terra com a objectes fisics. Ambdos proporcionen bonificacions addicionals durant aquest combat, pero despres perden les seves propietats magiques (tot i que es poden restaurar a traves de missions futures).</li>
        </ul>
      </DmNote>

      <ItemCard title="Martell de Guerra del Gran Mestre" type="Arma platejada">
        <ul>
          <li>Suma la teva <strong>magia a la teva forca</strong> per atacar.</li>
          <li>Les propietats magiques funcionen durant <strong>aquest combat</strong>, pero perden el poder despres (es pot recuperar amb tasques futures).</li>
          <li>L'arma es <strong>platejada</strong>.</li>
        </ul>
      </ItemCard>

      <ItemCard title="Escut del Gran Mestre" type="Escut platejat">
        <ul>
          <li><strong>Velocitat +2</strong> i <strong>Defensa +5</strong>.</li>
          <li>Defensa a <strong>tots els aliats</strong>.</li>
          <li><strong>Activar:</strong> crea una barrera magica que bloqueja encanteris i dimonis temporalment.</li>
          <li>Les propietats magiques funcionen durant <strong>aquest combat</strong>, pero perden el poder despres (es pot recuperar amb tasques futures).</li>
          <li>L'escut es <strong>platejat</strong>.</li>
        </ul>
      </ItemCard>

      <Encounter
        title="Combat Final: La Cambra del Guardia"
        :creatures="[
          { name: 'Diables Banyuts', qty: 2, link: 'https://guillemcordoba.com/pimpampum/cards/enemies/horned-devil' }
        ]"
      >
        <template #music>
          <MusicBtn track="The Ice Giants" variant="battle" />
        </template>
        <p><strong>El Gran Mestre interve</strong> amb un esclat de llum radiant i una barrera magica protectora.</p>
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

const route = useRoute()
const room = computed(() => parseInt(route.params.room))
const base = import.meta.env.BASE_URL

</script>
