<script setup lang="ts">
import { ref } from "vue";

// État pour gérer l'ouverture/fermeture du menu
const isMenuOpen = ref(false);

// Fonction pour basculer l'état du menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Fonction pour fermer le menu
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <!-- Header -->
  <header
    class="flex items-center justify-between w-full px-6 py-4 bg-fond fixed top-0 left-0 z-50"
  >
    <!-- Logo -->
    <div>
      <img src="/logo-qrh.svg" alt="Logo QRH" class="h-10" />
    </div>

    <!-- Icône du menu -->
    <div class="cursor-pointer" @click="toggleMenu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#C4C4C4"
        class="w-8 h-8"
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

  <!-- Espace réservé pour le header -->
  <div class="h-[64px]"></div>

  <!-- Menu latéral -->
  <div
    v-if="isMenuOpen"
    class="fixed top-0 right-0 w-2/3 h-screen bg-fond text-white z-40 transition-transform transform"
  >
    <div class="flex justify-end p-4">
      <!-- Icône de fermeture -->
      <div class="cursor-pointer" @click="closeMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-8 h-8"
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
          <router-link
            to="/"
            class="text-xl font-semibold hover:underline"
            @click="closeMenu"
          >
            Accueil
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
            to="/a-propos"
            class="text-xl font-semibold hover:underline"
            @click="closeMenu"
          >
            À propos de moi
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
