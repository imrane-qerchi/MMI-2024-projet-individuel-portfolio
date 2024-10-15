<script setup lang="ts">
import CardProjet from '@/components/cardProjet.vue'
import { ProjetsDomainesOptions } from '@/pocketbase-types'
import imageCard from '@/assets/image-card-exemple.png'
</script>

<template>
  <h1 class="text-center font-syne text-2xl">Guide de style</h1>
  <CardProjet
    nom="Bike2Office"
    client="BUT MMi"
    :domaines="[ProjetsDomainesOptions.Communication, ProjetsDomainesOptions.Développement]"
    :image_couverture="imageCard"
  />
</template>
