<template>
  <PageWrapper
    :help-content="$t('hedgehog.cozy.content')"
    :sources="sources"
    :close-button-text="$t('continue')"
  >
    <ClientOnly>
      <InteractiveImage 
        background-image="/images/bg/hedgehog-cozy-background.jpg"
        :markers="doveMarker"
        :animate-image="false"
        fill-viewport
        background-color="#1B2233"
        use-nuxt-image
      />
      <template #fallback>
        <div class="min-h-screen flex items-center justify-center bg-[#1B2233]">
          <div class="text-white">Lädt...</div>
        </div>
      </template>
    </ClientOnly>
  </PageWrapper>
</template>

<script setup>
const sources = [
  '„Igel: Stachelige Stadtbewohner", Deutsche Wildtier Stiftung, o. J., zugegriffen 31. Januar 2026, https://www.deutschewildtierstiftung.de/wildtiere/igel'
]

const doveMarker = [
  {
    id: 'hedgehog-cozy',
    link: '/subside/hedgehog-walking',
    image: '/images/sides/hedgehog-cozy.webp',
    x: 50,
    y: 82,
    size: 600,
    label: false
  }
]
</script>