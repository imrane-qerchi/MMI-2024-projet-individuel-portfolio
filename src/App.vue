<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router/auto'
import LogInOut from './components/LogInOut.vue'
</script>

<template>
  <div class="bg-fond min-h-screen text-blanc">
    <LogInOut />
    <nav>
      <ul>
        <li><RouterLink to="/">Accueil</RouterLink></li>
        <li><RouterLink to="/about">À propos</RouterLink></li>
        <li><RouterLink to="/projets">Mes projets</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
        <li><RouterLink to="/guide-style">Guide de style</RouterLink></li>
      </ul>
    </nav>

    <main>
      <RouterView v-slot="{ Component }">
        <Suspense>
          <component :is="Component" :key="$route.path" />
        </Suspense>
      </RouterView>
    </main>
  </div>
</template>
