<template>
  <header class="bg-estrategika-azul text-white shadow-md">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
      <h1 class="text-xl font-bold tracking-tight">Estrategika</h1>

      <button @click="toggle" class="md:hidden focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

      <ul :class="['md:flex gap-6 text-sm', isOpen ? 'block' : 'hidden', 'md:block']">
        <RouterLink
          v-for="(item, i) in navItems"
          :key="i"
          :to="item.to"
          class="hover:text-estrategika-cafe"
          active-class="font-semibold underline"
        >
          {{ item.name }}
        </RouterLink>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const toggle = () => isOpen.value = !isOpen.value

const navItems = [
  { name: 'Inicio', to: '/' },
  { name: 'Servicios', to: '/servicios' },
  { name: 'Contacto', to: '/contacto' },
]
</script>
