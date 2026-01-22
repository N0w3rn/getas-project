<template>
  <div class="relative">
    <button
      @click="goBack"
      class="fixed top-4 left-4 md:top-5 md:left-5 lg:top-6 lg:left-6 z-50 p-2 md:p-2.5 lg:p-3 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group ring-2 ring-gray-400"
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
    
    <slot />
  </div>
</template>

<script setup>
const router = useRouter()

const goBack = () => {
  router.back()
}
</script>