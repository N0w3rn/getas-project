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
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900 bg-opacity-75"
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
            class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
          >
            <div class="relative">
              <button
                @click="handleClose"
                class="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all"
                aria-label="Close modal"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div class="px-12 py-10 overflow-y-auto max-h-[80vh]">
                <div class="space-y-8">
                  <div class="space-y-4 text-center">
                    <h2 class="text-5xl font-light text-gray-900 tracking-tight">
                      {{ $t('welcome') }}
                    </h2>
                    <div class="w-16 h-1 bg-gray-900 mx-auto"></div>
                  </div>
                  
                  <div class="space-y-6 text-gray-700 text-base leading-relaxed max-w-xl mx-auto">
                    <p>{{ $t('indexPageTextBlock1.intro') }}</p>
                    <p>{{ $t('indexPageTextBlock1.method') }}</p>
                    <p>{{ $t('indexPageTextBlock1.implementation') }}</p>
                  </div>

                  <div class="flex justify-center pt-4">
                    <button
                      @click="handleClose"
                      class="px-10 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
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