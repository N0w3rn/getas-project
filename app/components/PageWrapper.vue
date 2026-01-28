<template>
  <div class="relative">
    <!-- Left Side: Back + Home Buttons -->
    <div class="fixed top-4 left-4 md:top-5 md:left-5 lg:top-6 lg:left-6 z-50 flex gap-2 md:gap-2.5 lg:gap-3">
      <!-- Back Button -->
      <button
        @click="goBack"
        class="p-2 md:p-2.5 lg:p-3 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group ring-2 ring-gray-400"
        aria-label="Go back"
      >
        <svg 
          class="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 text-gray-700 transition-transform duration-200 group-hover:-translate-x-0.5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2.5" 
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <!-- Home Button -->
      <NuxtLink
        :to="localePath('/')"
        class="p-2 md:p-2.5 lg:p-3 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group ring-2 ring-gray-400"
        aria-label="Go to homepage"
      >
        <svg 
          class="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 text-gray-700 transition-transform duration-200 group-hover:scale-110" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2.5" 
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </NuxtLink>
    </div>

    <!-- Right Side: Help/Question Button -->
    <button
      @click="toggleHelp"
      class="fixed top-4 right-4 md:top-5 md:right-5 lg:top-6 lg:right-6 z-50 p-2 md:p-2.5 lg:p-3 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group ring-2 ring-gray-400"
      aria-label="Help"
    >
      <svg 
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#000000"
        class="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 text-gray-700 transition-transform duration-200 group-hover:scale-110" 
      >
        <path d="M431-330q1-72 16.5-105t58.5-72q42-38 64.5-70.5T593-647q0-45-30-75t-84-30q-52 0-80 29.5T358-661l-84-37q22-59 74.5-100.5T479-840q100 0 154 55.5T687-651q0 48-20.5 87T601-482q-49 47-59 72t-11 80H431Zm48 250q-29 0-49.5-20.5T409-150q0-29 20.5-49.5T479-220q29 0 49.5 20.5T549-150q0 29-20.5 49.5T479-80Z"/>
      </svg>
    </button>
    
    <slot />
  </div>
</template>

<script setup>
const router = useRouter()
const localePath = useLocalePath()

const goBack = () => {
  router.back()
}

const toggleHelp = () => {
  console.log('Help clicked')
}
</script>