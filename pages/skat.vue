<template>
    <LandingContainer>
        <div class="p-4 mb-2 mt-8 text-sm text-tertiary bg-secondary border border-tertiary rounded-lg" role="success">
            <span class="font-medium">Hallo,</span> danke fürs vorbei schauen! Skat Offline Lernen ist bereits für Android verfügbar. Wir suchen auch noch iOS Tester*innen für unseren anstehenden Beta-Test!
            <a href="https://forms.gle/7mzdTqKeLmNzC2T88" target="_blank" class="ml-2 text-primary underline">Jetzt anmelden</a>
        </div>

        <AppHero googel_url="https://play.google.com/store/apps/details?id=de.offlinelernen.skat" image_url="/img/skat_icon.png" google_button_text="Jetzt App Herunterladen">
            <template v-slot:title>Skat Offline Lernen</template>
            <template v-slot:desc>Offline, interaktiv und in deinem Tempo.</template>
        </AppHero>

        <LandingFeatures ftype="skat"></LandingFeatures>
    </LandingContainer>
</template>