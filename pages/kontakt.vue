<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Kontakt</template>
      <template v-slot:desc>Wir helfen gerne weiter</template>
    </LandingSectionhead>

    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
      <div>
        <h2 class="font-medium text-2xl text-gray-800">
          Ludus Pecto kontaktieren
        </h2>
        <p class="text-lg leading-relaxed text-slate-500 mt-3">
          Haben Sie eine Frage oder ein Anliegen? Gerne können Sie das bereitgestellte Formular nutzen oder uns eine E-Mail schreiben, um sich mit uns in Verbindung zu setzen.
        </p>
        <div class="mt-5">
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:envelope" /><a
              href="mailto:luduspecto@gmail.com"
              >luduspecto@gmail.com</a
            >
          </div>
          <!-- <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:phone" /><a
              href="tel:+1 (234) 5678 999"
              >+1 (234) 5678 999</a
            >
          </div> -->
        </div>
      </div>
      <div>
        <LandingContactform />
      </div>
    </div>
  </LandingContainer>
</template>
