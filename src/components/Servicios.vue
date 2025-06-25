<template>
  <section class="w-screen h-screen grid grid-cols-2 px-12 py-16 bg-gray-50">
    <!-- Texto a la izquierda -->
    <div class="flex flex-col justify-center pr-8 animate-fade-in-left">
      <h2 class="text-4xl font-bold text-gray-800 mb-4 drop-shadow-md">Nuestros Servicios</h2>
      <p class="text-lg text-gray-700 leading-relaxed drop-shadow-sm">
        En Estrategika ofrecemos soluciones adaptadas a tus necesidades. Explora cada uno de nuestros servicios para conocer cómo podemos ayudarte a transformar tus ideas en realidad.
      </p>
    </div>

    <!-- Lista desplegable de servicios a la derecha -->
    <div class="flex flex-col space-y-4">
      <div
        v-for="(servicio, index) in servicios"
        :key="index"
        class="border border-gray-300 rounded-lg bg-white shadow-sm"
      >
        <button
          @click="toggle(index)"
          class="w-full text-left px-6 py-4 font-semibold text-gray-800 hover:bg-gray-100 transition"
        >
          {{ servicio.titulo }}
        </button>

        <div
          v-if="activo === index"
          class="px-6 pb-4 text-gray-600 text-base leading-relaxed animate-fade-in"
        >
          {{ servicio.descripcion }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const servicios = ref([
  {
    titulo: 'Desarrollo Web',
    descripcion:
      'Creamos aplicaciones web escalables con tecnologías modernas, centradas en rendimiento y experiencia de usuario.'
  },
  {
    titulo: 'Aplicaciones móviles',
    descripcion:
      'Desarrollamos apps nativas y multiplataforma que conectan con tus usuarios donde más lo necesitan.'
  },
  {
    titulo: 'Automatización de procesos',
    descripcion:
      'Digitalizamos y optimizamos tus procesos internos para ahorrar tiempo y evitar errores operativos.'
  }
])

const activo = ref(null)

function toggle(index) {
  activo.value = activo.value === index ? null : index
}
</script>

<style scoped>
@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-left {
  animation: fade-in-left 1s ease-out;
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
</style>

