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
    stats: [{ iconPath: 'icons/crossed-swords.svg', value: '1d4' }],
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
    stats: [
      { iconPath: 'icons/round-shield.svg', value: '5' },
      { iconPath: 'icons/running-ninja.svg', value: '+2' },
    ],
  },
  {
    name: "L'Ull de Laki",
    subtitle: 'Rel\u00edquia',
    typeCss: 'reliquia',
    iconPath: 'icons/brass-eye.svg',
    effectText: 'Retorna la vida a una persona morta de fa menys de 7 dies',
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
    name: 'Amulet Misteri\u00f3s',
    subtitle: 'Objecte',
    typeCss: 'objecte',
    iconPath: 'icons/gem-pendant.svg',
    effectText: "Amulet d'argent amb el s\u00edmbol d'un sol amb un ull.",
  },
]

function handlePrint() {
  window.print()
}
</script>

<template>
  <div class="content-area" :class="{ 'save-ink': saveInk }">
    <h1 class="no-print">Cartes d'Objectes</h1>
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
