<template>
  <div class="content-area">
    <h1>Objectes i Continuacio</h1>
    <MusicBtn track="Ascending the Vale" variant="ambient" />

    <!-- L'Ull de Laki -->
    <h2>L'Ull de Laki</h2>

    <img :src="base + 'images/img-027.jpg'" alt="L'Ull de Laki" class="section-image">
    <p class="image-caption">L'Ull de Laki &mdash; L'orbe antic que protegeix contra la foscor</p>

    <ItemCard title="L'Ull de Laki" type="Objecte Meravellos, Llegendari &mdash; Requereix Sintonitzacio">
      <p><strong>5 Carregues</strong> (nomes restaurable a l'Agulla Solar al cim d'Aol).</p>
      <p>S'activa sostenint-lo sobre el cap i canalitzant magia. Floreix com un sol poderos durant <strong>1 minut</strong> mentre el jugador el sostingui i es concentri.</p>
      <p><strong>Efectes:</strong></p>
      <ul>
        <li><strong>Encegament:</strong> Encega tots els Dimonis i Diables en 30m que fallin una salvacio de <span class="dc-check">Destresa DC 18</span> per desviar els ulls.</li>
        <li><strong>Cremor:</strong> Fa que la pell dels Dimonis i Diables cremi, eliminant totes les resistencies i immunitats, causant vulnerabilitat a tots els atacs.</li>
        <li><strong>Revelacio:</strong> Crema totes les il&middot;lusions, invisibilitat, mitjans magics d'ocultacio o canvi de forma emprats per qualsevol, exposant-los tal com realment son.</li>
      </ul>
    </ItemCard>

    <DmNote>
      <p>Sense l'emplacament permanent a Aol, l'artefacte <strong>nomes te 3 carregues</strong> si els aventurers decideixen no retornar-lo. Un cop esgotades, resta inert fins que sigui retornat a Aol.</p>
    </DmNote>

    <!-- Pou d'Esperits -->
    <h2>Pou d'Esperits</h2>

    <ItemCard title="Pou d'Esperits" type="Objecte Unic &mdash; 2 carregues diaries &mdash; Requereix Sintonitzacio">
      <p>Forma de petita llanterna que emet <strong>llum blava freda</strong> en un radi de 3m.</p>
      <ul>
        <li>Brillar-la sobre restes fa que <strong>il&middot;lusions fantasmals</strong> de les criatures mortes es manifestin.</li>
        <li>La il&middot;lusio plana sobre les restes i representa l'<strong>ultim minut de vida</strong> de la criatura. L'efecte es silencios i mostra els morts tal com eren en vida, mostrant els objectes que portaven.</li>
        <li>No revela, pero, <strong>cap altra persona</strong> que pogues haver estat present en el moment de la seva mort.</li>
      </ul>
      <p><strong>Avis:</strong> L'exposicio continuada al mon espiritual pot causar efectes duradors.</p>
    </ItemCard>

    <!-- Martell de Guerra de l'Exarca -->
    <h2>Martell de Guerra de l'Exarca</h2>

    <ItemCard title="Martell de Guerra de l'Exarca" type="Arma +2, Platejada">
      <ul>
        <li><strong>+2 al atac i al dany.</strong></li>
        <li><strong>2d6 de dany radiant addicional</strong> per impacte.</li>
      </ul>
      <p><strong>Nota:</strong> Perd les propietats magiques despres del combat final, pero es pot restaurar a traves de missions futures.</p>
    </ItemCard>

    <!-- Escut de l'Exarca -->
    <h2>Escut de l'Exarca</h2>

    <ItemCard title="Escut de l'Exarca" type="Escut +3 CA, Platejat">
      <ul>
        <li><strong>+3 a la CA</strong> (en lloc del +2 habitual dels escuts).</li>
        <li><strong>Activar:</strong> crea una barrera magica de <strong>4,5m de radi</strong> que bloqueja encanteris i dimonis/diables durant <strong>1 minut</strong>.</li>
      </ul>
      <p><strong>Nota:</strong> Perd les propietats magiques despres del combat final, pero es pot restaurar a traves de missions futures.</p>
    </ItemCard>

    <!-- Pedra d'Obsidiana -->
    <h2>Pedra d'Obsidiana</h2>

    <ItemCard title="Pedra d'Obsidiana" type="Objecte Misterios">
      <ul>
        <li>Una <strong>flama calida</strong> atrapada al centre, pero sota inspeccio no es pot enfocar.</li>
        <li>La identificacio i l'estudi <strong>no revelen res</strong>. Qualsevol persona a qui es mostri la pedra no pot discernir el seu proposit.</li>
      </ul>
    </ItemCard>

    <DmNote>
      <p><strong>Secret:</strong> La Pedra d'Obsidiana es una <strong>preso per a un diable poderos</strong>. Si els personatges la prenen, probablement es trencara i alliberara el dimoni en un moment de gran estres.</p>
    </DmNote>

    <!-- Continuacio de l'Aventura -->
    <h2>Continuacio de l'Aventura</h2>

    <div class="summary-box">
      <p>Despres de derrotar els diables, els aventurers poden sortir pel cami per on van entrar. Totes les trampes estan desactivades i el poder del temple ha estat eliminat en retirar l'artefacte. Aixo fa el temple vulnerable &mdash; portals poden obrir-se per vomitar dimonis que els assetjaran mentre fugen.</p>
    </div>

    <p>L'aventura pot continuar de diverses maneres (totes requereixen tornar primer al poble):</p>
    <ul>
      <li><strong>Trobar una traduccio dels Diaris de l'Exarca</strong> i aprendre mes de la historia durant el cataclisme i la invasio posterior.</li>
      <li><strong>Retornar l'artefacte als Aarakocra a Aol</strong>, on els protegira i estara segur.</li>
      <li><strong>Revelar la ubicacio del temple al mon</strong> i ajudar altres a restaurar-lo.</li>
    </ul>

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
import DmNote from '../components/DmNote.vue'
import MusicBtn from '../components/MusicBtn.vue'
import ItemCard from '../components/ItemCard.vue'

const base = import.meta.env.BASE_URL
</script>
