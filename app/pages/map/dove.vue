<template>
  <PageWrapper>
    <div class="relative min-h-screen w-full overflow-hidden">
      <!-- Himmel Hintergrund -->
      <div 
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url('/images/sky-background.jpg')` }"
      ></div>

      <!-- Content Container -->
      <div class="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        
        <!-- Text über der Taube -->
        <div class="text-center mb-8 md:mb-12 max-w-2xl">
          <h1 class="text-xl md:text-3xl lg:text-4xl font-bold text-black mb-4 md:mb-6 leading-tight">
            Tabea fliegt los.
          </h1>
          <p class="text-base md:text-lg lg:text-xl text-black leading-relaxed">
            Sie will ein Nest bauen, zum allerersten Mal – doch niemand hat ihr gezeigt, wie das geht.
          </p>
          <p class="text-base md:text-lg lg:text-xl text-black leading-relaxed mt-2">
            Was gehört eigentlich zu einem Nest?
          </p>
        </div>

        <!-- Anklickbare Taube - JETZT WIRKLICH GROSS -->
        <NuxtLink 
          :to="localePath('/subside/dove2')"
          class="block transform hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          <img 
            src="/images/sides/flying-dove.gif" 
            alt="Tabea fliegt"
            class="w-96 h-auto md:w-[32rem] lg:w-[40rem] xl:w-[48rem] drop-shadow-2xl"
          />
        </NuxtLink>

      </div>
    </div>
  </PageWrapper>
</template>

<script setup>
const localePath = useLocalePath()
</script>

<style scoped>
/* Zusätzliche Animationen falls gewünscht */
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