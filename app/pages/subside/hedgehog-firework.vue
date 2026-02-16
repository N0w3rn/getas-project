<template>
  <PageWrapper
    :help-book-content="$t('hedgehog.firework.content')"
    :help-content="$t('hedgehog.firework.helpContent')"
    :sources="sources"
  >
    <InteractiveImage 
      background-image="/images/bg/hedgehog-firework-background.jpg"
      :markers="doveMarker"
      :animate-image="false"
      fill-viewport
      background-color="#525252"
    />
  </PageWrapper>
</template>

<script setup>
const sources = [
  '„Auswirkungen von Feuerwerk auf Wildtiere und Umwelt - NABU Hessen“, NABU - Naturschutzbund Deutschland e.V., zugegriffen 16. Februar 2026, https://hessen.nabu.de/news/2020/29080.html.',
  '„Igel: Stachelige Stadtbewohner“.',
  'Janina Schreiber SWR, „Böller und Blitze - so erleben Wildtiere die Silvesternacht“, tagesschau.de, zugegriffen 16. Februar 2026, https://www.tagesschau.de/wissen/tiere/silvester-feuerwerk-tiere-schaden-100.html.'
]

const doveMarker = [
  {
    id: 'hedgehog-firework',
    link: '/subside/hedgehog-end',
    image: '/images/sides/hedgehog-firework.webp',
    x: 50,
    y: 35,
    size: 500,
    label: false
  }
]
</script>