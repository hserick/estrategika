<template>
  <div class="w-screen h-screen grid grid-cols-2">
    <!-- Columna izquierda -->
    <div class="hidden md:block">
      <img
        :src="`${base}img/logo/fondo_1.png`"
        alt="Fondo izquierdo"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Columna derecha -->
    <div class="bg-white w-screen md:w-full">
      <!-- Aseguramos altura completa y centrado vertical -->
      <div class="h-screen flex items-center justify-center">
        <div class="grid grid-cols-12 w-full px-10 items-center">
          <!-- Logo alineado a la derecha -->
          <div class="col-span-11 flex justify-end">
            <img
              :src="`${base}img/logo/logo.png`"
              alt="Logo Estrategika"
              class="h-40"
            />
          </div>
          
          <!-- Espacio para el cohete -->
          <div id="rocket-anchor" class="col-span-1 flex items-center justify-start">
            <!-- Puede estar vacío -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const base = import.meta.env.BASE_URL
</script>
