<template>
  <PageWrapper 
    help-content="Zwischen den Rohren krabbelt ein Käfer hervor. Tabeas Augen werden groß. Doch der Käfer entdeckt sie und in der nächsten Sekunde ist er auch schon wieder verschwunden. Aber nicht mit Tabea…<br><br>Todesmutig wirft sie sich kopfüber hinterher."
  >
    <InteractiveImage 
      background-image="/images/bg/bug-run-away-background.jpg"
      :markers="doveMarker"
      :animate-image="false"
      fill-viewport
      background-color="#6D7649"
    />
  </PageWrapper>
</template>

<script setup>
const doveMarker = [
  {
    id: 'bug-run-away',
    link: '/subside/dove-stuck',
    image: '/images/sides/bug-run-away.webp',
    x: 47,
    y: 64.9,
    size: 380,
    label: false
  }
]
</script>