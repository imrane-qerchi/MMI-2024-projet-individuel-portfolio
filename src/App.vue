<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router/auto'
import LogInOut from './components/LogInOut.vue'
import HeaderPortfolio from './components/headerPortfolio.vue';
</script>

<template>
  <div class="bg-fond min-h-screen text-blanc">
    <LogInOut />
    <HeaderPortfolio />

    <main>
      <RouterView v-slot="{ Component }">
        <Suspense>
          <component :is="Component" :key="$route.path" />
        </Suspense>
      </RouterView>
    </main>
  </div>
</template>
