<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: "Bouton",
  },
  showArrow: {
    type: Boolean,
    default: true,
  },
  variant: {
    type: String as () => "solid" | "outline",
    default: "solid",
  },
});
</script>

<template>
  <button
    :class="[
      'font-semibold rounded-full px-8 py-3 flex items-center justify-center transition-all duration-300 shadow-md',
      variant === 'solid'
        ? 'bg-orange-500 text-white hover:bg-orange-600'
        : 'border border-orange-400 text-orange-400 bg-transparent hover:bg-orange-400 hover:text-white',
    ]"
  >
    {{ text }}
    <span v-if="showArrow" class="ml-2 text-xl">→</span>
  </button>
</template>