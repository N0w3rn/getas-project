<template>
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
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-gray-900 bg-opacity-75"
        @click.self="handleClose"
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
            v-if="modelValue"
            class="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] sm:max-h-[85vh] md:max-h-[80vh] overflow-hidden"
          >
            <div class="relative">
              <button
                @click="handleClose"
                class="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 z-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all"
                aria-label="Close modal"
              >
                <svg class="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div class="px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10 lg:px-12 overflow-y-auto max-h-[90vh] sm:max-h-[85vh] md:max-h-[80vh]">
                <div class="space-y-6 sm:space-y-7 md:space-y-8">
                  <div class="space-y-3 sm:space-y-4 text-center pr-6 sm:pr-8 md:pr-0">
                    <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight leading-tight">
                      {{ $t('welcome') }}
                    </h2>
                    <div class="w-12 sm:w-14 md:w-16 h-0.5 sm:h-0.5 md:h-1 bg-gray-900 mx-auto"></div>
                  </div>
                  
                  <div class="space-y-4 sm:space-y-5 md:space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                    <p>{{ $t('indexPageTextBlock1.intro') }}</p>
                    <p>
                      <strong>{{ $t('indexPageTextBlock1.rulesLabel') }}</strong> {{ $t('indexPageTextBlock1.rulesText') }}
                    </p>
                    <p>
                      <strong>{{ $t('indexPageTextBlock1.tipLabel') }}</strong> {{ $t('indexPageTextBlock1.tipText') }}
                    </p>
                    <p>{{ $t('indexPageTextBlock1.greeting') }}</p>
                  </div>

                  <div class="flex justify-center pt-3 sm:pt-4">
                    <button
                      @click="handleClose"
                      class="px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 bg-gray-900 hover:bg-gray-800 text-white text-sm sm:text-base font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      {{ $t('understood') }}
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
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'close': []
}>()

const handleClose = () => {
  emit('update:modelValue', false)
  emit('close')
}
</script>