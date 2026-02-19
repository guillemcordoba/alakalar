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

    <ExpandPanel title="Poder complet de l'Ull de Laki">
      <p>L'orbe pres del temple es un <strong>objecte llegendari</strong>. Tanmateix, el seu poder es limitat i nomes pot ser <strong>restaurat completament a l'Agulla Solar</strong> al cim d'<strong>Aol</strong>, on ofereix proteccio contra tot a la ciutat i als qui hi entren, donant als <strong>Aarakocra</strong> mes poder i forca a la zona, aixi com guanyant-se el seu bon favor.</p>
      <p>Sense aquest emplacament permanent, nomes conte <strong>3 carregues</strong> si els aventurers decideixen no retornar-lo. Despres d'aixi, quedara esgotat i no sera utilizable fins que sigui retornat a Aol.</p>
    </ExpandPanel>

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

    <ExpandPanel title="Restauracio del poder de les armes">
      <p>Ambdues armes son <strong>platejades</strong>. Les propietats magiques del <strong>Martell de Guerra</strong> i l'<strong>Escut</strong> funcionen durant el combat final, pero despres perden el seu poder. Tanmateix, si els personatges les conserven i s'hi sintonitzen, <strong>poden recuperar el poder amb el temps</strong> a traves de missions i tasques futures.</p>
    </ExpandPanel>

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

    <!-- Continuacio -->
    <h2>Continuacio de l'Aventura</h2>

    <ExpandPanel title="Opcions de continuacio">
      <p>Si els aventurers volen continuar des d'aquest punt, l'aventura pot seguir de diverses maneres. Totes requereixen tornar al poble per reclamar la recompensa i despres viatjar al nord cap a <strong>Aol</strong>:</p>
      <ul>
        <li>Trobar una traduccio del <strong>diari de l'Exarca</strong> i aprendre mes de la historia durant el cataclisme i la invasio posterior.</li>
        <li>Retornar l'artefacte als <strong>Aarakocra a Aol</strong>, on els protegira i estara segur.</li>
        <li>Revelar la ubicacio del temple al mon i ajudar altres a restaurar-lo.</li>
      </ul>
      <p>En qualsevol cas, els <strong>dimonis els perseguiran</strong> i intentaran prendre l'artefacte a cada pas del viatge.</p>
    </ExpandPanel>

    <div class="page-nav">
      <router-link to="/final">&larr; Final de l'Aventura</router-link>
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
import ExpandPanel from '../components/ExpandPanel.vue'

const base = import.meta.env.BASE_URL
</script>
