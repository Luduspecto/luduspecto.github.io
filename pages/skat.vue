<template>
    <LandingContainer>

        <div class="p-4 mb-2 mt-8 text-sm text-tertiary bg-secondary border border-tertiary rounded-lg" role="alert">
            <span class="font-medium">Hallo,</span> danke fürs vorbei schauen! Skat Offline Lernen ist leider noch nicht für die Allgemeinheit verfügbar, da es sich noch in der Entwicklung befindet. Wir suchen aber noch Tester*innen für unseren anstehenden Beta-Test!
        </div>

        <AppHero googel_url="https://play.google.com/store/apps/details?id=com.luduspecto.Schafkopfen" image_url="/img/undraw_nature_on_screen_xkli.png", google_button_text = "Jetzt Tester werden">
            <template v-slot:title>Skat Offline Lernen</template>
            <template v-slot:desc>Offline, interaktiv und in deinem Tempo.</template>
        </AppHero>
        <LandingFeatures ftype="skat"></LandingFeatures>
    </LandingContainer>
</template>