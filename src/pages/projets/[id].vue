<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { pb } from '@/backend'
import ImgPb from '@/components/ImgPb.vue'
import type { ProjetsResponse } from '@/pocketbase-types'
import BtnDefault from '@/components/btnDefault.vue'

const route = useRoute() // Pour accéder aux paramètres de l'URL
const projet = ref<ProjetsResponse | null>(null)

// Récupération des projets depuis PocketBase
const mesProjets = await pb.collection('projets').getFullList({
  sort: '-created' // Trier par les projets les plus récents
})

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

const isLightboxOpen = ref(false) // État pour ouvrir/fermer la lightbox
const currentImage = ref('') // Nom du fichier actuellement affiché en grand

const openLightbox = (image: string) => {
  currentImage.value = image
  isLightboxOpen.value = true
}

const closeLightbox = () => {
  isLightboxOpen.value = false
  currentImage.value = ''
}
</script>

<template>
  <section class="min-h-screen px-6 py-16 text-white lg:px-16 lg:py-20">
    <!-- Conteneur principal -->
    <div v-if="projet" class="mx-auto max-w-4xl space-y-12">
      <!-- Titre principal -->
      <div class="border-b border-gray-600 pb-6">
        <h1 class="font-syne text-4xl font-bold lg:text-6xl">{{ projet.nom }}</h1>
        <p class="mt-2 font-rubik text-sm text-gray-400 lg:text-base">
          {{ projet.sous_titre }}
        </p>
      </div>

      <!-- Image Principale -->
      <div class="flex justify-center">
        <ImgPb
          :record="projet"
          :filename="projet.image_principale"
          class="max-h-[700px] w-full max-w-[1200px] rounded-2xl object-contain"
          style="height: auto"
        />
      </div>

      <!-- Sous-titre et Texte descriptif -->
      <div class="space-y-6 text-left">
        <h2 class="font-syne text-2xl font-bold lg:text-4xl">Le Projet</h2>
        <div class="space-y-6 font-rubik text-sm leading-relaxed text-gray-300 lg:text-lg">
          <p v-html="projet?.description_projet"></p>
        </div>
      </div>

      <!-- Lightbox -->
      <div
        v-if="isLightboxOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
        @click="closeLightbox"
      >
        <img
          :src="pb.files.getUrl(projet, currentImage)"
          alt="Image en grand"
          class="max-h-full max-w-full rounded-lg"
        />
      </div>

      <!-- Affichage des images -->
      <div class="mx-auto grid max-w-4xl grid-cols-1 place-items-center gap-8 lg:grid-cols-2">
        <ImgPb
          v-for="(image, index) in projet.images"
          :key="index"
          :record="projet"
          :filename="image"
          class="h-[300px] w-full cursor-pointer rounded-2xl object-cover"
          @click="openLightbox(image)"
        />
      </div>

      <!-- Sous-titre et Texte descriptif -->
      <div class="space-y-6 text-left">
        <h2 class="font-syne text-2xl font-bold lg:text-4xl">Mon Travail</h2>
        <div class="space-y-6 font-rubik text-sm leading-relaxed text-gray-300 lg:text-lg">
          <p v-html="projet?.description_contribution"></p>
        </div>
      </div>

      <!-- Bouton vers le projet -->
      <div class="mt-20 flex justify-center">
        <a :href="projet?.lien" target="_blank" rel="noopener noreferrer">
          <BtnDefault text="VOIR LE PROJET" variant="outline" :showArrow="true" />
        </a>
      </div>
    </div>
  </section>
</template>
