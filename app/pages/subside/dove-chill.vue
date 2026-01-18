<template>
  <PageWrapper>
    <div class="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 py-12">
      <div class="w-full max-w-7xl">
        <InteractiveImage 
          background-image="/images/tree-background.jpg"
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
    link: '/subside/dove-chill',
    image: '/images/sides/shitting-dove.gif',
    x: 54,
    y: 44.5,
    size: 200,
    label: false
  }
]
</script>