<template>
  <PageWrapper>
    <InteractiveImage 
      :background-image="sceneBackground"
      :markers="sceneMarkers"
      fill-viewport
      background-color="#e8dcc8"
    />
  </PageWrapper>
</template>

<script setup>
const sceneBackground = '/images/bg/scene-background.jpg'

const sceneMarkers = [
  {
    id: 'dove-on-tree',
    link: '/subside/dove',
    image: '/images/markers/dove.webp',
    x: 70,
    y: 19,
    size: 120,
    label: true
  },
  {
    id: 'hedgehog-next-to-bush',
    slug: 'hedgehog',
    link: '/subside/hedgehog',
    image: '/images/markers/hedgehog.webp',
    x: 70,
    y: 60,
    size: 80,
    label: true
  },
  {
    id: 'waving-man-on-sidewalk',
    slug: 'wavingman',
    link: '/subside/wavingman',
    image: '/images/markers/wavingMan.webp',
    x: 34,
    y: 52,
    size: 60,
    label: true
  }
]
</script>