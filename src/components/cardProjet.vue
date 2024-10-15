<script setup lang="ts">
import type { ProjetsResponse } from '@/pocketbase-types'
import ImgPb from './ImgPb.vue';

const props = defineProps<ProjetsResponse>()
</script>

<template>
  <div
    class="relative flex h-[468px] w-[300px] flex-col items-start justify-start gap-[19px] rounded-2xl"
  >
    <div class="relative h-[332.57px] flex-shrink-0 flex-grow-0 self-stretch">
      <ImgPb
        :record="props"
        :filename="image_couverture"
        class="absolute left-[-1px] top-[-1px] h-[333px] w-[300px] rounded-2xl object-none"
      />
    </div>
    <div
      class="flex h-[63px] flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-8 self-stretch"
    >
      <div class="relative flex flex-shrink-0 flex-grow-0 items-center justify-start gap-8">
        <p class="flex-shrink-0 flex-grow-0 text-left text-base font-bold text-white">
          {{ nom }}
        </p>
        <svg
          width="48"
          height="2"
          viewBox="0 0 48 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="flex-shrink-0 flex-grow-0"
          preserveAspectRatio="xMidYMid meet"
        >
          <line y1="1.0658" x2="48" y2="1.0658" stroke="#FB923C"></line>
        </svg>
      </div>
      <div
        class="flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-2 self-stretch"
      >
        <div class="relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-4">
          <p class="w-[72px] flex-shrink-0 flex-grow-0 text-left text-sm text-[#949494]">
            Client :
          </p>
          <p class="flex-shrink-0 flex-grow-0 text-left text-sm text-white">{{ client }}</p>
        </div>
        <div class="relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-4">
          <p class="w-[72px] flex-shrink-0 flex-grow-0 text-left text-sm text-[#949494]">
            Domaine :
          </p>
          <p
            v-for="unDomaine in domaines"
            :key="unDomaine"
            class="flex-shrink-0 flex-grow-0 text-left text-sm text-white"
          >
            {{ unDomaine }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
