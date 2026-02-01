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
      v-if="helpTitle || helpContent"
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

    <!-- Help Modal -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isHelpModalOpen"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900 bg-opacity-75"
          @click.self="closeHelp"
        >
          <Transition
            enter-active-class="transition ease-out duration-300 delay-100"
            enter-from-class="opacity-0 scale-90"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition ease-in duration-200"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-90"
          >
            <div
              v-if="isHelpModalOpen"
              class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
            >
              <div class="relative">
                <button
                  @click="closeHelp"
                  class="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all"
                  aria-label="Close modal"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div class="px-12 py-10 overflow-y-auto max-h-[80vh]">
                  <div class="space-y-8">
                    <!-- Title -->
                    <div v-if="helpTitle" class="space-y-4 text-center">
                      <h2 class="text-5xl font-light text-gray-900 tracking-tight">
                        {{ helpTitle }}
                      </h2>
                      <div class="w-16 h-1 bg-gray-900 mx-auto"></div>
                    </div>
                    
                    <!-- Content -->
                    <div class="space-y-6 text-gray-700 text-base leading-relaxed max-w-xl mx-auto">
                      <!-- HTML Content -->
                      <div 
                        v-if="renderHtml && helpContent"
                        v-html="helpContent"
                        class="prose prose-gray max-w-none"
                      ></div>
                      
                      <!-- Plain Text Content -->
                      <div v-else-if="helpContent">
                        {{ helpContent }}
                      </div>
                    </div>

                    <!-- Close Button -->
                    <div class="flex justify-center pt-4">
                      <button
                        @click="closeHelp"
                        class="px-10 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
                      >
                        {{ closeButtonTextCompo }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const props = defineProps({
  helpTitle: {
    type: String,
    default: ''
  },
  helpContent: {
    type: String,
    default: ''
  },
  renderHtml: {
    type: Boolean,
    default: false
  },
  closeButtonText: {
    type: String
  }
})

const closeButtonTextCompo = props.closeButtonText ? props.closeButtonText : t('understood')

const router = useRouter()
const localePath = useLocalePath()
const isHelpModalOpen = ref(false)

const goBack = () => {
  router.back()
}

const toggleHelp = () => {
  isHelpModalOpen.value = true
}

const closeHelp = () => {
  isHelpModalOpen.value = false
}
</script>