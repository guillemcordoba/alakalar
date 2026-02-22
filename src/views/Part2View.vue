<template>
  <div class="content-area">
    <MusicBtn track="Stay the Course" variant="ambient" />

    <!-- Zona 1: Saqueig del Campament -->
    <ZoneCard v-if="zone === 'saqueig'" id="zona-saqueig" title="Saqueig del Campament">
      <div class="summary-box">
        <p>Despres de derrotar els goblins, la investigacio del campament revela:</p>
        <ul>
          <li>Poques armes de gel encrostades, alguna riquesa menor.</li>
          <li>Un <strong>idol d'obsidiana</strong> tallat d'una bonica i terrorifica Reina Fey (amb una petita quantitat de poder magic dificil de discernir).</li>
          <li>Examinant els cossos dels goblins: un <span class="dc-check">DC 15 Medicina</span> revela alguna cosa sota la pell d'un dels canells, amb forma de manilla d'espines que de vegades sobresurt de la pell i filtra una foscor fumosa. Desapareixen en fum 5 minuts despres de la mort.</li>
          <li>Les cabanes contenen roba humana, pertinences i menjar de les granges properes.</li>
        </ul>
      </div>

      <ExpandPanel title="Detalls de l'idol d'obsidiana">
        <p>L'idol d'obsidiana tallat representa una bonica i terrorifica <strong>Reina Fey</strong>. Posseeix una <strong>petita quantitat de poder magic</strong>, pero que es exactament es dificil de discernir amb qualsevol control. Es un vincle amb la <strong>Reina Mab</strong>, l'antiga mestressa dels goblins.</p>
      </ExpandPanel>

      <ExpandPanel title="Detalls de la manilla d'espines">
        <p>Un <span class="dc-check">DC 15 Medicina</span> revela alguna cosa enterrada sota la pell d'un dels canells d'un goblin, amb forma d'alguna mena de <strong>manilla d'espines</strong>. Les punxes sobresurten ocasionalment de la pell i filtren una <strong>foscor fumosa</strong>. Despres que els goblins hagin estat morts durant <strong>cinc minuts</strong>, aquestes manilles es <strong>dissiparan completament en fum</strong>.</p>
      </ExpandPanel>

      <DmNote>
        <p><strong>Si un dels aventurers busca la seva mare:</strong> no hi ha cap rastre d'ella al campament. Nomes roba i pertinences d'altres vilatans. Les petjades i rastres de sang indiquen que algunes persones van ser portades <strong>cap a dins de la cova</strong>, no nomes alimentades als basiliscs. La mare va ser enduta mes endins.</p>
      </DmNote>
    </ZoneCard>

    <!-- Zona 2: La Boca de la Cova -->
    <ZoneCard v-if="zone === 'boca'" id="zona-boca" title="La Boca de la Cova">
      <p>L'entrada de la cova aspira l'aire cap endins. Una inquietud creixent s'apodera de qui s'hi acosta. El terra esta tacat d'un carmesi fosc.</p>

      <ExpandPanel title="Detalls de la cova">
        <p>Ara que els aventurers son mes a prop, poden veure que el <strong>tunel de la cova s'esten mes endins</strong> del que investigacions previes haurien revelat. La boca de la cova mateixa sembla <strong>aspirar l'aire</strong> en lloc d'expulsar-lo i els aventurers senten una <strong>inquietud creixent</strong> estant-hi davant.</p>
        <p>La boca de la cova mostra evidencia d'anys de pas, el seu terra de pedra tacat d'un <strong>carmesi fosc</strong>.</p>
      </ExpandPanel>

      <DmNote>
        <p>Entrar-hi amb llum revela un antic corredor treballat tallat a la muntanya, picat i marcat per l'edat. El rastre carmesi porta cap avall. Un control d'<span class="dc-check">Investigacio</span> mostra moviments d'una criatura mes gran a traves del passadis.</p>
      </DmNote>

      <ExpandPanel title="Detalls del corredor antic">
        <p>Entrar al tunel amb llum revela un <strong>antic corredor treballat</strong> tallat a la muntanya, picat i marcat per l'edat. La maconeria original amb prou feines es <strong>reconeixible i impossible d'identificar</strong>. El rastre carmesi guia els personatges muntanya avall.</p>
        <p>Un control d'<span class="dc-check">Investigacio</span> addicional mostra moviments d'una <strong>criatura mes gran</strong> a traves del passadis, tot i que si son recents o no es impossible de discernir.</p>
      </ExpandPanel>

      <ReadAloud>
        <p>El cami s'obre en una sala ampla coberta de taques de sang, pero sense ossos. Al fons descansa un altar de pedra tosca davant d'una paret completament carmesi. Cada centimetre de la paret de la cambra esta cobert de runes, simbols i marques gravades.</p>
      </ReadAloud>
    </ZoneCard>

    <!-- Zona 3: El Mur de Sang -->
    <ZoneCard v-if="zone === 'mur'" id="zona-mur" title="El Mur de Sang">
      <MusicBtn track="Baba Yaga" variant="event" />

      <p>La investigacio de les marques revela dos texts llegibles: <strong>Infernal</strong> i <strong>Elfic</strong>.</p>

      <h3>Inscripcio Elfica</h3>
      <div class="puzzle-text">
        <p>&laquo;La clau es troba a dins i es facil de trobar, pinta't amb ella i la meva magia t'astornara, pot semblar una tasca facil, pero vigila amb el que anhelis, car allo que donis, jo ho retornare.&raquo;</p>
      </div>

      <h3>Inscripcio Infernal</h3>
      <div class="puzzle-text">
        <p>&laquo;La clau es troba al teu cap, usa la clau per pintar-me de vermell, vigila amb allo que menyspreis, car allo que donis sera retornat.&raquo;</p>
      </div>

      <ExpandPanel title="Si ningu pot llegir els idiomes">
        <p>Si els aventurers no tenen ningu que pugui llegir Infernal o Elfic, poden usar les <strong>pistes al voltant de la cova</strong> per deduir que han de fer per eliminar el mur que tenen davant. Les taques de sang al terra, l'altar, i les marques a la paret donen pistes visuals suficients.</p>
      </ExpandPanel>

      <DmNote>
        <p><strong>Mecaniques del Mur de Sang:</strong></p>
        <ul>
          <li>El Mur de Sang requereix <strong>sang fresca</strong> per travessar-lo.</li>
          <li>Produira un <strong>clon exacte</strong> de qui sigui el propietari de la sang com a agent hostil que atacara immediatament.</li>
          <li><strong>Si els aventurers usen la seva propia sang:</strong> apareix un clon amb les mateixes forces i encanteris.</li>
          <li><strong>Si usen sang d'un goblin de gel mort:</strong> es reprodueix un goblin de gel.</li>
          <li><strong>Si llancen una criatura:</strong> tirar <span class="dc-check">1d8</span> per determinar quantes gotes de sang toquen el mur = nombre de criatures que apareixen.</li>
        </ul>
      </DmNote>

      <ExpandPanel title="Mecaniques completes del clon de sang">
        <p>El Mur de Sang requereix sang fresca per travessar-lo. Produira un <strong>clon exacte</strong> de qui o qualsevol cosa sigui la propietaria de la sang com a agent hostil que atacara immediatament el grup.</p>
        <ul>
          <li><strong>Sang propia dels aventurers:</strong> Apareix un clon amb exactament les mateixes forces, habilitats i encanteris.</li>
          <li><strong>Sang d'un goblin de gel mort:</strong> Es reprodueix un unic goblin de gel.</li>
          <li><strong>Si es llanca una criatura contra el mur:</strong> Tirar <span class="dc-check">1d8</span> per veure quantes gotes de sang toquen el mur &mdash; aquest es el nombre de criatures que apareixeran.</li>
        </ul>
      </ExpandPanel>

      <ReadAloud>
        <p>Quan la sang toca el mur, se sent un gemec i totes les taques fosques del terra i les parets comencen a moure's, lliscant per sobre i a traves de les pedres com si el terra fos transparent, fins que s'acumulen al centre del mur i un clon de sang apareix.</p>
      </ReadAloud>

      <ExpandPanel title="Descripcio dramatica de la sang">
        <p>Quan la sang toca el mur, se sent un gemec i <strong>totes les taques fosques del terra i les parets comencen a moure's</strong>, lliscant per sobre i a traves de les pedres com si el terra fos transparent, fins que s'acumulen al centre del mur i un clon de sang apareix. Les taques convergeixen com si tinguessin voluntat propia, pujant per les parets i arremolinant-se al voltant del punt de contacte.</p>
      </ExpandPanel>

      <h3>Despres del Mur</h3>
      <p>El clon o clons moren explotant en sang. Els aventurers propers han de superar un <span class="dc-check">DC 14 Constitucio</span> o patir ceguesa temporal.</p>

      <ExpandPanel title="Mort del clon: detalls">
        <p>Quan el clon (o l'ultim clon) mor, <strong>explota en sang</strong> causant ceguesa temporal als aventurers propers que fallin una salvacio de <span class="dc-check">DC 14 Constitucio</span>. La sang flueix de nou cap al mur i la paret retrocedeix dins la cova.</p>
      </ExpandPanel>

      <ReadAloud>
        <p>Quan el clon mor, la seva sang flueix de nou cap al mur i retrocedeix sense costures dins la cova abans de tancar-se amb un esclat que fa tremolar la terra. El silenci que segueix es eixordador mentre un buit negre us mira fixament. La llum parpelleja als marges de l'obertura de la cova i el rastre de sang continua cap avall, cap a la foscor. Un degoteig ressona tunel amunt, acompanyat del gemec d'un vent de mal averany.</p>
      </ReadAloud>

      <DmNote>
        <p>La porta de pedra que s'obre de cop senyala alguna cosa en les profunditats que se li ha ofert menjar &mdash; un <strong>Basilisk</strong> que els goblins de gel buscaven capturar i ensinistrar. L'han estat invocant a traves del Mur de Sang i deixant oferenes de vilatans humans a l'altar.</p>
        <ul>
          <li><strong>Si els personatges esperen:</strong> el Basilisk emergeix i lluita en l'espai estret.</li>
          <li><strong>Si avancen immediatament:</strong> poden passar de llarg pel cau del Basilisk abans que emergeixi.</li>
          <li>Hi ha <strong>2 Basilisks</strong> en total (un custodia els ous al cau).</li>
          <li><span class="dc-check">DC 15 Sigil</span> per passar desapercebuts.</li>
        </ul>
      </DmNote>
    </ZoneCard>

    <div class="page-nav">
      <router-link v-if="zone === 'saqueig'" to="/part1/campament">&larr; El Campament</router-link>
      <router-link v-if="zone === 'boca'" to="/part2/saqueig">&larr; Saqueig del Campament</router-link>
      <router-link v-if="zone === 'mur'" to="/part2/boca">&larr; La Boca de la Cova</router-link>
      <router-link v-if="zone === 'saqueig'" to="/part2/boca">La Boca de la Cova &rarr;</router-link>
      <router-link v-if="zone === 'boca'" to="/part2/mur">El Mur de Sang &rarr;</router-link>
      <router-link v-if="zone === 'mur'" to="/acte3/1">1. Basiliscs &rarr;</router-link>
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
import ExpandPanel from '../components/ExpandPanel.vue'

const route = useRoute()
const zone = computed(() => route.params.zone)

</script>
