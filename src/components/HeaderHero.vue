<template>
  <div
    class="fixed top-0 left-0 w-full z-50 text-center transition-all duration-500 ease-in-out"
    :style="{
      transform: `scale(${scale})`,
      opacity: opacity,
    }"
  >
    <h1 class="text-5xl font-bold tracking-tight text-estrategika-cafe py-8">Estrategika</h1>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({ scrollY: Number })

const scale = computed(() => Math.max(1 - props.scrollY / 500, 0.6))
const opacity = computed(() => Math.max(1 - props.scrollY / 300, 0.3))
</script>
