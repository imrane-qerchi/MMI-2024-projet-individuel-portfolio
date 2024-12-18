<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend'
import BtnDefault from '@/components/btnDefault.vue'
import CardProjet from '@/components/cardProjet.vue'

// Récupération des projets depuis PocketBase
const mesProjets = await pb.collection('projets').getFullList({
  sort: '-created' // Trier par les projets les plus récents
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Section de bienvenue -->
    <section class="flex flex-col items-center justify-center space-y-8 px-6 py-16 text-center">
      <!-- Titre principal -->
      <h1 class="font-syne text-3xl font-bold leading-tight lg:text-7xl">
        Bienvenue sur le <br />
        portfolio d’Imrane
      </h1>

      <!-- Bouton principal -->
      <BtnDefault text="MES PROJETS" withArrow />
    </section>

    <!-- Section de présentation -->
    <section class="flex flex-col items-start space-y-12 px-6 py-16 text-left">
      <!-- Titre -->
      <h2 class="font-syne text-2xl font-bold text-white lg:text-6xl">Pour faire connaissance</h2>

      <!-- Description -->
      <p class="max-w-md font-rubik text-sm leading-relaxed text-[#A8A8A8] lg:text-lg">
        Moi, c’est Imrane, étudiant en <br />
        BUT MMi à Montbéliard. Spécialisé dans le développement Web, mon domaine d’expertise s’étend
        jusqu’au design en passant par la communication.
      </p>

      <!-- Image alignée à droite -->
      <div class="relative mt-12 self-end">
        <img src="#" alt="Imrane en action" class="rounded-lg shadow-lg" />
        <!-- Décoration autour de l'image -->
        <div
          class="absolute left-2 top-2 h-full w-full rounded-lg border-2 border-orange-500"
        ></div>
      </div>

      <!-- Bouton centré par rapport à la page -->
      <div class="mt-12 flex justify-center">
        <BtnDefault text="À propos de moi" />
      </div>
    </section>

    <section class="space-y-12 px-6 py-16">
      <!-- Titre principal -->
      <h2 class="text-center font-syne text-2xl font-bold lg:text-6xl">Mes principaux projets</h2>

      <!-- Liste des cartes -->
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <CardProjet
          v-for="unProjet in mesProjets.slice(0, 4)"
          :key="unProjet.id"
          v-bind="unProjet"
        />
      </div>

      <!-- Bouton Explorez Plus -->
      <div class="mt-12 flex justify-center">
        <BtnDefault
          text="EXPLOREZ PLUS"
          withArrow
          outline
          class="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
        />
      </div>
    </section>

    <!-- Section compétences -->
    <section class="space-y-12 px-6 py-16">
      <!-- Titre principal -->
      <h2 class="text-center font-syne text-2xl font-bold text-white lg:text-6xl">
        Parmi ce que je maîtrise...
      </h2>

      <!-- Grille des logos -->
      <div class="grid grid-cols-2 place-items-center gap-8 sm:grid-cols-3 lg:grid-cols-4">
        <!-- Figma -->
        <div class="flex flex-col items-center space-y-2">
          <img src="/figma.svg" alt="Figma" class="h-32 lg:h-36" />
          <p class="font-syne text-white">Figma</p>
        </div>

        <!-- PocketBase -->
        <div class="flex flex-col items-center space-y-2">
          <img src="/pocketbase.svg" alt="PocketBase" class="h-32 lg:h-36" />
          <p class="font-syne text-white">PocketBase</p>
        </div>

        <!-- Adobe Illustrator -->
        <div class="flex flex-col items-center space-y-2">
          <img src="/illustrator.svg" alt="Adobe Illustrator" class="h-32 lg:h-36" />
          <p class="font-syne text-white">Adobe Illustrator</p>
        </div>

        <!-- Photoshop -->
        <div class="flex flex-col items-center space-y-2">
          <img src="/photoshop.svg" alt="Photoshop" class="h-32 lg:h-36" />
          <p class="font-syne text-white">Photoshop</p>
        </div>

        <!-- DaVinci Resolve -->
        <div class="flex flex-col items-center space-y-2">
          <img src="/davinciresolve.svg" alt="DaVinci Resolve" class="h-32 lg:h-36" />
          <p class="font-syne text-white">DaVinci Resolve</p>
        </div>

        <!-- Tailwind CSS -->
        <div class="flex flex-col items-center space-y-2">
          <img src="/tailwind.svg" alt="Tailwind CSS" class="h-32 lg:h-36" />
          <p class="font-syne text-white">Tailwind CSS</p>
        </div>

        <!-- VueJS -->
        <div class="flex flex-col items-center space-y-2">
          <img src="/vueJS.svg" alt="VueJS" class="h-32 lg:h-36" />
          <p class="font-syne text-white">VueJS</p>
        </div>

        <!-- Wordpress -->
        <div class="flex flex-col items-center space-y-2">
          <img src="/wordpress.svg" alt="Wordpress" class="h-32 lg:h-36" />
          <p class="font-syne text-white">Wordpress</p>
        </div>
      </div>
    </section>
  </div>
</template>
