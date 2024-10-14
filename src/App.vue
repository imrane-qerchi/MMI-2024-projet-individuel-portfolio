<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router/auto'
import LogInOut from './components/LogInOut.vue';
</script>

<template>
  <h1 class="text-2xl">Portfolio</h1>
  <LogInOut/>
  <nav>
    <ul>
        <li><RouterLink to="/">Accueil</RouterLink></li>
        <li><RouterLink to="/about">À propos</RouterLink></li>
        <li><RouterLink to="/projets">Projets</RouterLink></li>
    </ul>
  </nav>
  
  <main>
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component" :key="$route.path"/>
      </Suspense>
    </RouterView>
  </main>
</template>