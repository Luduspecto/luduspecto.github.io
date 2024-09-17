<script setup>

const TeamImg1 = "https://unsplash.com/photos/RxHhxWnXmNs/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fGNvd3xlbnwwfHx8fDE3MjY1MjEzNzN8MA&force=true&w=640";
const TeamImg2 = "https://unsplash.com/photos/EAJ1L4ZjrB4/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzI2NjAzNDIyfA&force=true&w=640";
const TeamImg3 = "https://source.unsplash.com/ZHvM3XIOHoE";

const team = [
  {
    name: "Sebastian",
    title: "Entwickler",
    avatar: {
      src: TeamImg1,
      width: 480,
      height: 560,
    },
  },
  {
    name: "Max",
    title: "Entwickler",
    avatar: {
      src: TeamImg2,
      width: 580,
      height: 580,
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

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
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
            class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
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
