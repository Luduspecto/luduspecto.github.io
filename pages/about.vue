<script setup>

const TeamImg1 = "/img/undraw_code_thinking_re_gka2.svg";
const TeamImg2 = "/img/undraw_version_control_re_mg66.svg";

const team = [
  {
    name: "Sebastian",
    title: "Co-Founder & Entwickler",
    avatar: {
      src: TeamImg1,
      width: 580,
      height: 1080,
    },
  },
  {
    name: "Max",
    title: "Co-Founder & Entwickler",
    avatar: {
      src: TeamImg2,
      width: 580,
      height: 1080,
    },
  },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>
        <h1 class="text-secondary">Über uns</h1>
      </template>
      <template v-slot:desc>
        <p class="text-secondary font-light">Wir sind ein kleines Team mit großer Leidenschaft</p>
      </template>
    </LandingSectionhead>

    <div class="flex flex-col gap-6 mx-auto max-w-4xl mt-8 mb-8 pt-16 bg-secondary p-6 rounded-xl shadow-lg border-primary border-4">
      <h2 class="font-bold text-3xl text-primary">
      Die Freude am Spielen teilen
      </h2>
      <p class="text-lg leading-relaxed text-tertiary">
      Wir sind ein kleines, leidenschaftliches Entwicklerteam, dessen Ziel es ist, die Welt der Karten- und Gesellschaftsspiele für jeden zugänglich zu machen. Unsere interaktiven und benutzerfreundlichen Apps bieten eine unterhaltsame und werbefreie Umgebung, in der Spieler jeden Alters neue Spiele lernen und ihr Können verbessern können. Wir glauben fest daran, dass Karten- und Gesellschaftsspiele  wertvolle soziale Erlebnisse schaffen, die  Spaß machen,  strategisches Denken fördern und Menschen zusammenbringen. Mit unseren Apps möchten wir dazu beitragen, diese einzigartigen Spielerlebnisse einem breiteren Publikum zu eröffnen.
      </p>
    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-12">
      <div v-for="item of team" class="group">
        <div class="w-full aspect-square">
          <img
            :src="item.avatar.src"
            :width="item.avatar.width"
            :height="item.avatar.height"
            format="avif"
            alt="Team"
            class="w-full h-full object-fill rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
          />
        </div>

        <div class="mt-4 text-center">
          <h2 class="text-lg text-gray-800">{{ item.name }}</h2>
          <h3 class="text-sm text-slate-500">{{ item.title }}</h3>
        </div>
      </div>
      <!-- {
        team.map((item) => (
          <div class="group">
            <div class="w-full aspect-square">
              <Image
                {...item.avatar}
                format="avif"
                alt="Team"
                class="w-full h-full object-cover rounded transition  group-hover:-translate-y-1 group-hover:shadow-xl"
              />
            </div>

            <div class="mt-4 text-center">
              <h2 class="text-lg text-gray-800"> {item.name}</h2>
              <h3 class="text-sm text-slate-500"> {item.title}</h3>
            </div>
          </div>
        ))
      } -->
    </div>
    </div>
  </LandingContainer>
</template>
