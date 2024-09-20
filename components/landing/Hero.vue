<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8 mt-16 mb-16">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="rounded-full transition-transform transform hover:scale-125"
        src="~/assets/img/undraw_playing_cards_cywn.png"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        Bayrische Kartenspiel Tradition
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Beginne dein Lern Erlebnis mit unseren Kartenspiel Apps.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="/skat"
          target="_blank"
          rel="noopener"
          >Skat</LandingLink
        >
        <LandingLink
          size="lg"
          styleName="outline"
          rel="noopener"
          href="/schafkopf"
          target="_blank"
          >Schafkopf</LandingLink
        >
      </div>
    </div>
  </main>
</template>
