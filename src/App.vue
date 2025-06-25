<template>
  <div class="relative overflow-y-auto">
    <!-- Cohete global -->
    <div class="fixed right-8 bottom-8 z-50 pointer-events-none">
      <img
        :class="[
          'w-12 h-42 transition-transform',
          animStage === 'wiggle' ? 'animate-wiggle' : '',
          animStage === 'fly' ? 'animate-fly' : '',
          animStage === 'reset' ? 'return-to-base' : '',
          animStage === 'hidden' ? 'opacity-0' : 'opacity-100'
        ]"
        src="/img/logo/cohete.png"
        alt="Cohete"
      />
    </div>

    <!-- Secciones envueltas ordenadamente -->
    <div id="intro"><Intro /></div>
    <div id="nosotros"><Nosotros /></div>
    <div id="servicios"><Servicios /></div>
    <div id="contacto"><Contacto /></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Intro from './components/Intro.vue'
import Nosotros from './components/Nosotros.vue'
import Servicios from './components/Servicios.vue'
import Contacto from './components/Contacto.vue'

const animStage = ref('start')

onMounted(() => {
  animStage.value = 'wiggle'
  startLoop()
})

function startLoop() {
  setTimeout(() => {
    animStage.value = 'fly'
    setTimeout(() => {
      animStage.value = 'hidden'
      setTimeout(() => {
        animStage.value = 'reset'
        setTimeout(() => {
          animStage.value = 'wiggle'
          startLoop()
        }, 2000)
      }, 300)
    }, 5000)
  }, 1200)
}
</script>

<style scoped>
/* Animaciones que ya habías definido en Intro.vue */
@keyframes wiggle {
  0%, 100% { transform: rotate(0); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}

@keyframes rocket-loop {
  0% {
    transform: translateY(0) rotate(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-110vh) rotate(5deg);
    opacity: 0;
  }
}

@keyframes return-to-start {
  0% {
    transform: translateY(110vh) rotate(-5deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
}

.animate-wiggle {
  animation: wiggle 1s ease-in-out infinite;
}

.animate-fly {
  animation: rocket-loop 2s linear forwards;
}

.return-to-base {
  animation: return-to-start 2s ease-out forwards;
}
</style>
