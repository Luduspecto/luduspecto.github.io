<script setup>

const TeamImg1 = "undraw_code_thinking_re_gka2.svg";
const TeamImg2 = "undraw_version_control_re_mg66.svg";

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
      <template v-slot:title>Über uns</template>
      <template v-slot:desc>Wir sind ein kleines Team mit großer Leidenschaft.</template>
    </LandingSectionhead>

    <div class="flex flex-col gap-6 mx-auto max-w-4xl mt-8 mb-8">
      <h2 class="font-bold text-3xl text-gray-800">
        Mit Lern Apps die Welt stärken.
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        Wir sind ein kleines Team von leidenschaftlichen Entwicklern! Wir sind begeistert, unsere bayerische Tradition durch 
        Apps an alle weiterzugeben. So leisten wir unseren Beitrag zur Weitergabe bayerischen Kulturguts.
      </p>
    </div>
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
  </LandingContainer>
</template>
