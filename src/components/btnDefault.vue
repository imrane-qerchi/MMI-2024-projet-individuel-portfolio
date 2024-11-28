<script setup lang="ts">
// Propriétés dynamiques pour le texte du bouton et la flèche
defineProps({
  text: {
    type: String,
    default: 'MES PROJETS' // Texte par défaut
  },
  showArrow: {
    type: Boolean,
    default: true // Par défaut, la flèche est visible
  }
})
</script>

<template>
  <button
    class="flex items-center justify-center rounded-full bg-orange-500 px-8 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:bg-orange-600"
  >
    {{ text }}
    <!-- Affiche la flèche uniquement si showArrow est true -->
    <span v-if="showArrow" class="ml-2 text-xl">→</span>
  </button>
</template>
