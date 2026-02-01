<template>
  <PageWrapper
    :help-content="$t('hedgehog.walking.content')"
    :sources="sources"
    :close-button-text="$t('continue')"
  >
    <InteractiveImage 
      background-image="/images/bg/Hedgehog-Walking-Background.jpg"
      :markers="doveMarker"
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
    id: 'hedgehog-walking',
    link: '/subside/hedgehog-drinking',
    image: '/images/sides/Hedgehog-Walking.gif',
    x: 50,
    y: 75,
    size: 600,
    label: false
  }
]
</script>