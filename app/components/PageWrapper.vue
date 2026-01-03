<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto">
      <!-- Back Button -->
      <button
        @click="goBack"
        class="mb-2 flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors duration-200 group"
      >
        <svg 
          class="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span class="font-medium">{{ $t('back') }}</span>
      </button>

      <!-- Content Slot -->
    <slot />
    </div>
  </div>
</template>

<script setup>
const router = useRouter()

const goBack = () => {
  router.back()
}
</script>