---
title: Jazykové modely
date: 2024-02-11T20:03:15+01:00
description: ""
keywords: ["", "", "", "", ""]
draft: true
---

## Úvod

Poslední rok byl poznamenán popularizací určitého typu umělé inteligence, kterým jsou velké jazykové modely. [ChatGPT](https://chat.openai.com/) nebo [Gemini](https://gemini.google.com/app) jsou jen některá z jmen, která zaznívají dnes a denně. Je tu jen jeden problém -- lidé je neumí používat (a pak se diví, když dostávají nesmyslné odpovědi). Je to způsobeno, jak se autor domnívá, nepochopením podstaty těchto modelů a jejich vnitřního fungování. Účelem tohoto dokumentu je proto vybudovat ve čtenáři intuitivní představu o jazykových modelech a nabídnout praktické zásady pro práci s nimi. Jazykové modely jsou koneckonců jen nástroj -- je proto v našem zájmu naučit se s nimi pracovat co nejlépe.

## Architektura

Ačkoli je tento dokument pojednáním o umělé inteligenci (dále jen AI), nemá cenu zatěžovat čtenáře technickými detaily -- na AI můžeme pohlížet jako na &bdquo;černou skříňku&ldquo;, jejíž útroby jsou nám skryty. Tato skříňka má svůj vstup a výstup, tedy my do ní něco vkládáme a ona nám něco vrací nazpátek.

![](ai.svg)

Jazykové modely fungují na principu **predikce dalšího slova**; vstupem je určitá posloupnost slov a výstupem je slovo, které bylo vyhodnoceno jako pokračování této posloupnosti. Ptáme se: jaké slovo *pravděpodobně* následuje v dané posloupnosti slov?

![](llm.svg)

## Schopnosti

Fungování jazykového modelu si nejlépe osvojíme, pokud sami na chvíli převezmeme jeho roli. Doplňte slova na vynechaná místa:

<p class="center">VYSOKÝ <mark>\_\_\_\_</mark></p>

<p class="center">ZÁVODNÍ <mark>\_\_\_\_</mark></p>

Zde se vyplatí na chvíli pozastavit a zamyslet se, jaká je paralela mezi tímto cvičením a jazykovými modely. Víme, že jazykový model pouze *předvídá* následující slovo; dělá tak na základě předchozích slov, která jsme mu poskytli. Cvičení výše nás donutilo provést přesně to samé -- zadání je nejednoznačné, bez udaného kontextu musíme spoléhat jen na svou jazykovou intuici a hádat. Neexistují správné ani špatné odpovědi. Fráze šlo doplnit například takto:

<p class="center">VYSOKÝ <mark>DŮM</mark></p>

<p class="center">ZÁVODNÍ <mark>AUTO</mark></p>

Toto byl případ, kdy vstupem byla posloupnost o jednom slově. Samozřejmě neexistuje důvod, proč se omezovat jen na jedno slovo. Doplňte opět slova na vynechaná místa:

<p class="center">NEBE JE <mark>\_\_\_\_</mark></p>

<p class="center">SOUSED BYDLÍ <mark>\_\_\_\_</mark></p>

Jedná se stále o ten samý proces, jen tentokrát musíme vzít v potaz více slov, která tomu našemu předcházejí. Ani teď se neodchylujeme od toho, jak reálné jazykové modely fungují. Jedna z možných odpovědí:

<p class="center">NEBE JE <mark>MODRÉ</mark></p>

<p class="center">SOUSED BYDLÍ <mark>VEDLE</mark></p>

Čtenář může oprávněně namítnout, že jazykový model, který hádá vždy jen jedno slovo, není moc užitečný. Tento nedostatek lze ale lehce obejít, pokud výstup modelu opětovně dosadíme za jeho vstup -- postupně nám tak na výstupu krystalizuje text o libovolné délce. Tento proces nazýváme **rekurzí**.

<p class="center">KOČKA <mark>\_\_\_\_</mark></p>

<p class="center">KOČKA HONÍ <mark>\_\_\_\_</mark></p>

<p class="center">KOČKA HONÍ MYŠ</p>

![](rec.svg)

Pojďme si nakonec udělat ještě jedno takové cvičení. Doplňte slova na vynechaná místa:

<p class="center">HLAVNÍM MĚSTEM FRANCIE JE <mark>\_\_\_\_</mark></p>

<p class="center">KDO JE NEJLEPŠÍM PŘÍTELEM ČLOVĚKA? <mark>\_\_\_\_</mark></p>

Právě se stalo něco zajímavého. První vstup byl oznamovací větou, nijak rozdílnou od všech předchozích vstupů. Druhý vstup byl ale větou tázací. Jazykové modely s nimi zachází jako s každým jiným vstupem -- ptají se, jak *pravděpodobně* bude daná posloupnost slov pokračovat. Na otázku, kdo je nejlepším přítelem člověka, odpovíme asi všichni stejně. Přesto ale vycházíme spíše z ustáleného výrazu než se skutečnosti -- očekáváme, že &bdquo;pes&ldquo; a &bdquo;nejlepší přítel člověka&ldquo; se v textu budou objevovat pospolu, považujeme to za *pravděpodobné*. Přesně tato pravděpodobnost je ale doménou jazykových modelů.

## Úskalí

Zde autor považuje za správné přerušit na chvíli svůj výklad a nechat čtenáře vstřebat celkový dopad tak jednoduchého konceptu, jako je predikce dalšího slova. Viděli jsme, že jazykový model, který provádí jen a pouze tuto predikci, je schopen generovat libovolně dlouhé texty pomocí rekurze a odpovídat uživateli na otázky. Můžeme s ním vést konverzaci, klást mu dotazy, zadávat úlohy -- toto vše lze zredukovat na problém předpovědi následujícího slova.

Jak už to ale bývá, nic na světě není dokonalé, a i jazykové modely mají své nedostatky. Odpovězte na následující otázku:

<p class="center">PATŘÍ SÝKORA KOMINÍČEK MEZI PĚVCE?</p>

Čtenář, který sebejistě odpověděl ano, si právě na vlastní kůži vyzkoušel, jak jazykové modely dělají chyby. Sýkora kominíček nepatří mezi pěvce, protože neexistuje -- fiktivní název byl vynalezen pro účely tohoto dokumentu. Odkud se tedy bere ta jistota?

Příslušnost sýkor do řádu pěvců je dána morfologií a fylogenetickými vztahy. Znalosti průměrného člověka (a tedy člověka bez vzdělání v ornitologii) mu ale nedovolují rozhodnout o této příslušnosti podle těchto kritérií. Tvrzení, že &bdquo;sýkora&ldquo; je &bdquo;pěvec&ldquo; je proto opět pouze slovní asociací -- jedná se o vztah mezi dvěma pojmy. Tento vztah je dokonce tak silný, že byl schopný přesvědčit čtenáře o existenci smyšleného druhu sýkor. Pokud jsme byli schopni na základě slovní asociace udělat chybu, potom i jazykové modely budou nutně chybovat, a na jejich výstupy je proto vždy nutné pohlížet kriticky.

## Praktické aplikace

Čtenář by v tuto chvíli měl být dostatečně vybaven, aby chápal jazykové modely a dokázal předvídat jejich chování. Viděli jsme, jakým nástrahám čelíme při používání těchto modelů, a do mysli se nám vkrádá otázka: existuje nějaká spolehlivá sada pravidel, která by zkvalitnila výstup jazykových modelů a minimalizovala možnost chyby? Tato pravidla opravdu existují. Autor si dovolil formulovat je takto:

1. úkon musí být čistě lingvistickou operací;
2. úkon nesmí vyžadovat žádné externí znalosti.

Projdeme si teď několik praktických aplikací, abychom si osvojili tato pravidla.

<!--
- dokumentace k softwaru
- ptani se na piny -- spatne

ve vzdelavani:
- tvorba testu -- nutne poskytnout materialy, prikad s romantismem
- psani eseji -- pouze prepisovat
- vysvetlovani -- vzdy zkontrolovat!
- matematika -- nepouzivat, problem s pravdepodobnosti
-->
