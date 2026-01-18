<template>
  <PageWrapper>
    <div class="relative min-h-screen w-full overflow-hidden">
      <div 
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url('/images/scene-background.jpg')` }"
      ></div>

      <div class="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        
        <NuxtLink 
          :to="localePath('/subside/smoking-next')"
          class="ml-12 mt-[24vh] block transform hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          <img 
            src="/images/sides/smokingMan.gif" 
            alt="Jonas raucht"
            class="w-40 h-auto md:w-60 xl:w-[20rem] drop-shadow-2xl"
          />
        </NuxtLink>

        <!-- Text unter dem Mann -->
        <div class="text-center mb-8 md:mb-12 max-w-2xl mt-12">
          <h1 class="text-xl md:text-3xl lg:text-4xl font-bold text-black mb-4 md:mb-6 leading-tight">
            Jonas raucht wie 28% aller Deutschen
          </h1>
        </div>

      </div>
    </div>
  </PageWrapper>
</template>

<script setup>
const localePath = useLocalePath()
</script>

<style scoped>
/* Zusätzliche Animationen */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.hover\:scale-110:hover img {
  animation: float 2s ease-in-out infinite;
}
</style>