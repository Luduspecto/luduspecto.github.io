<script setup>
import { computed } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  ftype: {
    type: String,
    required: true,
  },
});
const featureDictionary = {
  homepage: [
    {
      title: "100 % Ohne Werbung",
      description:
        "Lerne ohne durch Werbung unterbrochen zu werden. Keine Werbebanner oder Spielunterbrechungen.",
      icon: "bx:bxs-gift",
    },
    {
      title: "Funktioniert auch Offline",
      description:
        "Alle Tutorials und leistungsstarke Gegner immer dabei, auch ohne eine Internet Verbindung.",
      icon: "bx:bxs-layer",
    },
    {
      title: "Interaktive Tutorialeinheiten",
      description:
        "Unsere interaktiven Tutorials mit Übungsmodulen helfen dir gezielt Strategien und Skills zu üben.",
      icon: "bx:bxs-briefcase",
    },
  ],
  skat: [
    {
      title: "Mehr als nur Bilder und Text: Erlebe Skat mit unserem interaktiven Tutorial.",
      description:
        "Unser interaktives Tutorial ist der perfekte Einstieg für alle, die dieses spannende Kartenspiel erlernen möchten. Vergiss stundenlanges Lesen von komplizierten Regelbüchern! Hier wirst du Schritt für Schritt und spielerisch an die Hand genommen.\nDu wirst aktiv in den Lernprozess eingebunden und kannst dein Wissen direkt anwenden. Animationen zeigen dir anschaulich, wie die Karten gespielt werden, und interaktive Quizfragen helfen dir, die Regeln und Strategien schnell zu verinnerlichen. So macht Lernen Spaß und du wirst im Handumdrehen zum Skat-Ass!",
    },
    {
      title: "Für das Handy optimiert; im Hoch- und Querformat",
      description:
        "Erlebe Skat in einer völlig neuen Dimension – perfekt für dein Handy!  Unsere App wurde speziell für dein Smartphone entwickelt. Schluss mit winzigen Karten und unleserlichem Text! Wir haben unser eigenes Kartenmotiv mit extra großen Symbolen entworfen, die gestochen scharf auf jedem Display dargestellt werden. Die intuitive Benutzeroberfläche garantiert ein Spielerlebnis, das perfekt auf dein Handy abgestimmt ist. Und das Beste: Du hast die Wahl, ob du lieber im Hoch- oder Querformat spielst!",
    },
    {
      title: "Offline-Skat: Perfekt für unterwegs",
      description:
        "Spiele Skat wann und wo du willst – ganz ohne Internetverbindung. Steige jederzeit wieder ein und setze dein Spiel genau dort fort, wo du aufgehört hast. Keine Unterbrechungen, keine Wartezeiten, keine Abhängigkeit von Empfang oder WLAN.",
    }
  ],
  schafkopf: [],
};
const features = computed(() => featureDictionary[props.ftype] || []);

const headerDictionary = {
  homepage: "Alles was du zum Lernen brauchst",
  skat: "Skat lernen leicht gemacht"
}
const header = computed(() => headerDictionary[props.ftype] || "");

const footerDictionary = {
  homepage: "Mit unseren premium Lern-Apps bist du im Handumdrehen in der Lage bei der nächsten Skat- oder Schafkopfrunde zu glänzen.",
  skat: "Mit unserer Skat Lern-App wirst du in kürzester Zeit zum Profi. Lerne die Regeln, Strategien und Eigenheiten des Skatspiels."
}
const footer = computed(() => footerDictionary[props.ftype] || "");
</script>

<template>
  <div class="relative bg-secondary p-8 rounded-xl shadow-lg border-4 border-primary">
    <div class="mt-16 md:mt-0">
      <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight text-primary">
        {{ header }}
      </h2>
      <p class="text-lg mt-4 text-tertiary">
        {{ footer }}
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
