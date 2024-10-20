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
        <p class="text-secondary font-light">Wir sind ein kleines Team mit großer Leidenschaft.</p>
      </template>
    </LandingSectionhead>

    <div class="flex flex-col gap-6 mx-auto max-w-4xl mt-8 mb-8 pt-16 bg-secondary p-6 rounded-xl shadow-lg border-primary border-4">
      <h2 class="font-bold text-3xl text-primary">
      Mit Lern Apps die Welt stärken.
      </h2>
      <p class="text-lg leading-relaxed text-tertiary">
      Wir sind ein kleines, leidenschaftliches Entwicklerteam, spezialisiert auf die Entwicklung von Kartenspiel-Lernapps. Unsere Mission ist es, das Lernen durch spielerische Ansätze zu bereichern. Mit kreativen Ideen, klarem Design und interaktiven Kartenspielen kombinieren wir Wissen und Spaß. Unser Fokus liegt auf der Entwicklung benutzerfreundlicher Apps, die Lernen zu einem unterhaltsamen Erlebnis machen - ideal für alle, die sich gerne spielerisch weiterbilden möchten.
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
