<template>
  <footer class="mt-20 bg-black px-6 py-10 text-white">
    <!-- Conteneur principal -->
    <div class="flex flex-col items-center space-y-8 text-center">
      <!-- Section Contact -->
      <div class="mb-16">
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

      <!-- Section Logo QRH et Réseaux sociaux -->
      <div class="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
        <!-- Logo QRH -->
        <div class="mb-10 flex justify-center lg:mb-0 lg:justify-start">
          <img src="/logo-qrh.svg" alt="QRH Logo" class="h-16 lg:h-20" />
        </div>

        <!-- Réseaux sociaux -->
        <div class="flex justify-center space-x-6">
          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/imrane-qerchi/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex h-12 w-12 items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="#C4C4C4"
            >
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>

          <!-- Behance -->
          <a
            href="https://www.behance.net/imraneqerchi"
            target="_blank"
            rel="noopener noreferrer"
            class="flex h-12 w-12 items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="#C4C4C4"
            >
              <path
                d="M8.228 15.01h-2.228v-2.01h2.261c1.878 0 2.003 2.01-.033 2.01zm6.758-2.677h3.018c-.117-1.715-2.73-1.977-3.018 0zm-6.804-3.333h-2.182v2h2.389c1.673 0 1.937-2-.207-2zm15.818-4v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5zm-10 3h5v-1h-5v1zm-3.552 3.618c1.907-.974 1.837-4.55-1.813-4.604h-4.635v9.978h4.311c4.522 0 4.445-4.534 2.137-5.374zm9.487.602c-.274-1.763-1.528-2.95-3.583-2.95-2.094 0-3.352 1.34-3.352 3.947 0 2.631 1.367 3.783 3.416 3.783s3.106-1.135 3.4-2h-2.111c-.736.855-2.893.521-2.767-1.353h5.06c.01-.634-.012-1.089-.063-1.427z"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- Mentions légales -->
      <div class="w-full">
        <hr class="mb-8 mt-4 border-gray-700 lg:mx-28 lg:mt-16" />
        <p class="font-syne text-xl text-gray-400 lg:text-2xl">
          © 2024. Imrane QERCHI. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
</template>
