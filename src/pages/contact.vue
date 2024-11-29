<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue';
import { pb } from '@/backend';
import BtnDefault from '@/components/btnDefault.vue';

// Variables de formulaire
const nom = ref('');
const email = ref('');
const message = ref('');

// Fonction pour envoyer le message
const envoyerMessage = async () => {
  try {
    await pb.collection('contact').create({
      nom: nom.value,
      email: email.value,
      message: message.value,
    });
    alert('Message envoyé avec succès!');
    // Réinitialiser les champs après envoi
    nom.value = '';
    email.value = '';
    message.value = '';
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    alert('Une erreur est survenue. Veuillez réessayer.');
  }
};
</script>

<template>
  <div class="py-12 px-6 bg-fond text-blanc">
    <h1 class="font-syne text-3xl text-left mb-4">Contactez-moi</h1>
    <p class="text-lg mb-8">Si vous avez des questions ou souhaitez discuter de projets, n'hésitez pas à me contacter.</p>

    <form @submit.prevent="envoyerMessage" class="space-y-6 max-w-xl mx-auto">
      <!-- Champ Nom -->
      <div>
        <label for="nom" class="block text-lg mb-2">Votre nom</label>
        <input
          type="text"
          id="nom"
          v-model="nom"
          placeholder="Entrez votre nom"
          class="w-full p-3 bg-transparent border-b-2 border-orange-500 text-blanc focus:outline-none focus:border-orange-700"
          required
        />
      </div>

      <!-- Champ Email -->
      <div>
        <label for="email" class="block text-lg mb-2">Votre email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="Entrez votre email"
          class="w-full p-3 bg-transparent border-b-2 border-orange-500 text-blanc focus:outline-none focus:border-orange-700"
          required
        />
      </div>

      <!-- Champ Message -->
      <div>
        <label for="message" class="block text-lg mb-2">Votre message</label>
        <textarea
          id="message"
          v-model="message"
          placeholder="Entrez votre message"
          class="w-full p-3 bg-transparent border-b-2 border-orange-500 text-blanc focus:outline-none focus:border-orange-700"
          rows="6"
          required
        ></textarea>
      </div>

      <!-- Bouton Envoyer -->
      <div class="flex justify-center">
        <BtnDefault text="Envoyer" @click="envoyerMessage" />
      </div>
    </form>
  </div>
</template>