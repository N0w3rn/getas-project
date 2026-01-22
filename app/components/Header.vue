<template>
  <header class="bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-lg">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Links: Projekttitel als Block mit Link -->
        <div class="flex-1">
          <NuxtLink 
            :to="localePath('/')"
            class="inline-block hover:opacity-80 transition-opacity duration-200"
          >
            <div class="text-xl md:text-2xl font-bold tracking-wide leading-tight">
              Von Natur aufgelöste Grenzen
            </div>
            <div class="text-sm md:text-base font-light text-gray-300 leading-tight">
              GTAS
            </div>
          </NuxtLink>
        </div>

        <!-- Mitte: Ersteller -->
        <div class="hidden lg:flex flex-1 justify-center">
          <div class="text-sm text-gray-300">
            <span class="font-semibold">{{ $t('team') }}:</span>
            <span class="ml-2">Lara Behnke, Theresa Kerl, Silja Linke</span>
          </div>
        </div>

        <!-- Rechts: Locale Switch -->
        <div class="flex-1 flex justify-end">
          <div class="relative" ref="dropdownRef">
            <button
              @click="toggleDropdown"
              class="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition duration-200"
            >
              <!-- Globus SVG -->
              <svg 
                class="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              
              <!-- Locale Kürzel -->
              <span class="font-semibold uppercase">{{ locale }}</span>
              
              <!-- Dropdown Pfeil -->
              <svg 
                class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': isOpen }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <!-- Dropdown Menu -->
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <div 
                v-if="isOpen"
                class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl overflow-hidden z-50"
              >
                <button
                  v-for="loc in availableLocales"
                  :key="loc.code"
                  @click="switchLocale(loc.code)"
                  class="w-full px-4 py-3 text-left hover:bg-slate-100 transition duration-150 flex items-center justify-between"
                  :class="{ 'bg-slate-50': locale === loc.code }"
                >
                  <span class="text-gray-800 font-medium">{{ loc.name }}</span>
                  <span class="text-gray-500 text-sm uppercase">{{ loc.code }}</span>
                </button>
              </div>
            </transition>
          </div>
        </div>
      </div>

      <!-- Mobile: Ersteller unter dem Header -->
      <div class="lg:hidden mt-3 pt-3 border-t border-slate-700">
        <div class="text-xs text-gray-400">
          <span class="font-semibold">{{ $t('team') }}:</span>
          <span class="ml-2">Lara Behnke, Theresa Kerl, Silija Linke</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const { locale, setLocale, locales } = useI18n()
const localePath = useLocalePath()
const isOpen = ref(false)
const dropdownRef = ref(null)

const availableLocales = computed(() => {
  return locales.value
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const switchLocale = (newLocale) => {
  setLocale(newLocale)
  isOpen.value = false
}

// Dropdown schließen bei Klick außerhalb
onMounted(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
      isOpen.value = false
    }
  }
  document.addEventListener('click', handleClickOutside)
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>