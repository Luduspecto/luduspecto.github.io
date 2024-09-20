<template>
    <LandingContainer>

        <div class="p-4 mb-2 mt-8 text-sm text-blue-800 bg-blue-50 border border-blue-300 rounded-lg" role="alert">
            <span class="font-medium">Hallo!</span> Danke fürs vorbei schauen, hier gits noch nicht viel zu sehen Skat Offline Lernen ist noch in der Entwicklung.
        </div>

        <AppHero googel_url="https://play.google.com/store/apps/details?id=com.luduspecto.Schafkopfen" image_url="img/undraw_nature_on_screen_xkli.png" apple_url="https://apps.apple.com/de/app/schafkopf-offline-lernen/id1534737294">
            <template v-slot:title>Skat Offline Lernen</template>
            <template v-slot:desc>Skat Offline bietet dir ein detailliertes Tutorial, welches dir das Spiel vom Grand bis zum Nullspiel vollständig erklärt und gängige Strategien beibringt. Teste dein Wissen dann in unterhaltsamen Quizfragen.</template>
        </AppHero>
    </LandingContainer>
</template>