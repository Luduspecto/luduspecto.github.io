<template>
    <LandingContainer>
        <LandingSectionhead>
            <template v-slot:title>
                <h1 class="text-secondary">Schafkopf App Datenschutz</h1>
            </template>
            <template v-slot:desc>
                <p class="text-secondary font-light">Wir nehmen den Schutz Ihrer Daten ernst.</p>
            </template>
        </LandingSectionhead>

        <div class="relative bg-secondary p-8 rounded-xl shadow-lg border-4 border-primary container mb-8 mt-16 font-light text-tertiary">
            <h1 class="text-3xl pb-2 pt-1 text-primary font-semibold">Datenschutzerklärung für die Schafkopf Offline Lernen App</h1>
            <p class="text-base pb-1">
                Um Funktionen unserer Apps laufend verbessern zu können erheben wir an manchen Stellen Daten. Es ist uns
                wichtig, möglichst wenig Ihrer Daten zu sammeln. In den folgenden Fällen werden von uns jedoch Daten
                erhoben:
            </p>
            <ul class="list-disc list-inside">
                <li class="pl-4 pb-2"><strong>Spieldaten</strong><p class="text-base pb-1"> Wir speichern konkret den Verlauf Ihrer Spiele in der App. Das können Sie auch! Nach
                        jedem
                        Spiel haben Sie die Möglichkeit, ihr Spiel zu speichern. Mit diesen anonymen Daten, möchten wir
                        die
                        Lernerfahrung in der App noch besser machen!
                    </p>
                </li >
                <li class="pl-4 pb-2"><strong>Beim Senden von Fehlerberichten</strong><p class="text-base pb-1">Unsere App bietet die Option, einen Fehlerbericht zu versenden.
                        Diese
                        Funktion ist vollkommen optional und beeinflusst in keinster Weise das Spielerlebnis. Falls Sie
                        sich
                        entscheiden uns einen Fehlerbericht zu senden, so speichern wir die Version der App, die Sie
                        nutzen, den
                        von Ihnen verfassten Text und jegliche Log-Dateien. Wir speichern bei Fehlerberichten keine
                        personenbezogenen Daten.
                    </p>
                </li>
                <li class="pl-4 pb-2"><strong>Beim automatischen Senden von Fehlerberichten</strong><p class="text-base pb-1">Sollten während der Nutzung unserer App kritische
                        Fehler
                        auftreten, versenden wir automatisch einen Fehlerbericht. Dieser erfordert keine aktive Handlung
                        des
                        Nutzers. Bei automatischen Fehlerberichten speichern wir Informationen zu ihrem Gerät; die
                        Versionsnummer unserer App, die Sie nutzen; die Uhrzeit, zu dem Fehler aufgetreten ist; eine
                        Beschreibung des Fehlers, der aufgetreten ist.
                    </p>
                </li>
            </ul>
            <p class="text-base pb-1">Da es sich bei unserer App um eine Offline-App handelt, beziehen wir keine weiteren Daten von Ihnen. Es
                ist
                jedoch möglich, dass Drittanbieter Ihre Daten für eigene Zwecke weiterverwenden. Lesen Sie dazu die
                Datenschutzbedingungen folgender Dienste:
            </p>
            <ul class="list-disc list-inside">
                <li class="pl-4 pb-2">Google Play: <a
                        href="https://www.google.com/intl/de/policies/privacy/">www.google.com/intl/de/policies/privacy/</a>
                </li>
                <li class="pl-4 pb-2">Unity: <a
                        href="https://unity3d.com/legal/privacy-policy">https://unity3d.com/legal/privacy-policy</a>
                </li>
            </ul>
            <p class="text-base pb-1">Sie haben ein Recht auf Auskunft über die Sie betreffenden personenbezogenen Daten. Weiter haben Sie das
                Recht
                auf Berichtigung oder Löschung oder auf Einschränkung der Verarbeitung sowie ein Widerspruchsrecht gegen
                die
                Verarbeitung sowie das Recht auf Datenübertragbarkeit.
                Sie können Ihre Einwilligung zur Datenverarbeitung jederzeit widerrufen.
                Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
            <p class="text-base pb-1">Wenn Sie Fragen haben, kontaktieren Sie uns bitte über einen der von uns angebotenen Kommunikationswege.
            </p>
        </div>
    </LandingContainer>

</template>