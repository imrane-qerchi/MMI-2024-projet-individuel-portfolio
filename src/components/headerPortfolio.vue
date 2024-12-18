<script setup lang="ts">
import { ref } from 'vue'

// État pour gérer l'ouverture/fermeture du menu mobile
const isMenuOpen = ref(false)

// Fonction pour basculer l'état du menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Fonction pour fermer le menu
const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <!-- Header -->
  <header
    class="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-fond px-6 py-4 lg:px-16"
  >
    <!-- Logo -->
    <div>
      <img src="/logo-qrh.svg" alt="Logo QRH" class="h-12 lg:ml-10" />
    </div>

    <!-- Navigation pour Desktop -->
    <nav class="hidden lg:mr-10 lg:flex lg:items-center lg:space-x-12">
      <router-link to="/" class="font-syne text-lg text-gray-400 hover:text-white">
        ACCUEIL
      </router-link>
      <router-link to="/a-propos" class="font-syne text-lg text-gray-400 hover:text-white">
        À PROPOS
      </router-link>
      <router-link to="/projets" class="font-syne text-lg text-gray-400 hover:text-white">
        MES PROJETS
      </router-link>
      <router-link
        to="/contact"
        class="rounded-full border-2 border-gray-400 bg-fond-footer px-6 py-2 font-syne text-lg text-gray-400 hover:border-white hover:text-white"
      >
        CONTACT
      </router-link>
    </nav>

    <!-- Icône du menu mobile -->
    <div class="cursor-pointer lg:hidden" @click="toggleMenu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#C4C4C4"
        class="h-8 w-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </div>
  </header>

  <!-- Espace réservé pour éviter le chevauchement -->
  <div class="h-[64px]"></div>

  <!-- Menu latéral mobile -->
  <div
    v-if="isMenuOpen"
    class="fixed right-0 top-0 z-40 h-screen w-2/3 transform bg-fond text-white transition-transform"
  >
    <div class="flex justify-end p-4">
      <!-- Icône de fermeture -->
      <div class="cursor-pointer" @click="closeMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-8 w-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
    <nav class="p-6">
      <ul class="flex flex-col space-y-6">
        <li>
          <router-link to="/" class="text-xl font-semibold hover:underline" @click="closeMenu">
            Accueil
          </router-link>
        </li>
        <li>
          <router-link
            to="/a-propos"
            class="text-xl font-semibold hover:underline"
            @click="closeMenu"
          >
            À propos de moi
          </router-link>
        </li>
        <li>
          <router-link
            to="/projets"
            class="text-xl font-semibold hover:underline"
            @click="closeMenu"
          >
            Mes projets
          </router-link>
        </li>
        <li>
          <router-link
            to="/contact"
            class="text-xl font-semibold hover:underline"
            @click="closeMenu"
          >
            Contact
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
