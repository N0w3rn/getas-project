<template>
    <PageWrapper>
        <div class="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 py-12">
            <div class="w-full max-w-7xl">
                <InteractiveImage 
                    :background-image="sceneBackground"
                    :markers="sceneMarkers"
                />
            </div>
        </div>
    </PageWrapper>
</template>

<script setup>
const sceneBackground = '/images/bg/scene-background.jpg'

const sceneMarkers = [
  {
    id: 'dove-on-tree',
    slug: 'dove',
    image: '/images/markers/dove.gif',
    x: 70,
    y: 19,
    size: 120,
    label: true
  },
  {
    id: 'hedgehog-next-to-bush',
    slug: 'hedgehog',
    image: '/images/markers/hedgehog.gif',
    x: 70,
    y: 60,
    size: 80,
    label: true
  },
  {
    id: 'waving-man-on-sidewalk',
    slug: 'wavingman',
    image: '/images/markers/wavingMan.gif',
    x: 34,
    y: 52,
    size: 60,
    label: true
  }
]
</script>