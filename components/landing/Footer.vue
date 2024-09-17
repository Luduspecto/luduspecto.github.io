<template>
    <footer class="bg-white order-last">
        <div class="container flex justify-between">
            <div class="mr-auto">
                <Logo />
                <Copyright />
            </div>
            <div class="lg:w-auto w-1/3">
                <div class="mb-1 font-semibold">Apps</div>
                <div class="text-sm">
                    <NuxtLink to="/skat" class="py-1.5 block">Skat</NuxtLink>
                    <NuxtLink to="/schafkopf" class="py-1.5 block">Schafkopf</NuxtLink>
                </div>
                <div class="mb-1 font-semibold">Website</div>
                <div class="text-sm">
                    <NuxtLink to="/datenschutz" class="py-1.5 block">Datenschutz</NuxtLink>
                    <NuxtLink to="/impressum" class="py-1.5 block">Impressum</NuxtLink>
                </div>
            </div>
            <div class="lg:w-auto w-1/3">
                <ContactSmall />
            </div>
        </div>
    </footer>
</template>
