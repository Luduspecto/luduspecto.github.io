<script setup>
const features = [
  {
    title: "100 % Ohne Werbung",
    description:
      "Lerne ohne durch Werbung unterbrochen zu werden. So macht lernen Spaß",
    icon: "bx:bxs-gift",
  },
  {
    title: "Funktioniert auch Offline",
    description:
      "Alle Tutorials und Leistungsstarke Gegner immer dabei auch ohne eine Internet Verbindung",
    icon: "bx:bxs-layer",
  },
  {
    title: "Ohne Ingame-Käufe",
    description:
      "Einmal zahlen und keine weiteren Micro-Transaktion für dein vollstendinges Kartenspiel Erlebnis",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "Realistische Computergegner",
    description:
      "Wir wissen wie nervig es ist, wenn es sich anfühlt, als würden die Computer nur zufällige Karten legen. Aus diesem Grund waren uns realistische Gegner in unserem Spiel von Tag 1 an die höchste Priorität.",
    icon: "bx:bxs-brain",
  },
  {
    title: "Lasse dir vom Assistenten helfen",
    description:
      "Falls du dir jemals nicht ganz sicher sein solltest, welche Karte du legen solltest, welche Trümpfe schon gelegt wurden, oder mit dem du spielst, kann dir der neue Assistent live im Spiel helfen.",
    icon: "bx:bxs-bot",
  },
  {
    title: "Messe dich mit deinen Freunden",
    description:
      "Achievements und Bestenlisten bieten einen spannenden Vergleich mit anderen Spielern. Untersuche mit ausführlichen Statistiken dein Spielverhalten und deinen Fortschritt.",
    icon: "bx:bxs-party",
  },
];
</script>

<template>
  <div class="relative bg-secondary p-8 rounded-xl shadow-lg border-4 border-primary">
    <div class="mt-16 md:mt-0">
      <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight text-primary">
        Alles was du zum Lernen brauchst
      </h2>
      <p class="text-lg mt-4 text-tertiary">
        Unsere Lern Apps enthalten leicht zu verstehende Erklärungen zu den wichtigsten Elementen der Spiele und darüber hinaus.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
      <div v-for="item of features" class="flex gap-4 items-start">
        <div class="mt-1 bg-primary rounded-full p-2 w-8 h-8 shrink-0">
          <Icon class="text-secondary" :name="item.icon" />
        </div>
        <div>
          <h3 class="font-semibold text-lg">{{ item.title }}</h3>
          <p class="text-tertiary mt-2 leading-relaxed">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
