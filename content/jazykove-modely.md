---
title: Jazykové modely
date: 2024-02-11T20:03:15+01:00
description: "Účelem tohoto dokumentu je vybudovat ve čtenáři intuitivní představu o jazykových modelech a nabídnout praktické zásady pro práci s nimi."
keywords: [ "umělá inteligence", "velké jazykové modely", "chatgpt", "ai" ]
draft: false
---

## Úvod

Poslední rok byl poznamenán popularizací určitého typu umělé inteligence, kterým jsou velké jazykové modely. <nobr>[ChatGPT](https://chat.openai.com/)</nobr> nebo <nobr>[Gemini](https://gemini.google.com/app)</nobr> jsou jen některá z&nbsp;jmen, která zaznívají dnes a&nbsp;denně. Je tu jen jeden problém: lidé je neumí používat. Je to způsobeno -- jak se autor domnívá -- nepochopením podstaty fungování těchto modelů. Účelem tohoto dokumentu je proto vybudovat ve čtenáři intuitivní představu o&nbsp;jazykových modelech a&nbsp;nabídnout praktické zásady pro práci s&nbsp;nimi. Jazykové modely jsou koneckonců jen nástroj -- je proto v&nbsp;našem zájmu naučit se s&nbsp;nimi pracovat co nejlépe.

## Architektura

Ačkoli je tento dokument pojednáním o&nbsp;umělé inteligenci (dále jen AI), nemá cenu zatěžovat čtenáře technickými detaily -- na AI můžeme pohlížet jako na &bdquo;černou skříňku&ldquo;, jejíž útroby jsou nám skryty. Tato skříňka má svůj vstup a&nbsp;výstup, tedy my do ní něco vkládáme a&nbsp;ona nám něco vrací nazpátek.

![Obecné schéma umělé inteligence](ai.svg)

Jazykové modely fungují na principu **predikce dalšího slova**; vstupem je určitá posloupnost slov a&nbsp;výstupem je slovo, které bylo vyhodnoceno jako pokračování této posloupnosti. Ptáme se: Jaké slovo *pravděpodobně* následuje v&nbsp;dané posloupnosti slov?

![Schéma velkého jazykového modelu](llm.svg)

## Schopnosti

Fungování jazykového modelu si nejlépe osvojíme, pokud sami na chvíli převezmeme jeho roli. Doplňte slova na vynechaná místa:

$$\text{VYSOKÝ \colorbox{yellow}{...}}$$
$$\text{ZÁVODNÍ \colorbox{yellow}{...}}$$

Jaká existuje paralela mezi jazykovými modely a&nbsp;tímto cvičením? Víme, že jazykový model pouze *předvídá* následující slovo; dělá tak na základě slov předcházejících. Cvičení výše nás donutilo provést to samé. Slova šlo doplnit například takto:

$$\text{VYSOKÝ \colorbox{yellow}{DŮM}}$$
$$\text{ZÁVODNÍ \colorbox{yellow}{AUTO}}$$

Toto byl případ, kdy vstupem byla posloupnost o&nbsp;jednom slově. Samozřejmě neexistuje důvod, proč se omezovat jen na jedno slovo. Doplňte opět na vynechaná místa:

$$\text{NEBE JE \colorbox{yellow}{...}}$$
$$\text{SOUSED BYDLÍ \colorbox{yellow}{...}}$$

Jedná se stále o&nbsp;ten samý proces, jen tentokrát musíme vzít v&nbsp;potaz více slov, která tomu našemu předcházejí. Ani teď se neodchylujeme od toho, jak reálné jazykové modely fungují. Jedna z&nbsp;možných odpovědí:

$$\text{NEBE JE \colorbox{yellow}{MODRÉ}}$$
$$\text{SOUSED BYDLÍ \colorbox{yellow}{VEDLE}}$$

Čtenář může oprávněně namítnout, že jazykový model, který hádá vždy jen jedno slovo, není příliš užitečný. Tento nedostatek lze ale lehce obejít, pokud výstup modelu opětovně dosadíme za jeho vstup -- postupně nám tak na výstupu krystalizuje text o&nbsp;libovolné délce. Tento proces nazýváme **rekurzí**.

$$\text{KOČKA \colorbox{yellow}{...}}$$
$$\text{KOČKA CHYTÁ \colorbox{yellow}{...}}$$
$$\text{KOČKA CHYTÁ MYŠ}$$

Doplňte naposledy na vynechané místo:

$$\text{KDO JE NEJLEPŠÍM PŘÍTELEM ČLOVĚKA? \colorbox{yellow}{...}}$$

Právě se stalo něco zajímavého. Na rozdíl od všech předchozích vstupů byl tento větou tázací. Jazykové modely s&nbsp;nimi zacházejí jako s&nbsp;každým jiným vstupem -- ptají se, jak *pravděpodobně* bude daná posloupnost slov pokračovat. Na otázku, kdo je nejlepším přítelem člověka, odpovíme asi všichni stejně. Přesto ale vycházíme spíše z&nbsp;ustáleného výrazu než ze skutečnosti -- očekáváme, že &bdquo;pes&ldquo; a&nbsp;&bdquo;nejlepší přítel člověka&ldquo; se v&nbsp;textu budou objevovat pospolu, považujeme to za *pravděpodobné*. Přesně s&nbsp;touto pravděpodobností jazykové modely pracují.

## Nedostatky

Jak jsme demonstrovali výše, jazykové modely jsou schopné generovat libovolně dlouhé texty a&nbsp;odpovídat uživateli na otázky. Můžeme s&nbsp;nimi vést konverzaci, klást jim dotazy, zadávat úlohy -- toto vše lze zredukovat na problém předpovědi následujícího slova. Jazykové modely ale v&nbsp;žádném případě nejsou dokonalé. Odpovězte na následující otázku:

$$\text{PATŘÍ SÝKORA KOMINÍČEK MEZI PĚVCE?}$$

Čtenář, který sebejistě odpověděl ano, si právě na vlastní kůži vyzkoušel, jak jazykové modely dělají chyby. Sýkora kominíček nepatří mezi pěvce, protože neexistuje -- fiktivní název byl vynalezen pro účely tohoto dokumentu. Odkud se tedy bere ta jistota?

Příslušnost sýkor do řádu pěvců je dána morfologií a&nbsp;fylogenetickými vztahy. Znalosti průměrného člověka (a&nbsp;tedy člověka bez vzdělání v&nbsp;ornitologii) mu ale nedovolují o&nbsp;této příslušnosti rozhodnout řečenou cestou. Tvrzení, že &bdquo;sýkora&ldquo; je &bdquo;pěvec&ldquo;, je proto opět pouze slovní asociací -- jedná se o&nbsp;vztah mezi dvěma pojmy. Tento vztah je dokonce tak silný, že je schopný přesvědčit čtenáře o&nbsp;existenci smyšleného druhu sýkor. Pokud jsme byli schopni na základě slovní asociace udělat chybu, potom i&nbsp;jazykové modely budou nutně chybovat, a&nbsp;na jejich výstupy je proto vždy nutné nahlížet kriticky.

## Praktické aplikace

Čtenář by v&nbsp;tuto chvíli měl být dostatečně vybaven, aby chápal fungování jazykových modelů a&nbsp;dokázal předvídat jejich chování. Viděli jsme, jakým nástrahám čelíme při jejich používání, a&nbsp;do mysli se nám vkrádá otázka: Pokud si jazykové modely &bdquo;vymýšlejí&ldquo;, jsou vůbec k&nbsp;něčemu dobré?

Dle názoru i&nbsp;zkušenosti autora mají jazykové modely své uplatnění; při jejich používání se ale musíme držet určitých zásad. Rozhodně neplatí, že by jazykové modely byly řešením na všechno, a&nbsp;čtenář se snad vyvaruje takovému zacházení s&nbsp;nimi. Obecně lze říci, že nejlepších výsledků dosáhneme, pokud splníme následující podmínky:

1. zadaný úkon musí být lingvistickou operací;
2. úkon nesmí vyžadovat žádné externí znalosti.

Uvažujme učitele češtiny, který chce použít jazykový model k&nbsp;tvorbě písemného testu. Úkol zadá modelu takto: *&bdquo;Vytvoř písemnou práci na téma romantismus.&ldquo;* Co udělal špatně? Úkon vyžaduje znalosti, ke kterým model nemá přístup -- druhá podmínka proto není splněna. Situaci lze vyřešit tak, že modelu poskytneme vedle zadání také materiály, ze kterých má při tvorbě testu vyjít. Úkol by potom zněl: *&bdquo;Vytvoř písemný test na základě přiložených materiálů.&ldquo;* Toto generuje podstatně lepší výsledky.

Uvažujme žáka, který chce využít jazykový model pro vypracování domácího úkolu z&nbsp;matematiky. Existují dva důvody, proč je toto špatně. Kromě toho, že počty nejsou jazykovou operací (první podmínka není splněna), vyplývá to také z&nbsp;deterministické povahy počtů. Čtyři krát pět se rovná dvacet a&nbsp;bude se *vždy* rovnat dvaceti; jazykové modely ale, jak jsme již mnohokrát řekli, pracují s&nbsp;pravděpodobností. Na otázku, kolik je čtyři krát pět, mohou odpovědět jen, že je to *pravděpodobně* dvacet, tedy je zde prostor pro chybu. Pro řešení takovýchto problémů je proto lepší využít  vhodný matematický software (např. <nobr>[WolframAlpha](https://www.wolframalpha.com/)</nobr>).
