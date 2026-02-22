<script setup>
import { ref } from 'vue'
import CardGrid from '../components/CardGrid.vue'
import PrintableCard from '../components/PrintableCard.vue'
import '../assets/cards.css'

const saveInk = ref(false)

const cards = [
  {
    name: 'Espasa de Plata',
    subtitle: 'Atac f\u00edsic | Objecte',
    typeCss: 'atac-fisic',
    iconPath: 'icons/shining-sword.svg',
    effectText: '{F}+1 per cada diable enemic',
  },
  {
    name: "Martell del Gran Mestre",
    subtitle: 'Atac f\u00edsic | Objecte',
    smallName: true,
    typeCss: 'atac-fisic',
    iconPath: 'icons/warhammer.svg',
    effectText: 'Suma la teva m\u00e0gia a la teva for\u00e7a per atacar',
    stats: [{ iconPath: 'icons/crossed-swords.svg', value: '1d10' }],
  },
  {
    name: "Escut del Gran Mestre",
    subtitle: 'Defensa | Objecte',
    smallName: true,
    typeCss: 'defensa',
    iconPath: 'icons/bordered-shield.svg',
    effectText: 'Defensa a tots els aliats',
    stats: [{ iconPath: 'icons/round-shield.svg', value: '3' }],
  },
  {
    name: "L'Ull de Laki",
    subtitle: 'Rel\u00edquia',
    typeCss: 'reliquia',
    iconPath: 'icons/brass-eye.svg',
    effectText: 'Retorna la vida a una persona morta',
    smallName: true,
  },
  {
    name: "Pou d'Esperits",
    subtitle: 'Objecte',
    typeCss: 'objecte',
    iconPath: 'icons/lantern.svg',
    effectText: "2 c\u00e0rregues. Llanterna de llum blava. Mostra l'\u00faltim minut de vida d'una criatura morta.",
  },
  {
    name: "Pedra d'Obsidiana",
    subtitle: 'Objecte',
    typeCss: 'objecte',
    iconPath: 'icons/fire-gem.svg',
    effectText: "Una flama c\u00e0lida atrapada al centre. La identificaci\u00f3 no revela res.",
  },
{
    name: 'Amulet dels Asaris',
    subtitle: 'Objecte',
    typeCss: 'objecte',
    iconPath: 'icons/gem-pendant.svg',
    effectText: "Amulet d'argent: sol amb un ull. S\u00edmbol de l'Orde dels Asaris.",
  },
]

function handlePrint() {
  window.print()
}
</script>

<template>
  <div class="content-area" :class="{ 'save-ink': saveInk }">
    <h1>Cartes d'Objectes</h1>
    <div class="cards-controls no-print">
      <button @click="handlePrint">Imprimir</button>
      <label>
        <input type="checkbox" v-model="saveInk">
        Estalvi de tinta
      </label>
    </div>
    <CardGrid>
      <PrintableCard
        v-for="(card, i) in cards"
        :key="i"
        v-bind="card"
      />
    </CardGrid>
  </div>
</template>
