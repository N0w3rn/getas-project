<template>
  <PageWrapper>
    <div class="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 py-12">
      <div class="w-full max-w-7xl">
        <InteractiveImage 
          background-image="/images/scene2-background.jpg"
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
    id: 'dove-on-fence',
    link: '/subside/dove-chill',
    image: '/images/markers/dove.gif',
    x: 50,
    y: 20,
    size: 270,
    label: false
  }
]
</script>