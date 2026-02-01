<template>
  <PageWrapper>
    <div class="relative min-h-screen w-full overflow-hidden">
      <div 
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url('/images/bg/sky-background.jpg')` }"
      ></div>

      <div class="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        
        <div class="text-center mb-8 md:mb-12 max-w-2xl">
          <h1 class="text-xl md:text-3xl lg:text-4xl font-bold text-black mb-4 md:mb-6 leading-tight">
            {{ $t('markers.dove.title') }}
          </h1>
          <p class="text-base md:text-lg lg:text-xl text-black leading-relaxed">
            {{ $t('markers.dove.description1') }}
          </p>
          <p class="text-base md:text-lg lg:text-xl text-black leading-relaxed mt-2">
            {{ $t('markers.dove.description2') }}
          </p>
        </div>

        <NuxtLink 
          :to="localePath('/subside/dove-sitting-on-fence')"
          class="block transform hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          <img 
            src="/images/sides/flying-dove.webp" 
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