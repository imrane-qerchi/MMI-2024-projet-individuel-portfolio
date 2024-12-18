<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'
import { pb } from '@/backend'
import BtnDefault from '@/components/btnDefault.vue'

// Variables de formulaire
const nom = ref('')
const email = ref('')
const message = ref('')

// Fonction pour envoyer le message
const envoyerMessage = async () => {
  try {
    await pb.collection('contact').create({
      nom: nom.value,
      email: email.value,
      message: message.value
    })
    alert('Message envoyé avec succès!')
    // Réinitialiser les champs après envoi
    nom.value = ''
    email.value = ''
    message.value = ''
  } catch (error) {
    console.error("Erreur lors de l'envoi du message:", error)
    alert('Une erreur est survenue. Veuillez réessayer.')
  }
}
</script>

<template>
  <!-- Conteneur principal -->
  <div class="contact-container lg:mx-20">
    <!-- Titre principal -->
    <h1 class="mt-12 px-6 text-left font-syne font-bold text-3xl lg:text-7xl">Contact</h1>

    <!-- Sous-titre -->
    <p class="mt-4 px-6 text-left font-rubik text-sm text-gray-500 lg:text-lg">
      Pour n'importe quel projet ou information
    </p>

    <!-- Barre horizontale -->
    <div class="mx-6 my-6">
      <hr class="border-t-1 border-gray-500" />
    </div>

    <!-- Section Accroche -->
    <h2 class="px-6 font-syne text-4xl font-bold tracking-tighter text-white lg:text-6xl">
      Entrons en<br />contact !
    </h2>

    <!-- Formulaire de contact -->
    <div class="bg-fond px-6 py-6 text-blanc">
      <form @submit.prevent="envoyerMessage" class="mx-auto max-w-xl space-y-6">
        <!-- Champ Nom -->
        <div>
          <label for="nom" class="mb-2 block font-rubik text-lg">NOM</label>
          <input
            type="text"
            id="nom"
            v-model="nom"
            placeholder="Entrez votre nom"
            class="w-full border-b-2 border-gray-500 bg-transparent p-3 font-rubik text-blanc focus:border-orange-400 focus:outline-none"
            required
          />
        </div>

        <!-- Champ Email -->
        <div>
          <label for="email" class="mb-2 block font-rubik text-lg">EMAIL</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Entrez votre email"
            class="w-full border-b-2 border-gray-500 bg-transparent p-3 font-rubik text-blanc focus:border-orange-400 focus:outline-none"
            required
          />
        </div>

        <!-- Champ Message -->
        <div>
          <label for="message" class="mb-2 block font-rubik text-lg">MESSAGE</label>
          <textarea
            id="message"
            v-model="message"
            placeholder="Entrez votre message"
            class="w-full border-b-2 border-gray-500 bg-transparent p-3 font-rubik text-blanc focus:border-orange-400 focus:outline-none"
            rows="6"
            required
          ></textarea>
        </div>

        <!-- Bouton Envoyer -->
        <div class="flex justify-center lg:justify-normal">
          <BtnDefault text="Envoyer" @click="envoyerMessage" />
        </div>
      </form>
    </div>
  </div>
</template>
