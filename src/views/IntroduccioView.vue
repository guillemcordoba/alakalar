<template>
  <div class="content-area">
    <h1>Introduccio</h1>
    <MusicBtn track="Achaidh Cheide" variant="ambient" />

    <ZoneCard id="zona-nenyrm" title="El Poble de Nenyrm">
      <h3>Rerefons</h3>
      <p>El poble agricola de <strong>Nenyrm</strong> es troba al peu de les <strong>Muntanyes Arbormark</strong>, dins del <strong>Regne d'Alenian</strong>. Les granges dels voltants han estat saquejades i els seus residents han desaparegut. La zona va ser escenari de nombroses batalles durant l'<strong>Era de la Desolacio</strong> &mdash; ciutats destruides, temples i ossos jau sota la terra.</p>

      <h3>Ganxos d'Aventura</h3>
      <ul>
        <li>El poble esta aterrit perque alguna cosa s'esta emportant la gent. El consell del poble ha enviat un missatge demanant ajuda a la <strong>Ciutat d'Alenian</strong>, pero el viatge es d'una setmana.</li>
        <li>La gent del poble es supersticiosa i dura. Han enviat els seus propis homes a investigar, pero cap ha tornat. Prefereixen pagar a aventurers de pas perque trobin els desapareguts o resolguin el problema.</li>
      </ul>

      <h3>Rumors</h3>
      <p>Aquests son rumors que els jugadors poden escoltar dels habitants del poble:</p>
      <ul class="rumour-list">
        <li>Espectres vigilant el pont antic del nord i les ruines de Shal'Uran.</li>
        <li>Bruixes i animals amb ulls vermells brillants al proper Bosc de Firnost.</li>
        <li>Llums brillants que semblen ulls als altiplans de les muntanyes baixes.</li>
        <li>Trobades amb estrangers i animals congelats instantaniament a la base de la muntanya i als Turons de Darrowden.</li>
      </ul>

      <DmNote>
        <p>La majoria dels rumors porten a altres possibles aventures. <strong>Les llums als altiplans</strong> son les que son rellevants per a AQUESTA aventura.</p>
      </DmNote>

      <h3>Text Introductori</h3>
      <p>Llegiu el seguent text en veu alta als jugadors quan comenci l'aventura:</p>

      <ReadAloud>
        <p>El poble de Nenyrm es troba a l'ombra de les Muntanyes Arbormark. Els seus cims coberts de neu son una visio constant per a qualsevol dels seus residents que s'aturen a alcar la mirada dels seus treballs al camp i dels seus verds prats. L'olor de l'ocea es una companya constant, portada des de la costa nord de Lenwir per una brisa freda. Els vilatans no saben res del mon mes enlla, llevat dels perills de les grans muntanyes i els vastos deserts del sud. Aqui, entre els suaus turons ondulants, s'hi queden, rarament aventurant-se mes enlla i rarament venen estrangers a trucar a la porta. Tot i aixi, l'atzar us ha portat a aquest poble durant el canvi d'estacions. Els camps vibrants s'han esmorteIt mentre els vilatans es preparen per a un hivern prematur. Vents freds i nits fosques s'acosten rapidament tan a prop de les muntanyes. Per afegir a la creixent inquietud, vilatans han estat desapareixent de les granges properes.</p>
      </ReadAloud>

      <ReadAloud>
        <p>Que algun llenyataire no torni a casa no es tan inusual, pero quan es descobreixen cases de camp llunyanes buides, espollades i ensangonades, aixo si que es un espectacle nou. Tant es aixi que els ancians del poble han cridat tots aquells que viuen entre els camps a refugiar-se darrere les muralles del poble en caure la nit. No sigui que ells tambe pateixin un desti misteriós i terrible.</p>
        <p>Sembla que la vostra arribada a Nenyrm no ha estat per coincidencia, sino per designi d'algun dels deus, car ells son gent senzilla i necessiten l'ajuda de valents aventurers.</p>
        <p>Quan el sol es pon per la nit i els vilatans tanquen amb posts les seves llars i clouen les portes de fusta, us trobeu al cami de l'est, fora del poble. Les Muntanyes Arbormark s'alcen davant vostre, les seves formes negres mes fosques que la nit d'hivern contra la qual reposen. Mentre el vespre s'enfonsa en la foscor, dues coses us creuen la ment: la primera es la promesa dels vilatans d'una generosa recompensa, una que trobeu dubtosa havent vist la manera com viuen les seves vides senzilles; la segona son els punts de llum amb prou feines visibles contra les altes muntanyes, brillant i dansant en la brisa freda.</p>
      </ReadAloud>

      <h3>La Zona Circumdant</h3>
      <img :src="base + 'images/img-002.jpg'" alt="Mapa de la regio de Nenyrm" class="section-image">
      <p class="image-caption">Mapa de la regio al voltant de Nenyrm</p>

      <DmNote>
        <p>Els turons al voltant de Nenyrm no son perillosos &mdash; hi ha llops i alguna bruixa ocasional al <strong>Bosc de Firnost</strong>. Tanmateix, aventurar-se als <strong>Altiplans d'Arbormark</strong>, creuar el <strong>Pont de Shal'Uran</strong> o endinsar-se als <strong>Turons de Darrowden</strong> significa trobar criatures molt mes mortiferes (servents de Mab, espectres antics, agents del Shadowfell). Aquests encontres queden fora de l'abast d'aquesta aventura, pero ofereixen ganxos per a futures sessions.</p>
      </DmNote>
    </ZoneCard>

    <div class="page-nav">
      <router-link to="/">&larr; Inici</router-link>
      <router-link to="/part1/granges">Les Granges &rarr;</router-link>
    </div>

    <div class="music-attribution">
      Musica de <a href="https://incompetech.com" target="_blank" rel="noopener">Kevin MacLeod</a> (incompetech.com),
      llicenciada sota <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a>.
    </div>
  </div>
</template>

<script setup>
import ZoneCard from '../components/ZoneCard.vue'
import ReadAloud from '../components/ReadAloud.vue'
import DmNote from '../components/DmNote.vue'
import MusicBtn from '../components/MusicBtn.vue'

const base = import.meta.env.BASE_URL
</script>
