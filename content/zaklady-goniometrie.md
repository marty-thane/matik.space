---
title: Základy goniometrie
date: 2024-02-08T23:20:52+01:00
description: "Výstavba goniometrie pomocí jednotkové kružnice a její postupné zobecnění na pravoúhlé trojúhelníky."
keywords: [ "sinus", "cosinus", "tangens", "pravoúhlý trojúhelník", "jednotková kružnice", "radiány" ]
draft: true
---

## Jednotková kružnice

Mějme kružnici o poloměru $r = 1$ a středem $S$ v počátku soustavy souřadnic. Mějme dále bod $P$, jenž náleží této kružnici a jeho poloha je dána úhlem $\theta$, který svírá jeho přůvodič s kladnou částí osy $x$. Goniometrii můžeme chápat jako kladení si otázek o tomto bodě.

## Oblouková míra

Úhel $\theta$ nám v útvaru tvoří kruhovou výseč. Jaká je délka této výseče? Víme, že celá kružnice má obvod $2\pi$, tedy platí následující vztah:

$$ 360^\circ = 2\pi$$

## Sinus a cosinus

Jelikož se pohybujeme v kartézské soustavě souřadnic, každý bod v této soustavě, a tedy i náš bod $P$, má svoji $x$-ovou a $y$-ovou souřadnici. Zavedeme si proto dvě funkce, které nám dovolí se na tyto souřadnice dotazovat:

$$\cos{\theta} = x$$
$$\sin{\theta} = y$$

První funkci nazýváme **cosinus**, druhou **sinus**. Ptáme se: Jaká je $y$-ová souřadnice bodu $P$ daného úhlem $\theta$? Jaká je $x$-ová?

## Tangens

Mimo stupňovou a obloukovou míru existuje ještě jeden způsob, jak vyjádřit úhel.

$$s = \frac{\Delta y}{\Delta x}$$

Víme, že funkce $\sin{\theta}$ nám dává $y$-ový posun a $\cos{\theta}$ zase posun $x$-ový. Do vztahu proto můžeme dosadit:

$$s = \frac{\sin{\theta}}{\cos{\theta}}$$

Tento zápis má tu výhodu, že nám dovoluje vyjádřit směrnici čistě vzhledem k úhlu $\theta$. Zavedeme si proto novou funkci, jež nazýváme **tangens**, která nám tuto směrnici vzhledem k $\theta$ dává:

$$\tan{\theta} = \frac{\sin{\theta}}{\cos{\theta}}$$

## Pravoúhlý trojúhelník

Až do této chvíle jsme budovali goniometrii jen v rámci jednotkové kružnice. Čtenář ale možná ví, že její nejčastější aplikací jsou výpočty v pravoúhlém trojúhelníku. Naším úkolem teď proto bude dosud získané znalosti patřičně zobecnit.

Ačkoli to není zřejmé, otázky o bodu $P$ můžeme přeformulovat právě jako otázky o pravoúhlém trojúhelníku. Velikost protilehlé odvěsny tohoto trojúhelníka vzhledem k $\theta$ odpovídá $y$-ovému posunu bodu $P$, velikost přilehlé odvěsny zase posunu $x$-ovému. Velikost přepony je dána poloměrem kružnice. Pro lepší představu poslouží graf:

Můžeme tedy říct, že naše goniometrie je platná pro všechny pravoúhlé trojúhelníky, které mají přeponu $c = 1$. Takových trojúhelníků ale moc není. Na druhou stranu víme, že trojúhelník není dán ani tak délkou stran jako *poměry* mezi nimi; pronásobením jednotlivých stran libovolným číslem můžeme trojúhelník škálovat, aniž bychom změnili jeho tvar. Naším úmyslem je získat trojúhelník s $c = 1$; toho docílíme tak, že jednotlivé strany podělíme právě délkou přepony. Pro libovolný trojúhelník tedy platí:

$$\sin{\theta} = \frac{a}{c}$$
$$\cos{\theta} = \frac{b}{c}$$

Zde vidíme onu středoškolskou mantru: sinus je definován jako *protilehlá ku přeponě*, cosinus jako *přilehlá ku přeponě*. Trojúhelník, ve kterém chceme provádět výpočty, nejdříve podělením &bdquo;vměstnáme&ldquo; do jednotkové kružnice a poté pracujeme tak, jak jsme si již ukázali.

## Arcus


