<script setup>
const menuitems = [
  {
    title: "Skat",
    path: "/skat",
  },
  {
    title: "Schafkopf",
    path: "/schafkopf",
  },
  {
    title: "Über uns",
    path: "/about",
  },
  {
    title: "Kontakt",
    path: "/kontakt",
  },
];

const open = ref(false);
</script>

<template>
  <LandingContainer>
    <header class="sticky flex flex-col lg:flex-row justify-between items-center my-5">
      <div class="flex w-full lg:w-auto items-center justify-between">
        <NuxtLink to="/" class="text-lg">
          <span class="font-bold text-secondary">Ludus</span>
          <span class="text-secondary">Pecto</span>
        </NuxtLink>
        <div class="block lg:hidden">
          <button @click="open = !open" class="text-secondary">
            <svg
              fill="currentColor"
              class="w-4 h-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                v-show="open"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
              ></path>
              <path
                v-show="!open"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <nav
        class="w-full lg:w-auto mt-2 lg:flex lg:mt-0"
        :class="{ block: open, hidden: !open }"
      >
        <ul class="flex flex-col lg:flex-row lg:gap-3">
          <li v-for="item of menuitems">
            <a
              :href="item.path"
              class="flex lg:px-3 py-2 text-secondary hover:text-secondary"
            >
              {{ item.title }}
            </a>
          </li>
        </ul>
        <div class="lg:hidden flex items-center mt-3 gap-4">
          <a href="https://www.github.com/luduspecto" >
            <Icon class="text-secondary hover:text-secondary w-6 h-6" name="uil:github" />
          </a>
          <a href="https://www.instagram.com/schafkopflernen/" >
            <Icon class="text-secondary hover:text-secondary w-6 h-6" name="uil:instagram" />
          </a>
        </div>
      </nav>
      <div>
        <div class="hidden lg:flex items-center gap-4">
          <a href="https://www.github.com/luduspecto" >
            <Icon class="text-secondary hover:text-secondary w-6 h-6" name="uil:github" />
          </a>
          <a href="https://www.instagram.com/schafkopflernen/" >
            <Icon class="text-secondary hover:text-secondary w-6 h-6" name="uil:instagram" />
          </a>
        </div>
      </div>
    </header>
  </LandingContainer>
</template>
