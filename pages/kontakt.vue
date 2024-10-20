<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>
        <h1 class="text-secondary">Kontakt</h1>
      </template>
      <template v-slot:desc>
        <p class="text-secondary font-light">Wir helfen gerne weiter.</p>
      </template>
    </LandingSectionhead>

    <div class="flex flex-col gap-6 mx-auto max-w-4xl mt-8 mb-8 pt-16 bg-secondary p-6 rounded-xl shadow-lg border-primary border-4">
      <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
        <div>
          <h2 class="font-medium text-2xl text-primary">
            Ludus Pecto kontaktieren
          </h2>
          <p class="text-lg leading-relaxed text-tertiary mt-3">
            Haben Sie eine Frage oder ein Anliegen? Gerne können Sie das bereitgestellte Formular nutzen oder uns eine E-Mail schreiben, um sich mit uns in Verbindung zu setzen.
          </p>
          <div class="mt-5">
            <div class="flex items-center mt-2 space-x-2 text-gray-600">
              <Icon class="text-primary w-4 h-4" name="uil:envelope" /><a
                href="mailto:luduspecto@gmail.com" class="hover:underline text-primary"
                >luduspecto@gmail.com</a
              >
            </div>
            <!-- <div class="flex items-center mt-2 space-x-2 text-gray-600">
              <Icon class="text-primary w-4 h-4" name="uil:phone" /><a
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
    </div>
  </LandingContainer>
</template>
