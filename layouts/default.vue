<script setup>
const route = useRoute()
useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: 'https://offline-lernen.de' + route.path,
    },
  ],
}))
</script>

<template>
  <LandingNavbar></LandingNavbar>
  <slot></slot>
  <LandingFooter></LandingFooter>
</template>
