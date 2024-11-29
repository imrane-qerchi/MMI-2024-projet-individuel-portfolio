<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend';
import BtnDefault from '@/components/btnDefault.vue';
import CardProjet from '@/components/cardProjet.vue';

// Récupération des projets depuis PocketBase
const mesProjets = await pb.collection('projets').getFullList({
  sort: '-created', // Trier par les projets les plus récents
});
</script>

<template>
  <div class="min-h-screen">
    <!-- Section de bienvenue -->
    <section
      class="flex flex-col items-center justify-center text-center py-16 px-6 space-y-8"
    >
      <!-- Titre principal -->
      <h1 class="text-3xl font-bold leading-tight">
        Bienvenue sur le <br />
        portfolio d’Imrane
      </h1>

      <!-- Bouton principal -->
      <BtnDefault text="MES PROJETS" withArrow />
    </section>

    <!-- Section de présentation -->
    <section
      class="flex flex-col items-start text-left py-16 px-6 space-y-12"
    >
      <!-- Titre -->
      <h2 class="text-2xl font-bold text-white">Pour faire connaissance</h2>

      <!-- Description -->
      <p class="text-lg leading-relaxed text-[#A8A8A8] max-w-md">
        Moi, c’est Imrane, étudiant en <br />
        BUT MMi à Montbéliard. Spécialisé dans le développement Web, mon domaine
        d’expertise s’étend jusqu’au design en passant par la communication.
      </p>

      <!-- Image alignée à droite -->
      <div class="relative mt-12 self-end">
        <img
          src="#"
          alt="Imrane en action"
          class="rounded-lg shadow-lg"
        />
        <!-- Décoration autour de l'image -->
        <div
          class="absolute top-2 left-2 border-2 border-orange-500 rounded-lg w-full h-full"
        ></div>
      </div>

      <!-- Bouton centré par rapport à la page -->
      <div class="mt-12 flex justify-center">
        <BtnDefault text="À propos de moi" />
      </div>
    </section>

    <section class="py-16 px-6 space-y-12">
    <!-- Titre principal -->
    <h2 class="text-2xl font-bold text-center">Mes principaux projets</h2>

    <!-- Liste des cartes -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <CardProjet v-for="unProjet in mesProjets.slice(0, 4)" :key="unProjet.id" v-bind="unProjet" />
    </div>

    <!-- Bouton Explorez Plus -->
    <div class="flex justify-center mt-12">
      <BtnDefault
        text="EXPLOREZ PLUS"
        withArrow
        outline
        class="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
      />
    </div>
  </section>
  </div>
</template>
