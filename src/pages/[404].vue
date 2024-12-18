<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

// Fonction pour rediriger vers la page d'accueil
const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center bg-fond text-center text-blanc"
  >
    <!-- Message d'erreur 404 -->
    <h1 class="mb-4 text-4xl font-bold">Oups ! Page non trouvée</h1>
    <p class="mb-8 text-xl">Il semble que la page que vous cherchez n'existe pas.</p>

    <!-- Illustration SVG -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="mb-8 w-64"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" />
      <path d="M10 10l4 4m0-4l-4 4" stroke="currentColor" stroke-width="2" fill="none" />
    </svg>

    <!-- Bouton pour revenir à l'accueil -->
    <button
      @click="goHome"
      class="rounded-lg border-2 border-orange-500 px-6 py-3 text-lg font-semibold text-orange-500 transition duration-200 hover:bg-orange-500 hover:text-blanc"
    >
      Retour à l'accueil
    </button>
  </div>
</template>
