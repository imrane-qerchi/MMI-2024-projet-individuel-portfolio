<script setup lang="ts">
import CardProjet from '@/components/cardProjet.vue'
import { pb } from '@/backend'
import BtnDefault from '@/components/btnDefault.vue'

const mesProjets = await pb.collection('projets').getFullList()
</script>

<template>
  <h1 class="text-center font-syne text-2xl">Guide de style</h1>
  <CardProjet v-bind="mesProjets[0]" />
  <!-- <CardProjet v-for="unProjet in mesProjets" v-bind="unProjet" :key="unProjet.id"/> -->
  <div>
    <BtnDefault text="MES PROJETS" :showArrow="true" />
  </div>
</template>
