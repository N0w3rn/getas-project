<template>
  <PageWrapper
    :help-content="$t('hedgehog.drinking.content')"
    :sources="sources"
    :close-button-text="$t('continue')"
  >
    <InteractiveImage 
      background-image="/images/bg/hedgehog-drinking-background.jpg"
      :markers="doveMarker"
      :animate-image="false"
      fill-viewport
      background-color="#525252"
    />
  </PageWrapper>
</template>

<script setup>
const sources = [
  'Julia Schmid, „Abfall und dessen Konsequenzen für Wildtiere", Stadtwild Tiere, 31. März 2020, https://zuerich.stadtwildtiere.ch/node/8111',
  '„Umweltgift: So gelangt Nikotin aus Zigarettenstummeln in die Gewässer", Berliner Zeitung (Berlin), 4. Juni 2018, https://www.berliner-zeitung.de/mensch-metropole/umweltgift-so-gelangt-nikotin-aus-zigarettenstummeln-in-die-gewaesser-li.64014',
  'ebd.'
]

const doveMarker = [
  {
    id: 'hedgehog-drinking',
    link: '/subside/hedgehog-night-walk',
    image: '/images/sides/hedgehog-drinking.gif',
    x: 50,
    y: 50,
    size: 600,
    label: false
  }
]
</script>