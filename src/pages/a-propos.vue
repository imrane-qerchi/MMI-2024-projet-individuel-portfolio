<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts"></script>

<template>
  <div class="about-container lg:mx-20">
    <!-- Titre principal -->
    <h1 class="mt-12 px-6 text-left font-syne text-3xl font-bold lg:text-7xl">À propos de moi</h1>

    <!-- Sous-titre -->
    <p class="mt-4 px-6 text-left font-rubik text-sm text-gray-500 lg:text-lg">
      Juste un petit brief
    </p>

    <!-- Barre horizontale -->
    <div class="mx-6 my-6">
      <hr class="border-t-1 border-gray-500" />
    </div>

    <!-- Contenu principal -->
    <div class="px-6 text-sm leading-relaxed text-gray-300 md:text-base">
      <!-- Section Accroche -->
      <h2 class="text-4xl font-bold leading-tight text-white lg:text-[80px]">
        Développeur polyvalent<br />et créatif !
      </h2>

      <!-- Texte de description -->
      <p class="mt-6 font-rubik text-base lg:text-xl">
        Moi, c’est <strong>Imrane</strong>, étudiant en deuxième année de
        <strong>BUT Métiers du Multimédia et de l’Internet (MMi)</strong>, spécialisé en
        <strong>développement Web</strong>. Passionné par la réalisation de sites Web et
        d’applications, j’ai acquis des compétences en <strong>front-end</strong> et
        <strong>back-end</strong>.
      </p>
      <p class="mt-4 font-rubik text-base lg:text-xl">
        Je m’intéresse aussi au <strong>design UX/UI</strong> et à la
        <strong>communication</strong>, alliant technique et créativité pour créer des interfaces
        ergonomiques.
      </p>
    </div>

    <!-- Images décoratives -->
    <div class="mt-12 flex flex-col items-center gap-12 px-6">
      <!-- Première image -->
      <div class="relative max-w-xs">
        <img
          src="#"
          alt="Image enfant avec foulard"
          class="w-full rounded-lg object-cover shadow-lg"
        />
        <!-- Cercle décoratif en haut-gauche -->
        <div
          class="absolute left-0 top-0 h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-orange-500"
        ></div>
      </div>

      <!-- Deuxième image -->
      <div class="relative max-w-xs">
        <img
          src="#"
          alt="Image enfant avec verre"
          class="w-full rounded-lg object-cover shadow-lg"
        />
        <!-- Cercle décoratif en bas-droit -->
        <div
          class="absolute bottom-0 right-0 h-12 w-12 translate-x-1/2 translate-y-1/2 transform rounded-full border-2 border-orange-500"
        ></div>
      </div>
    </div>
    <!-- Section compétences -->
    <section class="space-y-12 px-6 py-16">
      <!-- Titre principal -->
      <h2 class="text-center font-syne text-2xl font-bold text-white lg:text-6xl">
        Parmi ce que je maîtrise...
      </h2>

      <!-- Grille des logos -->
      <div class="grid grid-cols-2 place-items-center gap-8 sm:grid-cols-3 lg:grid-cols-4">
        <!-- Figma -->
        <div class="flex flex-col items-center space-y-2">
          <img src="/figma.svg" alt="Figma" class="h-32 lg:h-36" />
          <p class="font-syne text-white">Figma</p>
        </div>

        <!-- PocketBase -->
        <div class="flex flex-col items-center space-y-2">
          <img src="/pocketbase.svg" alt="PocketBase" class="h-32 lg:h-36" />
          <p class="font-syne text-white">PocketBase</p>
        </div>

        <!-- Adobe Illustrator -->
        <div class="flex flex-col items-center space-y-2">
          <img src="/illustrator.svg" alt="Adobe Illustrator" class="h-32 lg:h-36" />
          <p class="font-syne text-white">Adobe Illustrator</p>
        </div>

        <!-- Photoshop -->
        <div class="flex flex-col items-center space-y-2">
          <img src="/photoshop.svg" alt="Photoshop" class="h-32 lg:h-36" />
          <p class="font-syne text-white">Photoshop</p>
        </div>

        <!-- DaVinci Resolve -->
        <div class="flex flex-col items-center space-y-2">
          <img src="/davinciresolve.svg" alt="DaVinci Resolve" class="h-32 lg:h-36" />
          <p class="font-syne text-white">DaVinci Resolve</p>
        </div>

        <!-- Tailwind CSS -->
        <div class="flex flex-col items-center space-y-2">
          <img src="/tailwind.svg" alt="Tailwind CSS" class="h-32 lg:h-36" />
          <p class="font-syne text-white">Tailwind CSS</p>
        </div>

        <!-- VueJS -->
        <div class="flex flex-col items-center space-y-2">
          <img src="/vueJS.svg" alt="VueJS" class="h-32 lg:h-36" />
          <p class="font-syne text-white">VueJS</p>
        </div>

        <!-- Wordpress -->
        <div class="flex flex-col items-center space-y-2">
          <img src="/wordpress.svg" alt="Wordpress" class="h-32 lg:h-36" />
          <p class="font-syne text-white">Wordpress</p>
        </div>
      </div>
    </section>
  </div>
</template>
