---
title: Základy goniometrie
date: 2024-02-08T23:20:52+01:00
description: ""
keywords: [ "", "", "" ]
draft: true
---

## Jednotková kružnice

Mějme kružnici o poloměru $r = 1$ a středem $S$ v počátku soustavy souřadnic.

Goniometrii můžeme chápat jako kladení si otázek o tomto bodě.

## Oblouková míra

Víme, že celá kružnice má obvod $2\pi$, tedy platí následující vztah:

$$ 360^\circ = 2\pi$$

Jednou z možností je teď vyjádřit pro jednotku stupně:

$$ 1^\circ = \frac{2\pi}{360}$$
$$ 1^\circ = \frac{\pi}{180}$$

Obdobně můžeme vyjádřit pro druhou, námi zatím nepojmenovanou jednotku:

$$ \frac{360}{2\pi} = 1$$
$$ \frac{180}{\pi} = 1$$

## Sinus a cosinus

Jelikož se pohybujeme v kartézské soustavě souřadnic, každý bod v této soustavě, a tedy i náš bod $P$, má svoji $x$-ovou a $y$-ovou souřadnici. Zavedeme si proto dvě funkce, které nám dovolí se na tyto souřadnice dotazovat:

$$\sin{\theta} = y$$
$$\cos{\theta} = x$$

První funkci nazýváme **sinus**, druhou **cosinus**. Ptáme se: Jaká je $y$-ová souřadnice bodu $P$ daného úhlem $\theta$? Jaká je $x$-ova?

## Tangens

Mimo stupňovou a obloukovou míru existuje ještě jeden způsob, jak vyjádřit úhel. Představme si přímku, jež je dána předpisem $y = 3x + 2$.

![Přímka daná předpisem](line.webp)

<!-- tady tabulka hodnot -->

Dosazováním zjistíme, že pokud se $x$ změní o jedna, potom se $y$ změní o tři. Sklon přímky takto vyjádřený nazýváme **směrnicí**. Obecně platí:

$$s = \frac{\Delta y}{\Delta x}$$

Víme, že funkce $\sin{\theta}$ nám dává $y$-ový posun a $\cos{\theta}$ zase posun $x$-ový. Do vztahu proto můžeme dosadit:

$$s = \frac{\sin{\theta}}{\cos{\theta}}$$

Tento zápis má tu výhodu, že nám dovoluje vyjádřit směrnici čistě vzhledem k úhlu $\theta$. Zavedeme si proto novou funkci, jež nazýváme **tangens**, která nám tuto směrnici vzhledem k $\theta$ dává:

$$\tan{\theta} = \frac{\sin{\theta}}{\cos{\theta}}$$

## Pravoúhlý trojúhelník

Až do této chvíle jsme budovali goniometrii jen v rámci jednotkové kružnice. Čtenář ale možná ví, že její nejčastější aplikací jsou výpočty v pravoúhlém trojúhelníku. Naším úkolem teď proto bude dosud získané znalosti patřičně zobecnit.

Ačkoli to není zřejmé, otázky o bodu $P$ můžeme přeformulovat právě jako otázky o pravoúhlém trojúhelníku. Velikost protilehlé odvěsny tohoto trojúhelníka vzhledem k $\theta$ odpovídá $y$-ovému posunu bodu $P$, velikost přilehlé odvěsny zase posunu $x$-ovému. Velikost přepony je dána poloměrem kružnice. Pro lepší představu poslouží graf:

![Demonstrace převedení bodu na trojúhelník](tri.gif)

Pro trojúhelník platí následující vztahy:

$$a = y$$
$$b = x$$
$$c = 1$$

Můžeme tedy říct, že naše goniometrie je platná pro všechny pravoúhlé trojúhelníky, které mají přeponu $c = 1$. Takových trojúhelníků ale moc není. Na druhou stranu víme, že trojúhelník není dán ani tak délkou stran jako *poměry* mezi nimi; pronásobením jednotlivých stran libovolným číslem můžeme trojúhelník škálovat, aniž bychom změnili jeho tvar. Naším úmyslem je získat trojúhelník s $c = 1$; toho docílíme tak, že jednotlivé strany podělíme právě délkou přepony. Pro libovolný trojúhelník tedy platí:

$$\sin{\theta} = \frac{a}{c}$$
$$\cos{\theta} = \frac{b}{c}$$

Zde vidíme onu středoškolskou mantru: sinus je definován jako *protilehlá ku přeponě*, cosinus jako *přilehlá ku přeponě*. Trojúhelník, ve kterém chceme provádět výpočty, nejdříve podělením &bdquo;vměstnáme&ldquo; do jednotkové kružnice a poté pracujeme tak, jak jsme si již ukázali.

## Arcus


