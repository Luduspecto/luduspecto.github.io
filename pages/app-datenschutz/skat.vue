<template>
    <LandingContainer>
        <LandingSectionhead>
            <template v-slot:title>
                <h1 class="text-secondary">Skat App Datenschutz</h1>
            </template>
            <template v-slot:desc>
                <p class="text-secondary font-light">Wir nehmen den Schutz Ihrer Daten ernst.</p>
            </template>
        </LandingSectionhead>

        <div
            class="relative bg-secondary p-8 rounded-xl shadow-lg border-4 border-primary container mb-8 mt-16 font-light text-tertiary">
            <h1 class="text-3xl pb-2 pt-1 text-primary font-semibold">Datenschutzerklärung für die Skat Offline Lernen
                App</h1>

            <p class="text-base pb-1">Die nachfolgende Datenschutzerklärung informiert Sie umfassend und transparent über die Verarbeitung
                personenbezogener Daten im Rahmen der Nutzung der App Skat Offline Lernen (im Folgenden "App"). Der
                Schutz Ihrer
                Daten hat für uns höchste Priorität. Wir verpflichten uns, Ihre personenbezogenen Daten im Einklang mit
                den
                geltenden Datenschutzgesetzen, insbesondere der Datenschutz-Grundverordnung (DSGVO), dem California
                Consumer
                Privacy Act (CCPA), dem Personal Information Protection and Electronic Documents Act (PIPEDA) sowie der
                ePrivacy-Richtlinie, zu verarbeiten.</p>

            <h2 class="text-2xl pb-2 pt-3 text-primary">Verantwortlicher im Sinne der DSGVO</h2>
            <p class="text-base pb-1">Kranabetter &amp; Nadler GbR<br>
                Kormoranweg 8,<br />
                81827 München,<br />
                Deutschland
                luduspecto@gmail.com</p>

            <h2 class="text-2xl pb-2 pt-3 text-primary">Erhobene Daten</h2>

            <h3 class="text-xl pb-1 pt-2">Daten zur Nutzung der App</h3>
            <ul class="list-disc list-inside">
                <li class="pl-4 pb-2">Informationen zum Spielverhalten, wie gespielte Spiele, Lernfortschritte und Statistiken.</li>
                <li class="pl-4 pb-2">Interaktionen innerhalb der App.</li>
            </ul>

            <h3 class="text-xl pb-1 pt-2">Diagnosedaten</h3>
            <ul class="list-disc list-inside">
                <li class="pl-4 pb-2">Absturzberichte und Fehlermeldungen, bereitgestellt durch Firebase Crashlytics.</li>
                <li class="pl-4 pb-2">Nutzungsstatistiken, wie beispielsweise App-Nutzungsdauer und -Häufigkeit, erfasst durch Firebase
                    Analytics.
                </li>
                <li class="pl-4 pb-2">Gerätespezifische Informationen, wie Betriebssystem, Gerätemodell und App-Version.</li>
            </ul>

            <h3 class="text-xl pb-1 pt-2">Automatisch erhobene Daten</h3>
            <ul class="list-disc list-inside">
                <li class="pl-4 pb-2">IP-Adressen (in anonymisierter Form).</li>
                <li class="pl-4 pb-2">Log-Dateien, die Zugriffszeiten und Fehlermeldungen enthalten.</li>
            </ul>

            <h2 class="text-2xl pb-2 pt-3 text-primary">Zweck der Datenverarbeitung</h2>
            <p class="text-base pb-1">Die Verarbeitung Ihrer personenbezogenen Daten erfolgt zu folgenden Zwecken:</p>
            <ul class="list-disc list-inside">
                <li class="pl-4 pb-2">Verbesserung der Funktionalität und Benutzerfreundlichkeit der App durch Analyse des
                    Nutzungsverhaltens.
                </li>
                <li class="pl-4 pb-2">Identifikation und Behebung technischer Fehler sowie Optimierung der App-Performance.</li>
                <li class="pl-4 pb-2">Erstellung anonymisierter Statistiken, um die App kontinuierlich weiterzuentwickeln.</li>
            </ul>

            <h2 class="text-2xl pb-2 pt-3 text-primary">Rechtsgrundlage der Verarbeitung</h2>

            <h3 class="text-xl pb-1 pt-2">Gemäß DSGVO</h3>
            <ul class="list-disc list-inside">
                <li class="pl-4 pb-2">Art. 6 Abs. 1 lit. a: Verarbeitung erfolgt auf Basis Ihrer Einwilligung
                </li>
                <li class="pl-4 pb-2">Art. 6 Abs. 1 lit. b: Verarbeitung ist erforderlich zur Vertragserfüllung, insbesondere zur
                    Bereitstellung
                    der App.</li>
                <li class="pl-4 pb-2">Art. 6 Abs. 1 lit. f: Verarbeitung erfolgt zur Wahrung berechtigter Interessen, wie der
                    Fehleranalyse und
                    Verbesserung der App.</li>
            </ul>

            <h3 class="text-xl pb-1 pt-2">Gemäß CCPA</h3>
            <p class="text-base pb-1">Erhebung und Verarbeitung personenbezogener Daten basieren auf Ihrer Einwilligung oder der Notwendigkeit
                zur
                Bereitstellung der App. Es erfolgt keine Weitergabe oder Verkauf personenbezogener Daten an Dritte zu
                Werbezwecken.</p>

            <h3 class="text-xl pb-1 pt-2">Gemäß PIPEDA</h3>
            <p class="text-base pb-1">Ihre personenbezogenen Daten werden nur nach transparenter Information und Ihrer ausdrücklichen
                Zustimmung
                verarbeitet, sofern keine gesetzlichen Ausnahmen gelten.</p>

            <h2 class="text-2xl pb-2 pt-3 text-primary">Weitergabe der Daten</h2>
            <p class="text-base pb-1">Ihre personenbezogenen Daten werden ausschließlich an Dritte weitergegeben, soweit dies für die
                Bereitstellung
                der App und deren Funktionalität erforderlich ist. Zu diesen Dritten gehören insbesondere:</p>
            <ul class="list-disc list-inside">
                <li class="pl-4 pb-2"><strong>Google Firebase:</strong> Firebase stellt Dienste für die Analyse der App-Nutzung (Firebase
                    Analytics) und die Fehlererkennung (Firebase Crashlytics) bereit. Dabei können Daten in die USA
                    übertragen
                    werden. Google verpflichtet sich, die Daten gemäß den EU-Standardvertragsklauseln zu schützen.</li>
                <li class="pl-4 pb-2"><strong>Jira:</strong> Absturzberichte und Fehlermeldungen aus Firebase Crashlytics können in Jira übertragen werden, um technische Probleme effizient zu verfolgen und zu beheben. Dabei wird sichergestellt, dass die Daten gemäß den geltenden Datenschutzbestimmungen verarbeitet werden.</li>
            </ul>
            <p class="text-base pb-1">Wir stellen sicher, dass alle Drittanbieter die einschlägigen Datenschutzvorgaben, einschließlich der
                DSGVO, CCPA
                und PIPEDA, einhalten.</p>

            <h2 class="text-2xl pb-2 pt-3 text-primary">Speicherdauer</h2>
            <p class="text-base pb-1">Die Speicherdauer Ihrer personenbezogenen Daten richtet sich nach dem jeweiligen Zweck der Verarbeitung:
            </p>
            <ul class="list-disc list-inside">
                <li class="pl-4 pb-2">Nutzungs- und Diagnosedaten werden grundsätzlich für maximal 12 Monate gespeichert, sofern kein
                    längerer
                    Zeitraum gesetzlich vorgeschrieben oder erforderlich ist.</li>
                <li class="pl-4 pb-2">Absturzberichte werden gelöscht, sobald sie für die Fehlerbehebung nicht mehr benötigt werden.</li>
            </ul>

            <h2 class="text-2xl pb-2 pt-3 text-primary">Rechte der Nutzer</h2>

            <h3 class="text-xl pb-1 pt-2">Gemäß DSGVO</h3>
            <ul class="list-disc list-inside">
                <li class="pl-4 pb-2">Recht auf Auskunft über die verarbeiteten personenbezogenen Daten.</li>
                <li class="pl-4 pb-2">Recht auf Berichtigung unrichtiger oder unvollständiger Daten.</li>
                <li class="pl-4 pb-2">Recht auf Löschung Ihrer Daten („Recht auf Vergessenwerden“).</li>
                <li class="pl-4 pb-2">Recht auf Einschränkung der Verarbeitung.</li>
                <li class="pl-4 pb-2">Recht auf Datenübertragbarkeit.</li>
                <li class="pl-4 pb-2">Recht auf Widerruf Ihrer Einwilligung mit Wirkung für die Zukunft.</li>
            </ul>

            <h3 class="text-xl pb-1 pt-2">Gemäß CCPA</h3>
            <ul class="list-disc list-inside">
                <li class="pl-4 pb-2">Recht auf Auskunft über die erhobenen Datenkategorien und deren Zwecke.</li>
                <li class="pl-4 pb-2">Recht auf Löschung personenbezogener Daten.</li>
                <li class="pl-4 pb-2">Recht auf Opt-out von Datenveräußerungen, soweit zutreffend.</li>
            </ul>

            <h3 class="text-xl pb-1 pt-2">Gemäß PIPEDA</h3>
            <ul class="list-disc list-inside">
                <li class="pl-4 pb-2">Recht auf Zugang zu Ihren personenbezogenen Daten.</li>
                <li class="pl-4 pb-2">Recht auf Berichtigung unrichtiger Daten.</li>
            </ul>

            <h2 class="text-2xl pb-2 pt-3 text-primary">Cookies und Tracking-Technologien</h2>
            <p class="text-base pb-1">Die App verwendet Firebase Analytics, um Nutzungsdaten zu erfassen. Es kommen gerätebasierte
                Identifikatoren zum
                Einsatz, keine klassischen Cookies. Nutzer haben die Möglichkeit, das Tracking in den
                Systemeinstellungen ihres
                Geräts zu deaktivieren (z. B. durch Aktivierung der Funktion „Ad Tracking beschränken“).</p>

            <h2 class="text-2xl pb-2 pt-3 text-primary">Sicherheit</h2>
            <p class="text-base pb-1">Zum Schutz Ihrer personenbezogenen Daten setzen wir technische und organisatorische Maßnahmen ein, die
                dem
                aktuellen Stand der Technik entsprechen. Dazu gehören:</p>
            <ul class="list-disc list-inside">
                <li class="pl-4 pb-2">SSL-Verschlüsselung zur sicheren Übertragung von Daten.</li>
            </ul>

            <h2 class="text-2xl pb-2 pt-3 text-primary">Kontaktinformationen</h2>
            <p class="text-base pb-1">Für Anfragen oder zur Geltendmachung Ihrer Rechte können Sie uns wie folgt kontaktieren:</p>
            <p class="text-base pb-1">E-Mail: luduspecto@gmail.com</p>
            <p class="text-base pb-1">Darüber hinaus haben Sie das Recht, sich bei einer zuständigen Datenschutzbehörde zu beschweren.</p>

            <h2 class="text-2xl pb-2 pt-3 text-primary">Änderungen der Datenschutzerklärung</h2>
            <p class="text-base pb-1">Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu ändern, um sie an geänderte gesetzliche
                Vorgaben
                oder neue Funktionen der App anzupassen. Über wesentliche Änderungen informieren wir Sie rechtzeitig
                über die
                App. Die jeweils aktuelle Version ist jederzeit über die App einsehbar.</p>
            <h2 class="text-2xl pb-2 pt-3 text-primary">Zustimmung und Opt-out-Möglichkeiten</h2>
            <p class="text-base pb-1">Beim erstmaligen Start der App bitten wir um Ihre ausdrückliche Zustimmung zur Verarbeitung Ihrer Daten. Diese Zustimmung kann jederzeit in den App-Einstellungen widerrufen werden.</p>
        </div>
    </LandingContainer>

</template>
