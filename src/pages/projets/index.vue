<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend'

const listeProjets = await pb.collection('projets').getFullList()
</script>

<template>
  <h1 class="font-syne text-2xl text-center">Mes projets</h1>

  <ul>
    <li v-for="projet in listeProjets" :key="projet.id">{{ projet.nom }}</li>
  </ul>
</template>
