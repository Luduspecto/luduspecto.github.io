<script setup>
const props = defineProps(['googel_url', 'apple_url', 'image_url'])
</script>

<template>
    <main class="grid lg:grid-cols-2 place-items-center pb-8 md:pt-8">
      <div class="p-24 md:order-1 relative md:block">
        <img
          class="rounded-full transition-transform transform hover:scale-125"
          :src=props.image_url
          alt="Game Logo"
          loading="eager"
          format="avif"
          width="512"
          height="512"
        />
      </div>
  
      <div>
        <h1 class="text-5xl lg:text-6xl xl:text-7xl text-secondary font-bold lg:tracking-tight">
            <slot name="title">Title</slot>
        </h1>
        <p class="text-lg mt-4 text-secondary font-light max-w-xl">
            <slot name="desc">Some description goes here</slot>
        </p>
        <div class="mt-6 flex flex-col sm:flex-row gap-3">
          <LandingLink
            :href=props.googel_url
            target="_blank"
            rel="noopener"
            >Play Store</LandingLink
          >
          <LandingLink
            size="lg"
            styleName="inverted"
            rel="noopener"
            :href=props.apple_url
            target="_blank"
            >App Store</LandingLink
          >
        </div>
      </div>
    </main>
  </template>