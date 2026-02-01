<template>
  <PageWrapper
    :help-content="helpContent"
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
const helpContent = 'Schon bald hat Igor eine Pfütze gefunden, aus der er durstig trinkt. Doch was liegt denn da im Wasser? Faktencheck: „Jedes Jahr gelangen weltweit 4,5 Billionen Stummel von gerauchten Zigaretten in die Umwelt. Von einer gerauchten Zigarette bleibt oft nur der mit Plastik überzogene Filter zurück. Dieser enthält fast 4000 chemische Substanzen, wovon viele toxisch sind."1* In Berlin fanden Forscher*innen hochgerechnet 2,7 Millionen Zigarettenstummel auf nur einen Quadratkilometer. Regenwasser löst innerhalb einer halben Stunde mehr als die Hälfte der restlichen Giftstoffe, die noch in den Zigaretten stecken, auf. Durch Kläranlagen kann das Nikotin im Wasser großenteils abgebaut werden, doch rund 70 Prozent des nikotinhaltigen Regenwassers landet direkt in Gewässer.2* „Ein Experiment des US-Zoologen Thomas Novotny von der San Diego State University verdeutlicht die Giftigkeit: Der Forscher fügte einem Liter Wasser eine Zigarettenkippe hinzu und ließ darin Fische schwimmen. Nach vier Tagen war die Hälfte der Tiere tot."3*'

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