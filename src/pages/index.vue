<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'
import { pb } from '@/backend'
import BtnDefault from '@/components/btnDefault.vue'
import CardProjet from '@/components/cardProjet.vue'
import ImgPb from '@/components/ImgPb.vue'

// Récupération des projets depuis PocketBase
const mesProjets = await pb.collection('projets').getFullList({
  sort: '-created' // Trier par les projets les plus récents
})

// Récupération des compétences depuis PocketBase
const skills = await pb.collection('skills').getFullList({
  sort: 'nom' // Trier par nom pour un affichage organisé
})

// Références pour le carrousel
const carouselContainer = ref<HTMLElement | null>(null)

const scrollLeft = () => {
  if (carouselContainer.value) {
    carouselContainer.value.scrollBy({ left: -150, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (carouselContainer.value) {
    carouselContainer.value.scrollBy({ left: 150, behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="min-h-screen lg:mx-20">
    <!-- Section de bienvenue -->
    <section class="flex flex-col items-center justify-center space-y-24 px-6 py-24 text-center">
      <!-- Titre principal -->
      <h1 class="font-syne text-3xl font-bold leading-tight lg:text-7xl">
        Bienvenue sur le <br />
        portfolio d’Imrane
      </h1>

      <!-- Bouton principal -->
      <router-link to="/projets">
        <BtnDefault text="MES PROJETS" :showArrow="true" />
      </router-link>
    </section>

    <!-- Section de présentation -->
    <section
      class="flex flex-col items-start space-y-12 px-6 py-16 text-left lg:flex-row lg:items-center lg:space-y-0"
    >
      <!-- Conteneur pour le texte -->
      <div class="space-y-6 lg:w-1/2">
        <!-- Titre -->
        <h2 class="font-syne text-2xl font-bold text-white lg:text-6xl">Pour faire connaissance</h2>

        <!-- Description -->
        <p class="max-w-md font-rubik text-sm leading-relaxed text-[#A8A8A8] lg:text-lg">
          Moi, c’est Imrane, étudiant en <br />
          BUT MMi à Montbéliard. Spécialisé dans le développement Web, mon domaine d’expertise
          s’étend jusqu’au design en passant par la communication.
        </p>

        <!-- Bouton -->
        <div class="bt-8">
          <router-link to="/a-propos">
            <BtnDefault text="À propos de moi" />
          </router-link>
        </div>
      </div>

      <!-- Conteneur pour l'image -->
      <div class="lg:w-1/2 lg:pl-12">
        <img
          src="/src/assets/image0.jpeg"
          alt="Imrane en action"
          class="w-full rounded-lg object-cover shadow-lg"
        />
      </div>
    </section>

    <section class="space-y-12 px-6 py-16">
      <!-- Titre principal -->
      <h2 class="text-center font-syne text-2xl font-bold lg:text-6xl">Mes principaux projets</h2>

      <!-- Liste des cartes -->
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <CardProjet
          v-for="unProjet in mesProjets.slice(0, 3)"
          :key="unProjet.id"
          v-bind="unProjet"
        />
      </div>

      <!-- Bouton Explorez Plus -->
      <div class="mt-12 flex justify-center">
        <router-link to="/projets">
          <BtnDefault
            text="EXPLOREZ PLUS"
            :showArrow="true"
            outline
            class="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
          />
        </router-link>
      </div>
    </section>

    <!-- Section compétences -->
    <section class="space-y-12 px-6 py-16 relative">
      <h2 class="text-center font-syne text-2xl font-bold text-white lg:text-6xl">
        Parmi ce que je maîtrise...
      </h2>

      <!-- Flèches pour navigation -->
      <button
        @click="scrollLeft"
        class="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-lg"
        aria-label="Scroll Left"
      >
      &#x21E6;
      </button>
      <button
        @click="scrollRight"
        class="absolute right-0 top-1/2 -translate-y-1/2 p-2"
        aria-label="Scroll Right"
      >
      &#x21E8;
      </button>

      <!-- Carrousel des compétences défilant -->
      <div
        ref="carouselContainer"
        class="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide px-8"
      >
        <div
          v-for="skill in skills"
          :key="skill.id"
          class="flex flex-col items-center space-y-2 shrink-0"
          style="width: 150px;"
        >
          <ImgPb
            :record="{ id: skill.id, collectionName: 'skills' }"
            :filename="skill.logo"
            width="128"
            height="128"
          />
          <p class="font-syne text-white text-center">{{ skill.nom }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.scrollbar-hide {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
</style>