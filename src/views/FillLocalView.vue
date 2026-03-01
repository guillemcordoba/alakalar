<template>
  <div class="content-area" :class="{ 'save-ink': saveInk }">
    <h1 class="no-print">Fitxa: Personatge Local</h1>

    <div class="cards-controls no-print">
      <button @click="handlePrint">Imprimir fitxa</button>
      <label>
        <input type="checkbox" v-model="saveInk">
        Estalvi de tinta
      </label>
    </div>

    <div class="fill-local-sheet">
      <h2 class="fill-local-title">El que recordes de Nenyrm</h2>
      <p class="fill-local-subtitle">Memòries d'infantesa i joventut</p>

      <section>
        <h3>La terra</h3>
        <p>Al nord, el riu Shal'Uran marca la frontera amb el regne de Iaur. Al sud, les Turons de Darrowden i el Flagell de Killeth — llocs que la gent del poble evita. El Bosc de Firnost s'estén pels voltants, i la Ciutat d'Alenian queda a una setmana de camí cap a l'oest.</p>
        <p>La regió va ser un camp de batalla durant l'Era de la Desolació. Ciutats senceres van ser destruïdes. Diuen que sota la terra hi ha ossos — i que per això els camps són tan fèrtils. Ningú en parla gaire, però tothom ho sap.</p>
      </section>

      <section>
        <h3>El poble</h3>
        <p>Nenyrm és un petit poble agrícola al peu de les Muntanyes Arbormark, al regne d'Alenian. Des de qualsevol punt del poble es veuen els cims de les muntanyes, sempre presents a l'horitzó. El vent fred que bufa des de la costa nord de Lenwir porta l'olor de l'oceà fins als camps.</p>
        <p>El poble té un nucli de cases protegit per unes muralles, però també hi ha moltes granges repartides per tot el territori proper. No és gaire gran — tothom es coneix.</p>
      </section>

      <section>
        <h3>La gent</h3>
        <p>La gent de Nenyrm és treballadora i supersticiosa. «Els problemes no et trobaran si no els busques» — és el que diuen. Pocs s'aventuren més enllà del poble, i rarament reben visitants. Viuen de la terra, seguint els cicles de les collites com ho han fet generació rere generació.</p>
      </section>

      <section>
        <h3>Casa teva</h3>
        <p>Els teus pares són pagesos, com qualsevol altra família del poble — gent senzilla, treballadora, sense res que els fes destacar. No tens germans ni germanes; vas créixer sol amb ells. La vostra granja és la més oriental del poble, la més propera als turons. El teu pare va construir la tanca de fusta amb les seves pròpies mans. La teva mare cuida un jardí que sempre ha estat ple de vida. Hi ha un pou al pati.</p>
        <p>Vas créixer allà. Coneixes cada camí, cada tanca, cada pou entre les granges. Podries recórrer el poble amb els ulls tancats. Als disset anys vas marxar, buscant aventures més emocionants que la vida al camp.</p>
      </section>
    </div>

    <div class="page-nav no-print">
      <router-link to="/cartes">&larr; Cartes d'Objectes</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import '../assets/cards.css'
const saveInk = ref(false)
function handlePrint() { window.print() }
</script>

<style>
.fill-local-sheet {
  background: var(--parchment-bg);
  color: var(--parchment-text);
  border: 2px solid var(--parchment-border);
  border-radius: 4px;
  padding: 2rem 2.5rem;
  margin: 1.5rem auto;
  max-width: 210mm;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3), inset 0 0 30px rgba(180,150,100,0.15);
  line-height: 1.7;
}

.fill-local-title {
  font-family: 'Cinzel Decorative', 'Cinzel', serif;
  font-size: 1.6rem;
  text-align: center;
  color: #2c1810;
  margin-bottom: 0.2rem;
}

.fill-local-subtitle {
  font-family: 'Cinzel', serif;
  font-size: 0.9rem;
  text-align: center;
  color: #6a5a3a;
  font-style: italic;
  margin-bottom: 1.5rem;
  letter-spacing: 0.05em;
}

.fill-local-sheet section {
  margin-bottom: 1.2rem;
}

.fill-local-sheet h3 {
  font-family: 'Cinzel', serif;
  font-size: 1.1rem;
  color: #3a2a1a;
  margin-bottom: 0.3rem;
  border-bottom: 1px solid rgba(184,154,90,0.4);
  padding-bottom: 0.2rem;
}

.fill-local-sheet p {
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

@media print {
  @page { size: A4 portrait; margin: 0; }

  body {
    background: white !important;
  }

  .sidebar, .menu-toggle, .player-bar, .no-print {
    display: none !important;
  }

  .main-content {
    margin-left: 0 !important;
    padding: 0 !important;
  }

  html, body, .page-wrapper, .main-content, .content-area {
    margin: 0 !important;
    padding: 0 !important;
    max-width: none !important;
    overflow: visible !important;
  }

  .fill-local-sheet {
    box-shadow: none;
    border: none;
    padding: 12mm;
    margin: 0;
    max-width: none;
  }

  .save-ink .fill-local-sheet {
    background: white;
  }

  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
}
</style>
