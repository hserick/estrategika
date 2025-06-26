<template>
  <h2 class="text-4xl font-bold text-gray-800 mb-4 mt-10 drop-shadow-md text-center">Nuestros Servicios</h2>
  <section class="w-screen min-h-screen flex flex-col justify-center bg-gray-50 px-12 py-16">
    <div class="grid grid-cols-2 gap-12 h-full">
      <!-- Texto a la izquierda -->
      <div class="flex flex-col justify-center animate-fade-in-left">
        <h2 class="text-4xl font-bold text-gray-800 mb-4 drop-shadow-md">Publicidad en camiones</h2>
        <p class="text-lg text-gray-700 leading-relaxed drop-shadow-sm">
          La publicidad en autobuses urbanos es una estrategia innovadora y altamente rentable que permite alcanzar a un público amplio de manera creativa y original. Hoy en día, se ha consolidado como un elemento habitual en el paisaje urbano de nuestra ciudad.
        </p>
      </div>

      <!-- Lista de servicios a la derecha -->
      <div class="flex flex-col justify-center">
        <div class="flex flex-col space-y-4 w-full max-w-2xl">
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
      </div>
    </div>
  </section>
  <section class="w-screen min-h-screen flex flex-col justify-center bg-gray-50 px-12 py-16">
    <div class="grid grid-cols-2 gap-12 h-full">
      <!--Listado de impresión e instalación de vinil-->
      <div class="flex flex-col justify-center animate-fade-in-left">
        <div class="relative w-full h-[400px] flex items-center justify-center">
          <!-- Contenedor de la rueda -->
          <div class="relative w-[500px] h-[250px] flex items-center justify-center overflow-visible">
            <div
              v-for="(item, index) in visibleItems"
              :key="item.id"
              class="absolute transition-all duration-500 ease-out text-white font-bold rounded-full flex items-center justify-center"
              :style="getStyle(index)"
              @click="moveTo(index)"
            >
              {{ item.label }}
            </div>
          </div>

          <!-- Controles -->
          <div class="absolute bottom-0 flex gap-10 mt-4">
            <button @click="rotate(-1)" class="px-4 py-2 bg-slate-800 text-white rounded">⟲</button>
            <button @click="rotate(1)" class="px-4 py-2 bg-slate-800 text-white rounded">⟳</button>
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-center animate-fade-in-left">
        <h2 class="text-4xl font-bold text-gray-800 mb-4 drop-shadow-md">Impresión e instalación de vinil</h2>
        <p class="text-lg text-gray-700 leading-relaxed drop-shadow-sm">
          Te ofrecemos un servicio integral que abarca la toma de medidas, diseño, producción e instalación de tus diseños decorativos, tanto para interiores como para exteriores.
        </p>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, computed } from 'vue'

const servicios = ref([
  {
    titulo: 'Selección de rutas',
    descripcion:
      'Elegir las rutas más adecuadas basándonos en nuestras recomendaciones para maximizar el impacto. Definir la duración de la campaña, la cantidad de autobuses a utilizar y el alcance de la misma.'
  },
  {
    titulo: 'Recepción y adaptación de materiales',
    descripcion:
      'Recibir los artes gráficos y adaptar las plantillas según las necesidades, incluyendo una prueba de color para asegurar la calidad y el ajuste adecuado.'
  },
  {
    titulo: 'Producción y colocación de materiales',
    descripcion:
      'Producir los materiales publicitarios, colocar los viniles en los autobuses y entregar imágenes fotográficas de los mismos para su validación.'
  },
  {
    titulo: 'Monitoreo',
    descripcion: 
      'Supervisar las rutas seleccionadas y el estado de las unidades para garantizar el correcto desarrollo de la campaña.'
  },
  {
    titulo: 'Reporte final y retiro de materiales',
    descripcion:
      'Elaborar un informe detallado sobre los resultados de la campaña y proceder con la retirada de los materiales publicitarios de los autobuses.'
  }
])

const activo = ref(null)

function toggle(index) {
  activo.value = activo.value === index ? null : index
}
// SCRIPT PARA LA NORIA

const items = ref([
  { id: 1, label: 'Letreros pvc' },
  { id: 2, label: 'Cajas de luz' },
  { id: 3, label: 'Viniles esmerilados y microperforados' },
  { id: 4, label: 'Recorte de vinil' },
  { id: 5, label: 'Flor graphic' },
  { id: 6, label: 'Entre otros' }
])

const activeIndex = ref(0)

// Define cuántos elementos mostrar (centrado + dos lados)
const visibleItems = computed(() => {
  const result = []
  const total = items.value.length
  for (let offset = -2; offset <= 2; offset++) {
    const index = (activeIndex.value + offset + total) % total
    result.push(items.value[index])
  }
  return result
})

// Rotar la rueda
function rotate(direction) {
  const total = items.value.length
  activeIndex.value = (activeIndex.value + direction + total) % total
}

// Estilo dinámico según la posición relativa
const colors = ['#2563EB', '#059669', '#D97706', '#D61F69', '#9333EA', '#0EA5E9']
function getStyle(index) {
  const order = [-2, -1, 0, 1, 2]
  const position = order[index]

  const scale = 1 - Math.abs(position) * 0.2
  const opacity = 1 - Math.abs(position) * 0.25
  const zIndex = 5 - Math.abs(position)
  const translateY = position * 80

  return {
    transform: `translateY(${translateY}px) scale(${scale})`,
    opacity,
    zIndex,
    backgroundColor: colors[index % colors.length],
    color: 'white',
    borderRadius: '0.5rem',
    width: '300px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
  } 
}
function moveTo(indexInvisible){
  if(indexInvisible === 2) return
    const offset = indexInvisible - 2
    activeIndex.value = (activeIndex.value + offset + items.value.length) % items.value.length
  }
// FIN DE SCRIPT PARA LA NORIA
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