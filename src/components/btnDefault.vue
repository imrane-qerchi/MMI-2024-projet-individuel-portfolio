<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: 'Bouton'
  },
  showArrow: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String as () => 'solid' | 'outline',
    default: 'solid'
  }
})
</script>

<template>
  <button
    :class="[
      'flex items-center justify-center rounded-full px-8 py-3 font-rubik text-sm shadow-md transition-all duration-300',
      variant === 'solid'
        ? 'bg-orange-400 text-white hover:bg-orange-600'
        : 'border border-orange-400 bg-transparent text-white hover:bg-orange-400 hover:text-white'
    ]"
  >
    {{ text }}
    <span v-if="showArrow" class="ml-2 text-xl">→</span>
  </button>
</template>
