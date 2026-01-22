<template>
  <PageWrapper>
      <div class="mt-40 lg:mt-0">
        <InteractiveImage 
          background-image="/images/bg/splash-background.png"
          :markers="doveMarker"
          :enable-zoom="false"
        />
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