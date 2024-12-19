<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { reactive, ref } from 'vue'

// État pour les champs du formulaire
const form = reactive({
  nom: '',
  email: '',
  objet: '',
  message: ''
})

// Référence pour le résultat de l'envoi
const result = ref<string>('')

// Fonction pour envoyer le message via Web3Forms
const envoyerMessage = async () => {
  const formData = new FormData()
  formData.append('access_key', 'edbb0aad-a3f7-4bc3-a8ae-62b6ff465064')
  formData.append('name', form.nom)
  formData.append('email', form.email)
  formData.append('subject', form.objet)
  formData.append('message', form.message)

  try {
    result.value = 'Veuillez patienter...'
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })

    const json = await response.json()

    if (response.status === 200) {
      result.value = 'Formulaire soumis avec succès !'
      // Réinitialiser les champs du formulaire
      form.nom = ''
      form.email = ''
      form.objet = ''
      form.message = ''
    } else {
      result.value = `Erreur : ${json.message}`
    }
  } catch (error) {
    console.error("Erreur lors de l'envoi du formulaire :", error)
    result.value = 'Une erreur est survenue. Veuillez réessayer.'
  } finally {
    // Cacher le message après quelques secondes
    setTimeout(() => {
      result.value = ''
    }, 3000)
  }
}
</script>

<template>
  <!-- Conteneur principal -->
  <div class="contact-container lg:mx-20">
    <!-- Titre principal -->
    <h1 class="mt-12 px-6 text-left font-syne text-3xl font-bold lg:text-7xl">Contact</h1>

    <!-- Sous-titre -->
    <p class="mt-4 px-6 text-left font-rubik text-sm text-gray-500 lg:text-lg">
      Pour n'importe quel projet ou information
    </p>

    <!-- Barre horizontale -->
    <div class="mx-6 my-6">
      <hr class="border-t-1 border-gray-500" />
    </div>

    <div class="flex flex-col items-start gap-8 px-6 py-12 lg:flex-row">
      <!-- Section Accroche -->
      <h2 class="font-syne text-4xl font-bold tracking-tighter text-white lg:w-1/3 lg:text-6xl">
        Entrons en<br />contact !
      </h2>

      <!-- Formulaire de contact -->
      <div class="bg-fond px-6 py-6 text-blanc lg:w-2/3">
        <form @submit.prevent="envoyerMessage" id="form" class="mx-auto max-w-xl space-y-6">
          <!-- Champ clé cachée -->
          <input type="hidden" name="access_key" value="edbb0aad-a3f7-4bc3-a8ae-62b6ff465064" />

          <!-- Champ Nom -->
          <div>
            <label for="nom" class="mb-2 block font-rubik text-lg">NOM</label>
            <input
              type="text"
              id="nom"
              name="name"
              v-model="form.nom"
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
              name="email"
              v-model="form.email"
              placeholder="Entrez votre email"
              class="w-full border-b-2 border-gray-500 bg-transparent p-3 font-rubik text-blanc focus:border-orange-400 focus:outline-none"
              required
            />
          </div>

          <!-- Champ Objet -->
          <div>
            <label for="objet" class="mb-2 block font-rubik text-lg">OBJET</label>
            <input
              type="text"
              id="objet"
              name="subject"
              v-model="form.objet"
              placeholder="Entrez l'objet du message"
              class="w-full border-b-2 border-gray-500 bg-transparent p-3 font-rubik text-blanc focus:border-orange-400 focus:outline-none"
              required
            />
          </div>

          <!-- Champ Message -->
          <div>
            <label for="message" class="mb-2 block font-rubik text-lg">MESSAGE</label>
            <textarea
              id="message"
              name="message"
              v-model="form.message"
              placeholder="Entrez votre message"
              class="w-full border-b-2 border-gray-500 bg-transparent p-3 font-rubik text-blanc focus:border-orange-400 focus:outline-none"
              rows="6"
              required
            ></textarea>
          </div>

          <!-- Champ Anti-Bot -->
          <input type="checkbox" name="botcheck" class="hidden" style="display: none" />

          <!-- Bouton Envoyer -->
          <div class="flex justify-center lg:justify-start">
            <button
              type="submit"
              class="flex items-center justify-center rounded-full bg-orange-400 px-8 py-3 font-rubik font-semibold text-white shadow-md transition-all duration-300 hover:bg-orange-600"
            >
              Envoyer
            </button>
          </div>
        </form>

        <!-- Résultat -->
        <div id="result" class="mt-4 text-center font-rubik text-lg text-white"></div>
      </div>
    </div>

    <!-- Image en bas de page -->
    <div class="mt-12 flex justify-center">
      <img
        src="/src/assets/ordi.png"
        alt="Illustration ordinateur"
        class="h-auto w-full max-w-3xl rounded-lg object-cover shadow-lg lg:max-w-5xl"
      />
    </div>
  </div>
</template>
