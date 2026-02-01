<template>
  <PageWrapper
    :help-content="$t('hedgehog.cozy.content')"
    :sources="sources"
    :close-button-text="$t('continue')"
  >
    <InteractiveImage 
      background-image="/images/bg/hedgehog-cozy-background.jpg"
      :markers="doveMarker"
      :animate-image="false"
      fill-viewport
      background-color="#1B2233"
    />
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
    image: '/images/sides/hedgehog-cozy.gif',
    x: 50,
    y: 82,
    size: 600,
    label: false
  }
]
</script>