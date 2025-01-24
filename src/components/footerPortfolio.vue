<template>
  <footer class="mt-20 bg-black px-6 py-10 text-white">
    <!-- Conteneur principal -->
    <div class="flex flex-col items-center space-y-8 text-center">
      <!-- Section Contact -->
      <div class="mb-4">
        <p class="my-6 font-syne text-xl font-semibold text-orange-500 lg:text-2xl">
          Contactez-moi !
        </p>
        <a
          href="mailto:imrane.qrh@gmail.com"
          class="mt-2 block font-syne text-2xl text-white underline hover:text-orange-400 lg:text-7xl"
        >
          imrane.qrh@gmail.com
        </a>
      </div>

      <!-- Mentions légales -->
      <div class="w-full">
        <hr class="mb-8 mt-4 border-gray-700 lg:mx-28" />
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <p class="font-syne text-gray-400 lg:ml-10">
            © 2024. Imrane QERCHI. Tous droits réservés.
          </p>
          <div class="mt-4 flex space-x-4 lg:mr-10 lg:mt-0">
            <router-link
              to="/mentions-legales"
              class="font-syne text-gray-400 hover:text-orange-400"
            >
              Mentions légales
            </router-link>
            <router-link
              to="/conditions-generales-utilisation"
              class="font-syne text-gray-400 hover:text-orange-400"
            >
              Conditions générales d'utilisation
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
