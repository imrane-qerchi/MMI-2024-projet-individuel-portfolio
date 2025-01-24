<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend'
import CardProjet from '@/components/cardProjet.vue'

const listeProjets = await pb.collection('projets').getFullList({ sort: '-created' })
</script>

<template>
  <div class="projets-container lg:mx-20">
    <!-- Titre principal -->
    <h1 class="mt-12 px-6 text-left font-syne text-3xl font-bold lg:text-7xl">Mes projets</h1>

    <!-- Sous-titre -->
    <p class="mt-4 px-6 text-left font-rubik text-sm text-gray-500 lg:text-lg">
      Un avant-goût de ce que j’ai pu faire
    </p>

    <!-- Barre horizontale -->
    <div class="mx-6 my-6">
      <hr class="border-t-1 border-gray-500" />
    </div>

<!-- Liste des projets -->
<div class="grid grid-cols-1 gap-8 sm:grid-cols-2  xl:grid-cols-3">
  <CardProjet v-for="projet in listeProjets" :key="projet.id" v-bind="projet" />
</div>
  </div>
</template>
