<template>
  <footer class="bg-white order-last container mt-20 max-w-screen-xl mx-auto px-5">
    <div class="md:flex justify-between">
      <div class="lg:w-auto w-1/6">
        <NuxtLink to="/" class="text-lg">
          <span class="font-bold text-slate-800">Ludus</span>
          <span class="text-slate-500">Pecto</span>
        </NuxtLink>
      </div>
      <div class="lg:w-auto w-auto">
        <div class="mb-1 font-semibold">Apps</div>
        <div class="text-sm">
          <NuxtLink to="/skat" class="md:py-1.5 block">Skat</NuxtLink>
          <NuxtLink to="/schafkopf" class="md:py-1.5 block">Schafkopf</NuxtLink>
        </div>
      </div>
      <div class="lg:w-auto w-auto">
        <div class="mb-1 font-semibold">Website</div>
        <div class="text-sm">
          <NuxtLink to="/datenschutz" class="md:py-1.5 block">Datenschutz</NuxtLink>
          <NuxtLink to="/impressum" class="md:py-1.5 block">Impressum</NuxtLink>
        </div>
      </div>
      <div class="lg:w-auto w-auto">
        <div class="mb-1 font-semibold">App Datenschutz</div>
        <div class="text-sm">
          <NuxtLink to="/app-datenschutz/skat" class="md:py-1.5 block">Datenschutzerklärung Skat</NuxtLink>
          <NuxtLink to="/app-datenschutz/schafkopf" class="md:py-1.5 block">Datenschutzerklärung Schafkopf</NuxtLink>
        </div>
      </div>
      <div class="lg:w-auto w-1/3">
        <div class="mb-1 font-semibold">Besuch uns auch hier:</div>
        <div class="flex items-center gap-4">
          <a href="https://play.google.com/store/apps/developer?id=Ludus+Pecto+Games" >
            <Icon class="text-gray-600 hover:text-gray-900 w-6 h-6" name="mage:playstore" />
          </a>
          <a href="https://apps.apple.com/de/developer/sebastian-nadler/id1534706893" >
            <Icon class="text-gray-600 hover:text-gray-900 w-6 h-6" name="simple-icons:appstore" />
          </a>
          <a href="https://www.github.com/luduspecto" >
            <Icon class="text-gray-600 hover:text-gray-900 w-6 h-6" name="uil:github" />
          </a>
          <a href="https://www.instagram.com/schafkopflernen/" >
            <Icon class="text-gray-600 hover:text-gray-900 w-6 h-6" name="uil:instagram" />
          </a>
        </div>
      </div>
    </div>
    <p class="text-sm text-center text-slate-500 mt-6">
      Copyright © {{ new Date().getFullYear() }} Kranabetter & Nadler GbR.
    </p>

    <p class="text-xs text-center text-slate-500 mt-1 mb-3">
      Website based on work made by
      <a href="https://github.com/Gr33nW33n" target="_blank" rel="noopener" class="hover:underline">
        Gr33nW33n
      </a>
      with attribution to
      <a href="https://web3templates.com" target="_blank" rel="noopener" class="hover:underline">
        Web3Templates
      </a>
    </p>
  </footer>
</template>
