<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend'
import CardProjet from '@/components/cardProjet.vue'
import BtnDefault from '@/components/btnDefault.vue'

const listeProjets = await pb.collection('projets').getFullList({ sort: '-created' })
</script>

<template>
  <div class="projets-container">
    <!-- Titre principal -->
    <h1 class="mt-12 px-6 text-left font-syne text-3xl">Mes projets</h1>

    <!-- Sous-titre -->
    <p class="mt-4 px-6 text-left text-xl text-gray-500">Un avant-goût de ce que j’ai pu faire</p>

    <!-- Barre horizontale -->
    <div class="mx-6 my-6">
      <hr class="border-t-2 border-gray-300" />
    </div>

    <!-- Liste des projets -->
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <CardProjet v-for="projet in listeProjets" :key="projet.id" v-bind="projet" />
    </div>

    <!-- Bouton explorer plus -->
    <div class="mt-8 flex justify-center">
      <BtnDefault text="EXPLOREZ PLUS" showArrow />
    </div>
  </div>
</template>
