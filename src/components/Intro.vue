<script setup>
const base = import.meta.env.BASE_URL
</script>
<template>
  <div class="w-screen h-screen grid grid-flow-col">
    <!-- Lado izquierdo: imagen de fondo -->
    <div class="w-1/2">
      <img
        :src="`${base}img/logo/fondo_1.png`"
        alt="Fondo izquierdo"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Lado derecho: fondo blanco, contenido alineado al centro y a la derecha -->
    <div class="h-full w-1/2 bg-white flex justify-end items-center pr-8">
      <img :src="`${base}img/logo/logo.png`" alt="Logo" class="h-40 w-auto" />
    </div>
  </div>
</template>

