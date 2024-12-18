<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router/auto'
import LogInOut from './components/LogInOut.vue'
import HeaderPortfolio from './components/headerPortfolio.vue'
import FooterPortfolio from './components/footerPortfolio.vue'
</script>

<template>
  <div class="min-h-screen bg-fond text-blanc">
    <LogInOut />
    <HeaderPortfolio />

    <main>
      <RouterView v-slot="{ Component }">
        <Suspense>
          <component :is="Component" :key="$route.path" />
        </Suspense>
      </RouterView>
    </main>

    <FooterPortfolio />
  </div>
</template>
