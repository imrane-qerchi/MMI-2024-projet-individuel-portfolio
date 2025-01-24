<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'
import { pb } from '@/backend'
import ImgPb from '@/components/ImgPb.vue'

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
  <div class="about-container lg:mx-20">
    <!-- Titre principal -->
    <h1 class="mt-12 px-6 text-left font-syne text-3xl font-bold lg:text-7xl">À propos de moi</h1>

    <!-- Sous-titre -->
    <p class="mt-4 px-6 text-left font-rubik text-sm text-gray-500 lg:text-lg">
      Juste un petit brief
    </p>

    <!-- Barre horizontale -->
    <div class="mx-6 my-6">
      <hr class="border-t-1 border-gray-500" />
    </div>

    <section class="px-6 py-16 lg:py-32">
      <!-- Conteneur principal en flex pour desktop -->
      <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between">
        <!-- Titre à gauche -->
        <div class="mb-8 lg:mb-0 lg:w-1/2">
          <h2 class="text-4xl font-bold leading-tight text-white lg:text-[80px] lg:leading-[1.1]">
            Développeur polyvalent<br />et créatif !
          </h2>
        </div>

        <!-- Contenu texte à droite -->
        <div class="text-sm leading-relaxed text-gray-300 md:text-base lg:w-1/2">
          <p class="mt-6 font-rubik text-base lg:text-xl">
            Moi, c’est <strong>Imrane</strong>, étudiant en deuxième année de
            <strong>BUT Métiers du Multimédia et de l’Internet (MMi)</strong>, spécialisé en
            <strong>développement Web</strong>. Passionné par la réalisation de sites Web et
            d’applications, j’ai acquis des compétences en <strong>front-end</strong> et
            <strong>back-end</strong>.
          </p>
          <p class="mt-4 font-rubik text-base lg:text-xl">
            Je m’intéresse aussi au <strong>design UX/UI</strong> et à la
            <strong>communication</strong>, alliant technique et créativité pour créer des
            interfaces ergonomiques. J'ai participé à divers projets que ce soit au sein du BUT ou
            au niveau personnel, renforçant ainsi mes compétences. Ouvert à toute opportunité, je
            cherche à approfondir mon expertise dans le <strong>développement full-stack</strong>.
          </p>
        </div>
      </div>
    </section>

    <!-- Images décoratives -->
    <div class="mt-12 flex flex-col items-center gap-12 px-6 lg:flex-row lg:justify-between">
      <!-- Première image -->
      <div class="relative max-w-xs lg:max-w-lg">
        <img
          src="/src/assets/image1.jpeg"
          alt="Image enfant avec foulard"
          class="w-full rounded-lg object-cover shadow-lg"
        />
      </div>

      <!-- Deuxième image -->
      <div class="relative max-w-xs lg:max-w-lg">
        <img
          src="/src/assets/image2.jpeg"
          alt="Image enfant avec verre"
          class="w-full rounded-lg object-cover shadow-lg"
        />
      </div>
    </div>

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