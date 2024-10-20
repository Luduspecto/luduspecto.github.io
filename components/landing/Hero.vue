<template>
  <main class="grid lg:grid-cols-2 place-items-center pb-8 md:pt-8 md:mt-16 mb-16">
    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight text-secondary">
        Jetzt Kartenspielen Lernen
      </h1>
      <p class="text-lg mt-4 max-w-xl text-secondary">
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
          styleName="inverted"
          rel="noopener"
          href="/schafkopf"
          target="_blank"
          >Schafkopf</LandingLink
        >
      </div>
    </div>
  </main>
</template>
