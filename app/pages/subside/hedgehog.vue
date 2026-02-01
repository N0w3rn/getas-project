<template>
  <PageWrapper :help-content="'Igel brauchen kleine Verstecke wie Gehölze oder Gebüsche, um sich wohlzufühlen. 1* Igor hat sein zu Hause im Hinterhof des Bültenwegs 12 gefunden. Wie alle anderen Igel auch, ist Igor nachtaktiv. Heute hat er schlecht geträumt und wacht ganz verschlafen in seinem Laubhaufen auf.'">
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