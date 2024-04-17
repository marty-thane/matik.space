---
title: Genetické algoritmy
date: 2024-03-13T13:36:15+01:00
description: ""
keywords: []
draft: true
---

## Motivace

Začněme toto pojednání něčím, co se možná na první pohled bude zdát jako nesouvisející: letadly. Na to, jak taková letadla konstruovat, jsme přišli teprve nedávno. Není zřejmé, jak sestrojit vozidlo, které dokáže sebe samo po delší dobu udržet ve vzduchu. Nejeden lidský život byl proto v minulosti zasvěcen hledání dokonalého návrhu. Sto let pokusů a omylů, vědeckého bádání a šťastných náhod ale nese své ovoce; můžeme ukázat na dnešní letadla a hrdě prohlásit: toto je dokonalý návrh létajícího stroje.

![Silueta letadla](plane.webp)

Zajímavé je, že někdo jiný došel k úplně stejnému závěru: ptáci. Z anatomického hlediska jsou ptáci a letadla totožní. Přesto mezi nimi existuje zásadní rozdíl; víme, jak jsme letadla vynalezli my (pokus-omyl, věda, štěstí); jak to ale udělala příroda? Nemá přece ani vědomí, ani rozum. Přesto jsou ptáci vybaveni tělem, které je velmi dobře uzpůsobeno k letu.

![Ilustrace podobnosti letadel a ptáků](plane_bird.webp)

Hlavním nástrojem přírody pro řešení problémů je **evoluce** a toto pojednání se věnuje právě jí. Chceme pochopit, jak funguje, protože pro nás může být užitečná -- pokud dokážeme proces evoluce zobecnit, potom ji můžeme využít pro řešení *svých vlastních problémů*.

## Mechanismy

Představme si populaci ptáků. Můžeme říct, že mezi jednotlivými jedinci budou vždy existovat rozdíly. Jakou roli hrají tyto rozdíly v populaci? Pro ilustraci uvažujme jedince, který se narodil pouze s jedním křídlem. To ho znevýhodňuje vůči ostatním jedincům -- pravděpodobně by brzy zahynul, a pokud ne, zcela určitě by se nerozmnožil. V obou případech se děje důležitá věc: nevhodný jedinec *ztrácí vliv na další generaci* -- jeho geny se do ní nepropagují. Naopak nejlépe vybavení jedinci mají největší šanci přežít a rozmnožit se, tedy nejvíce ovlivňují podobu další generace. Vzorem potomsta jsou vždy nejlépe vyvinutí rodiče. Toto je první mechanismus evoluce a nazýváme ho **selekcí**.

Opusťme na chvíli létající tvorstvo a soustřeďme se teď na organismy žijící na mnohem menší úrovni: bakterie. I bakteriální populace podléhají selekci; ta sama o sobě zde však nemůže fungovat. Bakterie se rozmnožují dělením; potomci jsou vždy identickými kopiemi svého rodiče. Ačkoli tedy budou nejlepší jedinci nejvíce zastoupeni v populaci, jejich skryté slabiny budou v populaci taktéž ve stejném poměru přítomny. Nepříznivé vnější vlivy, např. změny v prostředí, mohou vděk těmto slabinám vyhladit celé vývojové větve. Pro nejednu populaci může být toto fatální. Do procesu evoluce proto vstupuje šum, malé a nahodilé změny v genetické informaci, díky kterým se potomci alespoň v malé míře liší od svého rodiče, tedy nesdílejí všechny jeho slabiny. Toto je druhým mechanismem evoluce a nazýváme ho **mutací**.

Ale většina života na Zemi se nerozmnožuje dělením. Každý potomek má zpravidla dva rodiče -- jednu matku a jednoho otce. Potomek získává geny od každého z rodičů zhruba stejným dílem. Toto je z různých důvodů velice výhodné, jedná se proto o dominantní způsob rozmnožování v přírodě. My ho budeme nazývat **křížením**, což je zároveň třetím mechanismem evoluce.

## Implementace

<!-- toto asi vyřeit pomocí tabulky -->
<!-- A thief breaks into a house and is about to steal himself some goods. He wants to maximize his gains, but can only carry a certain weight. Which items should the thief steal from the house? This riddle is known as **the knapsack problem** and the solution is not at all obvious. There is no nice formula that we can use. Looking at all possible answers and picking the best one is not a solution either -- if we consider that each item can either be stolen or not stolen, for $n$ items we are looking at $2_n$ possible solutions. This problem gets thus very computationally intensive for large numbers of items; for just twenty items, we are looking at over a milion possible soutions! -->
Zloděj se vloupe do domu a rozmýšlí, které předměty ukrást. Chce maximalizovat svůj zisk, zároveň je ale omezen vahou, kterou je schopen unést. Které předměty má zloděj ukrást? Obecná formulace tohoto problému je známa jako **problém batohu** (*The knapsack problem*) a pro nalezení řešení neexistuje žádný dobrý postup. Porovnání všech možných kandidátních řešení také není možnost -- pro $n$ předmětů existuje $2^n$ možných řešení; jen pro dvacet předmětů tedy existuje přes milion možných řešení!

![Ilustrace problému batohu](knapsack.svg)

<!-- Let's think about how we can use our newly gained knowledge to transform this riddle into an evolutionary problem. As mentioned, each item can be either stolen or not stolen; we can therefore represent possible solutions using binary vectors. Each bit corresponds to a specific item and its value tells us whether the thief will steal it or not. -->
S nově nabytými znalostmi můžeme zkusit přistupovat k zadání jako k evolučnímu problému. Každý z předmětů může zloděj buď ukrást, nebo neukrást; kandidátní řešení lze proto vyjádřit jako binární vektor. Pozice bitu určuje předmět a jeho hodnota nám říká, zda předmět bude ukradnut, či nikoliv.

$$\alpha = \begin{bmatrix} \alpha_1 & \alpha_2 & \cdots & \alpha_n \end{bmatrix} \in \\{0, 1\\}^n$$

<!-- This is essentially equivalent to encoding information about a person using their DNA. Hence we call this representation a **genotype**. -->
Toto je obdoba kódování informací o člověku do jeho DNA. Vektory reprezentující řešení proto nazýváme **genotypy**.

<!-- A genotype is used to "build" the particular creature, a particular person, or in our case, a particular solution. We call this build a **fenotype**. To implement this, we define a **gamma converter**. It creates a fenotype out of a genotype. For our knapsack problem, we would filter out the items based on the bit values in the genotype. If it is a one, include it in the fenotype. The filtered lsit of items is then returned by the function. -->
Genotyp je vlastně vzor, podle kterého budujeme konkrétního kandidáta na řešení. Tohoto &dbquo;zhmotněného&ldquo; kandidáta nazýváme **fenotypem**. Pro převod z genotypu na fenotyp zavádíme zpravidla **funkci gamma**. V našem problému se zlodějem fenotyp odpovídá seznamu konkrétních předmětů, které budou ukradeny.

```
def gamma(genotyp: list, predmety: list) -> list:
    return [p for g, p in zip(genotyp, predmety) if g]
```

<!-- Now that we are able to create these fenotypes, we need a way of evaulating them. In other words, we need to determine how well they solve our problem. We call this a **fitness function**. As said, our goal is to maximize the gains while not exceeding a weight limit. We can implement the following algorithm: -->
Teď, když jsme schopni vytvářet fenotypy, potřebujeme způsob, jakým je budeme hodnotit. Pro tento účel zavádíme **fitness funkci** -- hodnotí, jak dobře daný kandidát řeší náš problém. Ze zadání je patrné, že čím vyšší zisk, tím vyšší ohodnocení. Zároveň, pokud kandidát přesáhne povolenou váhu, ohodnotíme ho napevno nulou -- nemá pro nás význam.

```
def fitness(fenotyp: list) -> int:
    celkova_vaha = sum([predmet.vaha for predmet in fenotyp])
    if celkova_vaha > MAXIMALNI_VAHA:
        return 0
    velkova_cena = sum([predmet.cena for predmet in fenotyp])
    return celkova_cena
```

<!-- We will use these scores generated by our fitness function to select solutions for propagation. There are numerous ways to do this, some of which includes: -->
Generovaná hodnocení využíváme pro následnou selekci kandidátů z populace. Způsobů, jakými lze implementovat selekci, je několik. Zde jsou některá z nich:

<!--
- **Roulette**: Solutions are selected for propagation randomly but with respect to their relative success (better solutions are more likely to be selected)
- **Elitism**: Only a fixed number of best solutions is selected for propagation.
- **Arena**: Two or more solutions are randomly selected from the population. The best solution out of the group is the winner and gets to propagate.
-->
- **Ruleta**: Kandidátí jsou vybírání náhodně, ale s ohledem na jejich relativní úspěšnost (lepší skóre = větší pravděpodobnost výběru).
- **Elitismus**: Pouze pevný počet nejlepších kandidátů je vybráno k propagaci.
- **Souboj**: Vybírá se vždy dva nebo více kandidátů náhodně. Mezi vybranými následně proběhne souboj, nejlepší kandidát je zvolen k propagaci.

<!-- After we select the parents of the next generation, we want them to mate, in other words, to do a crossover. This can again be done in multiple ways: -->
Po vybrání rodičů další generace chceme tyto rodiče spářit, tj. provést křížení. Toto se opět dá provést vícero způsoby:

<!--
- **One-Point**: A random split point is picked along the genotype. The parents then get split and exchange parts. The newly created genotypes are the children.
- **Multi-Point**: Same as One-Point, but two or more split points are selected.
- **Uniform**: Produces only one child. Each bit in a genotype is equally likelyy to be inherited from either parents.
-->
- **Jednobodově**: Náhodně se vybere místo, kde se genotypy rodičů &bdquo;roztrhnou&ldquo;. Části se poté prohodí a nově vzniklé genotypy tvoří potomky.
- **Vícebodově**: Obdobné, jen se dvěma nebo více dělícími místy.
- **Uniformě**: O každém bitu je jednotlivě rozhodnuto, od kterého rodiče ho získá.

<!-- In our case, uniform could produce children that are very unfit. We therefore select a one-point crossover method. -->

```
kod pro krizeni
```

Mutace je jako mechanismus asi nejlehčí na implementaci. Projdeme jednotlivé bity a o každém zvlášt rozhodneme.
<!-- komentar ke kodu -->

## More applications

The knapsack problem is an interesting omptimization problem. It is not useful tho. Here are therefore some more practical examples of using genetic algorithms for solving problems:

-
