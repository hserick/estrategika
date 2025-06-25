<template>
  <div class="fixed right-2 bottom-[-80px] z-50 pointer-events-none">
    <img
      src="/img/logo/cohete.png"
      alt="Cohete"
      class="w-10 animate-cohete"
    />
  </div>
</template>

<style scoped>
@keyframes rocket-loop {
  0% {
    transform: translateY(100vh) rotate(-5deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  50% {
    transform: translateY(0) rotate(0deg);
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-110vh) rotate(5deg);
    opacity: 0;
  }
}

.animate-cohete {
  animation: rocket-loop 6s linear infinite;
}
</style>
