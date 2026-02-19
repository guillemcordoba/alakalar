<template>
  <aside class="sidebar" :class="{ open }">
    <div class="sidebar-header">
      <h2>El Temple Perdut d'Alak'Alar</h2>
      <div class="subtitle">Guia del Director de Joc</div>
    </div>
    <nav>
      <ul>
        <li><router-link to="/" @click="$emit('close')">Inici</router-link></li>
        <li class="section-divider">L'Aventura</li>
        <li><router-link to="/introduccio" @click="$emit('close')">Introduccio</router-link></li>
        <li class="section-divider">Part I: Els Goblins de Gel</li>
        <li class="zone-link"><router-link to="/part1/granges" @click="$emit('close')">Les Granges</router-link></li>
        <li class="zone-link"><router-link to="/part1/campament" @click="$emit('close')">El Campament</router-link></li>
        <li class="section-divider">Part II: La Cova</li>
        <li class="zone-link"><router-link to="/part2/saqueig" @click="$emit('close')">Saqueig del Campament</router-link></li>
        <li class="zone-link"><router-link to="/part2/boca" @click="$emit('close')">La Boca de la Cova</router-link></li>
        <li class="zone-link"><router-link to="/part2/mur" @click="$emit('close')">El Mur de Sang</router-link></li>
        <li class="section-divider">El Temple</li>
        <li class="section-divider">Acte III: Temple Superior</li>
        <li class="zone-link"><router-link to="/acte3/1" @click="$emit('close')">1. Basiliscs</router-link></li>
        <li class="zone-link"><router-link to="/acte3/2" @click="$emit('close')">2. Pont Trencat</router-link></li>
        <li class="zone-link"><router-link to="/acte3/3" @click="$emit('close')">3. Armeria</router-link></li>
        <li class="zone-link"><router-link to="/acte3/4" @click="$emit('close')">4. Quarters Exarca</router-link></li>
        <li class="zone-link"><router-link to="/acte3/5" @click="$emit('close')">5. Sala Temple</router-link></li>
        <li class="zone-link"><router-link to="/acte3/6" @click="$emit('close')">6. Quarters Temple</router-link></li>
        <li class="zone-link"><router-link to="/acte3/7" @click="$emit('close')">7. Menjador</router-link></li>
        <li class="zone-link"><router-link to="/acte3/8" @click="$emit('close')">8. Atri</router-link></li>
        <li class="section-divider">Acte IV: Temple Inferior</li>
        <li class="zone-link"><router-link to="/acte4/9" @click="$emit('close')">9. Temple Interior</router-link></li>
        <li class="zone-link"><router-link to="/acte4/10" @click="$emit('close')">10. Biblioteca</router-link></li>
        <li class="zone-link"><router-link to="/acte4/11" @click="$emit('close')">11. Estudi</router-link></li>
        <li class="zone-link"><router-link to="/acte4/12" @click="$emit('close')">12. Cambra Guardia</router-link></li>
        <li class="zone-link"><router-link to="/final" @click="$emit('close')">Final de l'Aventura</router-link></li>
        <li class="section-divider">Recursos</li>
        <li><router-link to="/mapes" @click="$emit('close')">Mapes del Temple</router-link></li>
        <li><router-link to="/objectes" @click="$emit('close')">Objectes i Continuacio</router-link></li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
defineProps({ open: Boolean })
defineEmits(['close'])
</script>
