<template>
  <main class="grid lg:grid-cols-2 place-items-center pb-8 md:pt-8 md:mt-8 mb-8">
    
    <div class="md:order-1 block md:translate-y-24 z-10" style="padding: 0.20rem;">
      <img
        class="transition-transform transform scale-100 hover:scale-75"
        src="~/assets/img/character.png"
        alt="Skat Bube"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight text-secondary">
        Jetzt <wbr />Kartenspielen <wbr />Lernen
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
