<script setup lang="ts">
import type { ProjetsResponse } from '@/pocketbase-types'
import ImgPb from './ImgPb.vue'

const props = defineProps<ProjetsResponse>()
</script>

<template>
  <router-link
    :to="`/projets/${props.id}`"
    class="relative flex flex-col items-start justify-start gap-4 rounded-2xl p-4 font-syne transition-transform hover:scale-105 sm:h-auto sm:w-full md:w-[300px] lg:h-[468px] lg:w-[350px] xl:w-[400px]"
  >
    <!-- Image -->
    <div class="relative h-[200px] w-full flex-shrink-0 sm:h-[250px] md:h-[300px] lg:h-[332px]">
      <ImgPb
        :record="props"
        :filename="image_couverture"
        class="h-full w-full rounded-2xl object-cover"
      />
    </div>

    <!-- Content -->
    <div class="flex w-full flex-col gap-2">
      <!-- Title and Line -->
      <div class="flex items-center">
        <!-- Title -->
        <p class="text-base font-bold text-white">
          {{ nom }}
        </p>

        <!-- Line (SVG) -->
        <svg
          class="ml-4"
          width="40"
          height="2"
          viewBox="0 0 40 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <line x1="0" y1="1" x2="40" y2="1" stroke="#FB923C" stroke-width="2"></line>
        </svg>
      </div>

      <!-- Client Info -->
      <div class="flex items-start gap-4">
        <p class="w-[72px] text-left text-sm text-[#949494]">Client :</p>
        <p class="text-left text-sm text-white">{{ client }}</p>
      </div>

      <!-- Domain Info -->
      <div class="flex items-start gap-4">
        <p class="w-[72px] text-left text-sm text-[#949494]">Domaine :</p>
        <p v-for="unDomaine in domaines" :key="unDomaine" class="text-left text-sm text-white">
          {{ unDomaine }}
        </p>
      </div>
    </div>
  </router-link>
</template>
