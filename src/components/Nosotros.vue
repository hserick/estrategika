<script setup>
const base = import.meta.env.BASE_URL
</script>
<template>
  <section class="w-screen min-h-screen grid grid-cols-1 md:grid-cols-2 relative">
    <!-- Texto a la izquierda -->
    <div class="bg-white/80 flex flex-col justify-center px-6 py-10 md:px14 animate-fade-in-left z-10 shadow-lg md:relative absolute top-0 left-0 w-full h-full backdrop-blur-sm">
      <h2 class="text-5xl font-bold text-gray-800 mb-6 drop-shadow-md">Nosotros</h2>
      <p class="text-lg text-gray-700 leading-relaxed drop-shadow-sm">
        En Estrategika, fusionamos estrategia, diseño y tecnología para convertir ideas en soluciones efectivas. Nuestro enfoque combina creatividad con análisis técnico para resolver desafíos reales.
      </p>
    </div>

    <!-- Imagen a la derecha -->
    <div class="z-0">
      <img
        :src="`${base}/img/nosotros/fondo_1.png`"
        alt="Imagen sección Nosotros"
        class="w-full h-full object-cover"
      />
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>
