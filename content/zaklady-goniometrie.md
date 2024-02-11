---
title: Základy goniometrie
date: 2024-02-08T23:20:52+01:00
description: ""
keywords: ["", "", "", "", ""]
draft: true
---

## Jednotková kružnice

Mějme kružnici o poloměru $r = 1$ a středem $S$ v počátku soustavy souřadnic.

## Oblouková míra

Víme, že celá kružnice má obvod $2\pi$, tedy platí následující vztah:

$$ 360^\circ = 2\pi$$
$$ 180^\circ = \pi$$

## Sinus a cosinus

Jelikož se pohybujeme v kartézské soustavě souřadnic, každý bod v této soustavě, a tedy i náš bod $P$, má svoji $x$-ovou a $y$-ovou souřadnici. Zavedeme si proto dvě funkce, které nám dovolí se na tyto souřadnice dotazovat:

$$\cos{\theta} = x$$
$$\sin{\theta} = y$$

## Tangens

Mimo stupňovou a obloukovou míru existuje ještě jeden způsob, jak vyjádřit úhel. Představme si přímku, jež je dána předpisem $y = 3x + 2$. Její sklon můžeme vyjádřit jako změnu funkční hodnoty v závislosti na změně funkční proměnné. Takto vyjádřený úhel nazýváme směrnicí.

$$\frac{\Delta y}{\Delta x}$$

My víme, že funkce $\sin{\theta}$ nám dává $y$-ový posun, tedy $\Delta y$, a obdobně $\cos{\theta}$ zase posun $x$-ový, tedy $\Delta x$. Můžeme tedy do vztahu dosadit následovně:

$$\frac{\sin{\theta}}{\cos{\theta}}$$

Tento zápis má tu výhodu, že nám dovoluje vyjádřit směrnici čistě vzhledem k úhlu $\theta$. Zavedeme si proto novou funkci, jež nazýváme tangens, která nám tuto směrnici vzhledem k $\theta$ dává:

$$\tan{\theta} = \frac{\sin{\theta}}{\cos{\theta}}$$

<!--
Tato funkce je zajímavá v tom, že není definovaná v $\frac{\pi}{2} + k\pi; k \belongs \wholenumbers$. Existují různé způsoby, jak chápat toto omezení. Můžeme si například zkusit dosadit:

$$\tan{\frac{\pi}{2}} = \frac{\sin{\frac{\pi}{2}}}{\cos{\frac{\pi}{2}}} = \frac{1}{0}$$

Nulou dělit nelze, tedy funkce $\tan{\theta}$ není definovaná tam, kde je $\cos{\theta} = 0$. Můžeme se ale také zamyslet nad tím, co nám směrnice vlastně *říká*; je to vidět z následujícího vztahu:

$$\frac{y}{x} = \frac{\frac{y}{x}}{\frac{x}{x}} = \frac{\frac{y}{x}}{1}

Vidíme, že v čitateli dostáváme číslo (je jedno jaké) a ve jmenovateli dostáváme jedničku; směrnici nám tedy říká změnu $\Delta y$ za *jednotku* vstupní proměnné.
-->

## Pravoúhlý trojúhelník

Až do této chvíle jsme budovali goniometrii jen v rámci jednotkové kružnice. Čtenář ale možná ví, že její nejčastější aplikací jsou výpočty v pravoúhlém trojúhelníku. Naším úkolem teď proto bude dosud získané znalosti patřičně zobecnit.

Ačkoli to není zřejmé, otázky o bodu $P$ můžeme přeformulovat právě jako otázky o pravoúhlém trojúhelníku. Velikost protilehlé odvěsny tohoto trojúhelníka vzhledem k $\theta$ odpovídá $y$-ovému posunu bodu $P$, velikost přilehlé odvěsny zase posunu $x$-ovému. Velikost přepony je dána poloměrem kružnice. Pro lepší představu poslouží graf:

$$a = y$$
$$b = x$$
$$c = 1$$

Můžeme tedy říct, že naše goniometrie je platná pro všechny pravoúhlé trojúhelníky, které mají přeponu $c = 1$. Takových trojúhelníků ale moc není.

## Arcus

Na závěr ještě zmíníme funkce, které jsou inverzní k funkcím goniometrickým a nazývají se cyklometrické.

## Příklad

Vektor svírající úhel blabla o délce blabal, urči jeho souřadnice.
