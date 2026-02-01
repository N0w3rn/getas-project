<template>
  <PageWrapper
    :help-content="helpContent"
    :sources="sources"
  >
    <InteractiveImage 
      background-image="/images/bg/hedgehog-night-walk-background.jpg"
      :markers="doveMarker"
      fill-viewport
      background-color="#525252"
    />
  </PageWrapper>
</template>

<script setup>
const helpContent = 'Igor sucht weiter nach etwas essbarem. Sein Geruchsinn ist sehr gut.1* Er folgt also seiner Nase und watschelt Richtung Biomüll.'

const sources = [
  '„Biologie des Igels - Igelschutz-Interessengemeinschaft e.V.", zugegriffen 1. Februar 2026, https://www.igelschutz-ev.de/live/Biologie-des-Igels/biologie-igel.aspx'
]

const doveMarker = [
  {
    id: 'hedgehog-night-walk',
    link: '/subside/hedgehog-night-walk',
    image: '/images/sides/hedgehog-night-walk.gif',
    x: 53,
    y: 70,
    size: 240,
    label: false
  }
]
</script>