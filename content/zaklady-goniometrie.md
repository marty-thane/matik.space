---
title: Základy goniometrie
date: 2024-02-08T23:20:52+01:00
description: "Výstavba goniometrie pomocí jednotkové kružnice a její postupné zobecnění na pravoúhlé trojúhelníky."
keywords: [ "sinus", "cosinus", "tangens", "pravoúhlý trojúhelník", "jednotková kružnice", "radiány" ]
draft: true
---

## Jednotková kružnice

Mějme kružnici o poloměru $r = 1$ a středem $S$ v počátku soustavy souřadnic. Tento útvar nazýváme **jednotkovou kružnicí**. Mějme dále bod $M$, jenž náleží této kružnici a jeho poloha je dána úhlem $\theta$, který svírá jeho průvodič s kladnou částí osy $x$. Goniometrii můžeme chápat jako kladení si otázek o tomto bodě.

## Oblouková míra

Úhel $\theta$ nám v kružnici tvoří její výseč. Jaká je délka této výseče? Víme, že obvod celé kružnice je $2\pi$, tedy platí následující vztah:

$$360^\circ = 2\pi$$

Mezi úhlem ve stupních a délkou výseče existuje lineární závislost. Nic nám proto nebrání vyjádřit úhel přímo pomocí této délky. Pro takového vyjádření zavádíme pojem **oblouková míra**, jejíž jednotkou jsou **radiány**.

Při převodu mezi obloukovou a stupňovou mírou postupujeme tak, že si nejdříve průvodič v kružnici &ldquo;nastavíme&ldquo; na daný úhel a poté odvozujeme vyjádření. Vycházíme přitom stále ze zmíněného vztahu.

{{< details label="Převeďte" summary="$45^\circ$ na radiány, $\frac{\pi}{3} \text{rad}$ na stupně." >}}

Úhel $45^\circ$ odpovídá osmině plného úhlu, protože $\frac{360}{45} = 8$. Pokud $2\pi \text{rad}$ odpovídá celému oblouku, potom osmina z něj je $\frac{2\pi}{8} = \frac{\pi}{4} \text{rad}$, což je řešením.

Úhel $\frac{\pi}{3} \text{rad}$ odpovídá šestině celého oblouku, protože $\frac{2\pi}{\frac{\pi}{3}} = 6$. Pokud $360^\circ$ odpovídá plnému úhlu, potom šestina z něj je $\frac{360}{6} = 60^\circ$, což je řešením.

{{< /details>}}

## Sinus a cosinus

Jelikož se pohybujeme v kartézské soustavě souřadnic, každý bod v této soustavě, a tedy i náš bod $M$, má svoji $x$-ovou a $y$-ovou souřadnici. Zavedeme si proto dvě funkce, které nám dovolí se na tyto souřadnice dotazovat.

$$\sin{\theta} = y$$
$$\cos{\theta} = x$$

První funkci nazýváme **sinus**, druhou **cosinus**. Ptáme se: Jaká je $y$-ová souřadnice bodu daného úhlem $\theta$? Jaká je $x$-ová?

{{< details label="Vyřešte z hlavy" summary="$\sin{\theta}$, $\cos{\theta}$ pro $\theta = \frac{\pi}{2}; \frac{\pi}$" >}}
<!-- tady bude cvičení -->

{{< /details>}}

## Tangens

Kromě stupňové a obloukové míry existuje ještě jeden způsob, jak vyjádřit úhel. Představme si přímku danou předpisem $y = 3x + 2$. dosazováním zjistíme, že pokud se $x$ změní o jedna, potom se $y$ změní o tři:

| $x$ | $0$ | $1$ | $2$ | $3$ |
|-----|-----|-----|-----|-----|
| $y$ | $2$ | $5$ | $8$ | $11$ |

Sklon přímky můžeme vyjádřit právě pomocí této změny. Změnu funkční hodnoty za jednotku funkční proměnné nazýváme **směrnicí**. Její obecný předpis je následovný:

$$\frac{y}{x}$$

Víme, že $\sin{\theta}$ nám dává $y$-ový posun našeho bodu a $\cos{\theta} zase posun $x$-ový; do vztahu proto můžeme dosadit:

$$\frac{\sin{\theta}}{\cos{\theta}}$$

Tento zápis má tu výhodu, že nám dovoluje určit směrnici čistě v závislosti na úhlu $\theta$. Zavedeme si proto novou funkci, jež nazýváme **tangens**, která nám tuto směrnici vzhledem k \theta dává:

$$\tan{\theta} = \frac{\sin{\theta}}{\cos{\theta}}$$

{{< details label="Spočítejte" summary="směrnici funkce, o které víte, že $\f_x{0} = 2$ a $\f_x{3} = -4$" >}}

Ze zadání je vidět, že pokud se $x$ změní o tři, potom se $y$ změní o mínus šest. Změnu pro jednotku funkční proměnné spočítáme jako $\frac{-6}{3} = -2$, což je naše směrnice.

{{< /details>}}

{{< details label="Vyřešte z hlavy" summary="$\tan{\theta}$ pro $\theta = 45^\circ$." >}}
<!-- tady též cvičení -->

{{< /details>}}

## Pravoúhlý trojúhelník

Až doteď jsme budovali naši goniometrii jen v rámci jednotkové kružnice. Jednou z jejích nejčastějších aplikací jsou ale výpočty v pravoúhlém trojúhelníku. Naše dosavadní poznatky je proto potřeba patřičně zobecnit.
