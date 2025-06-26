<template>
  <div class="relative h-screen overflow-y-auto">
    

    <!-- Envoltorio de secciones -->
    <div class="flex flex-col">
      <div id="intro" class="min-h-screen"><Intro /></div>
      <div id="nosotros" class="min-h-screen"><Nosotros /></div>
      <div id="servicios" class="min-h-screen"><Servicios /></div>
      <div id="contacto" class="min-h-screen"><Contacto /></div>
    </div>
  </div>
  <teleport to="#rocket-anchor">
  <div class="z-50 relative">
    <img
      :class="[
        'w-12 transition-transform',
        animStage === STAGE.WIGGLE ? 'animate-wiggle' : '',
        animStage === STAGE.FLY ? 'animate-fly-up' : '',
        animStage === STAGE.DESCEND ? 'animate-return-from-below' : '',
        animStage === STAGE.HIDDEN ? 'opacity-0' : 'opacity-100'
        ]"
      src="/img/logo/cohete.png"
      alt="Cohete"
      
    />
  </div>
</teleport>
</template>


<script setup>
import { ref, computed, onMounted } from 'vue'

import Intro from './components/Intro.vue'
import Nosotros from './components/Nosotros.vue'
import Servicios from './components/Servicios.vue'
import Contacto from './components/Contacto.vue'

// Constantes semánticas de animación
const STAGE = {
  WIGGLE: 'wiggle',
  FLY: 'fly-up',
  HIDDEN: 'hidden',
  DESCEND: 'descend-in',
  RESET: 'reset'
}

const animStage = ref(STAGE.HIDDEN)

const isFlyingUp = ref(true)
const isAnchorReady = ref(false)

// Estilo dinámico del contenedor del cohete
const rocketStyle = computed(() => {
  return isFlyingUp.value
    ? { position: 'absolute', top: 0, right: '2rem' }
    : { position: 'fixed', bottom: '2rem', right: '2rem' }
})

function iniciarSecuencia(){
  animStage.value = STAGE.WIGGLE

  setTimeout(() => {
    animStage.value = STAGE.FLY

    setTimeout(()=>{
      animStage.value = STAGE.DESCEND

      setTimeout(() => {
        //reinicia ciclo
        iniciarSecuencia()
      }, 6000); //espera DESCEND
    }, 2000); //duración FLY
  }, 2000); //duración WIGGLE
}

onMounted(() => {
  setTimeout(() => {
    iniciarSecuencia()
  }, 2000);
})
  /*
  //inicia tambaleo
  setTimeout(()=>{
    animStage.value = STAGE.WIGGLE

    //inicia despegue
    setTimeout(()=>{
      animStage.value = STAGE.FLY

      //aterrizaje
      setTimeout(() => {
        animStage.value = STAGE.DESCEND
      }, 2000);
    },2000)
  }, 2000)
})
  const checkAnchor = setInterval(() => {
    if (document.getElementById('rocket-anchor')) {
      clearInterval(checkAnchor)
      isAnchorReady.value = true
      startLoop()
    }
  }, 100)
})*/

// Ciclo completo del cohete
function startLoop() {
  animStage.value = STAGE.WIGGLE
  isFlyingUp.value = true

  setTimeout(() => {
    animStage.value = STAGE.FLY

    setTimeout(() => {
      animStage.value = STAGE.HIDDEN
      isFlyingUp.value = false

      setTimeout(() => {
        animStage.value = STAGE.DESCEND

        setTimeout(() => {
          animStage.value = STAGE.WIGGLE
          isFlyingUp.value = true
          startLoop()
        }, 2000) // duración del descenso
      }, 300) // pausa antes de aterrizar
    }, 4000) // duración del vuelo
  }, 1200) // duración del primer wiggle
}
</script>

<style scoped>
@keyframes wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}

@keyframes fly-up {
  to{
    transform: translateY(-800px);
    opacity: 0;
  }
}

@keyframes descend-in {
  from {
    transform: translateY(100vh) scale(0.8);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

@keyframes return-from-below {
  from {
    transform: translateY(3500px) scale(0.9);
    opacity: 0.5;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes return-to-start {
  0% { transform: translateY(110vh) rotate(-5deg); opacity: 0; }
  10% { opacity: 1; }
  100% { transform: translateY(0) rotate(0deg); opacity: 1; }
}

.animate-wiggle {
  animation: wiggle 1s ease-in-out infinite;
}

.animate-fly-up {
  animation: fly-up 1s ease-in forwards;
}

.animate-descend-in {
  animation: descend-in 2s ease-out forwards;
}

.animate-return-from-below {
  animation: return-from-below 6s ease-out forwards;
}

.return-to-base {
  animation: return-to-start 2s ease-out forwards;
}
</style>
