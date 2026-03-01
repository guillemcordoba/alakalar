<template>
  <div class="content-area">
    <h1>Final de l'Aventura</h1>
    <MusicBtn track="Lasting Hope" variant="ambient" />

    <ReadAloud>
      <p>Amb els dimonis derrotats i l'eco del seu riure malefic esvaint-se en la foscor de l'abisme, el silenci retorna a la cambra. L'artefacte pulsa amb una llum daurada calida a les vostres mans, com un cor que bat amb renovada esperanca. Les parets del temple, tant de temps submergides en la foscor, semblen respirar amb un alleujament antic.</p>
    </ReadAloud>

    <DmNote>
      <p><strong>Escapada del temple:</strong></p>
      <MusicBtn track="Big Drumming" variant="event" />
      <ul>
        <li>Totes les trampes estan desactivades i el poder del temple ha estat eliminat en retirar l'artefacte.</li>
        <li>Aixo fa el temple <strong>vulnerable</strong> &mdash; portals poden obrir-se per vomitar dimonis que els assetjaran mentre fugen.</li>
        <li>Si els aventurers es demoren, una onada de <strong>dimonis menors</strong> comenca a emergir dels portals. No es un combat formal, sino una cursa cap a la sortida.</li>
      </ul>
    </DmNote>

    <h2>La Temptacio: Ressuscitar els Pares</h2>

    <DmNote>
      <p><strong>Si un dels aventurers ha perdut els seus pares durant l'aventura:</strong> en algun moment, l'aventurer es adonara que te a les mans l'eina per retornar la vida al seu pare o a la seva mare. Nomes pot ressuscitar-ne <strong>un</strong> (una persona per activacio). Aquesta es una decisio que el DM hauria de deixar que el jugador prengui per si sol, sense pressio.</p>
    </DmNote>

    <DmNote>
      <p><strong>Si l'aventurer usa l'Ull de Laki per ressuscitar el pare o la mare:</strong></p>
    </DmNote>

    <ReadAloud>
      <p>L'orbe brilla amb una llum encegadora que envolta el cos del vostre pare/mare. La llum daurada penetra cada porus de la seva pell, i lentament, un ale de vida retorna al seu pit. Els seus ulls s'obren. Pero quan us miren, no hi veieu l'alegria que esperaveu. Hi veieu <strong>decepcio</strong>. Una tristesa profunda i inabastable.</p>
    </ReadAloud>

    <ReadAloud>
      <p>El vostre pare/mare s'incorpora lentament, mirant l'Ull de Laki ara apagat a les vostres mans. &laquo;Saps que has fet?&raquo;, diu amb una veu tremolosa. &laquo;El jurament... el jurament que hem mantingut durant generacions... trencat. Per mi.&raquo; Aparta la mirada. &laquo;Hauries d'haver deixat que descansés. Aixo es exactament el que l'Orde va jurar que mai passaria.&raquo;</p>
    </ReadAloud>

    <DmNote>
      <p><strong>Consequencies:</strong></p>
      <ul>
        <li>El pare/mare ressuscitat esta <strong>trist i decebut</strong>. No mostra cap alegria per haver tornat a la vida.</li>
        <li><strong>Mai mes tornara a parlar amb el seu fill.</strong> La relacio queda trencada per sempre. L'aventurer ha trencat el jurament sagrat que la familia havia mantingut durant generacions.</li>
        <li>L'Ull de Laki queda <strong>completament inert</strong>. Perd tot el seu poder fins que sigui retornat a Aol.</li>
        <li>L'aventurer ha de viure amb el pes de saber que el seu pare/mare prefereix la mort al deshonor del jurament.</li>
      </ul>
      <p>El DM hauria de tractar aquesta escena amb delicadesa. No es un castig al jugador, sino una consequencia narrativa que reflecteix el pes del jurament dels Asaris i el cost real del poder de la resurreccio.</p>
    </DmNote>

    <h2>Tornada al Poble</h2>
    <MusicBtn track="Ascending the Vale" variant="ambient" />

    <ReadAloud>
      <p>El cami de tornada es diferent del que recordeu. Les trampes que us amenaçaven resten inertes, les runes apagades. Els ossos dels antics defensors semblen descansar amb mes pau ara, com si sabessin que el seu sacrifici no va ser en va. Quan sortiu de la boca de la cova, l'aire fred de la muntanya us colpeja el rostre i, per primera vegada en hores, veieu el cel. Les estrelles brillen amb una intensitat que no recordaveu, i al lluny, les primeres llums del poble parpallejegen com una promesa. Per a un de vosaltres, son les llums de casa.</p>
    </ReadAloud>

    <ReadAloud>
      <p>Mentre baixeu pels turons cap al poble, sentiu una presencia fosca als vostres talons. No es res que pugueu veure ni tocar, sino una certesa gelada que s'instal&middot;la als vostres ossos: allo que heu pres no sera oblidat, i els qui el volen vindran a buscar-lo.</p>
    </ReadAloud>
    <h2>Continuacio de l'Aventura</h2>

    <div class="summary-box">
      <p>L'aventura pot continuar de diverses maneres (totes requereixen tornar primer al poble):</p>
      <ul>
        <li><strong>Trobar una traduccio dels Diaris del Gran Mestre</strong> i aprendre mes de la historia durant el cataclisme i la invasio posterior.</li>
        <li><strong>Retornar l'artefacte als asari a Aol</strong>, on els protegira i estara segur.</li>
        <li><strong>Revelar la ubicacio del temple al mon</strong> i ajudar altres a restaurar-lo.</li>
      </ul>
    </div>

    <DmNote>
      <p>Sigui quin sigui el cami que triin, els dimonis <strong>els perseguiran</strong> i intentaran prendre'ls l'artefacte a cada pas del viatge.</p>
    </DmNote>

    <div class="page-nav">
      <router-link to="/acte4/12">&larr; 12. Cambra del Guardia</router-link>
      <router-link to="/">Tornar a l'Inici &rarr;</router-link>
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
