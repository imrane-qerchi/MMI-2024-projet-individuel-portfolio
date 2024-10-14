<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router/auto'
import LogInOut from './components/LogInOut.vue';
</script>

<template>
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