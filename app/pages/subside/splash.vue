<template>
  <PageWrapper>
    <div class="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 py-12">
      <div class="w-full max-w-7xl">
        <InteractiveImage 
          background-image="/images/bg/splash-background.png"
          :markers="doveMarker"
          :enable-zoom="false"
        />
      </div>
    </div>
  </PageWrapper>
</template>

<script setup>
const doveMarker = [
  {
    id: 'dove-chill',
    link: '/subside/...',
    image: '/images/sides/splash.gif',
    x: 54,
    y: 51,
    size: 120,
    label: false
  }
]
</script>