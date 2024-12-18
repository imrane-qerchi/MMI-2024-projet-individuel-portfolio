<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { pb } from '@/backend'
import ImgPb from '@/components/ImgPb.vue'
import type { ProjetsResponse } from '@/pocketbase-types'

const route = useRoute() // Pour accéder aux paramètres de l'URL
const projet = ref<ProjetsResponse | null>(null)

// Fonction pour récupérer le projet par son ID
const fetchProjetById = async () => {
  const id = (route.params as { id: string }).id // Récupère l'id depuis l'URL
  try {
    projet.value = await pb.collection('projets').getOne<ProjetsResponse>(id)
  } catch (error) {
    console.error('Erreur lors de la récupération du projet :', error)
    projet.value = null
  }
}

onMounted(fetchProjetById)

const props = defineProps<ProjetsResponse>()
</script>

<template>
  <section class="min-h-screen text-white px-6 py-16 lg:px-16 lg:py-32">
    <!-- Conteneur principal -->
    <div v-if="projet" class="max-w-3xl mx-auto space-y-8">
      <!-- Titre principal -->
      <div class="border-b border-gray-600 pb-4">
        <h1 class="text-4xl lg:text-6xl font-syne font-bold">{{ projet.nom }}</h1>
        <p class="mt-2 text-gray-400 text-sm lg:text-base font-rubik">
          {{ projet.sous_titre }}
        </p>
      </div>

      <!-- Sous-titre -->
      <h2 class="text-2xl lg:text-4xl font-syne font-bold">Le Projet</h2>

      <!-- Texte descriptif -->
      <div class="space-y-6 text-gray-300 text-sm lg:text-lg font-rubik leading-relaxed">
        <p v-html="projet?.description_projet"></p>
      </div>

      <!-- Affichage des images -->
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <ImgPb
          v-for="(image, index) in projet.images"
          :key="index"
          :record="projet"
          :filename="image"
          class="h-72 w-full rounded-2xl object-cover"
        />
      </div>

      <!-- Sous-titre -->
      <h2 class="text-2xl lg:text-4xl font-syne font-bold">Mon Travail</h2>

      <!-- Texte descriptif -->
      <div class="space-y-6 text-gray-300 text-sm lg:text-lg font-rubik leading-relaxed">
        <p v-html="projet?.description_contribution"></p>
      </div>
    </div>

    <!-- Message si le projet n'existe pas -->
    <div v-else class="text-center text-gray-400">
      <p>Projet non trouvé ou indisponible.</p>
    </div>
  </section>
</template>
