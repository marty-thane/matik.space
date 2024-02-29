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

Mezi úhlem ve stupních a délkou výseče existuje lineární závislost ($180^\circ = \pi$, $90^\circ = \frac{pi}{2} atd.). nic nám proto nebrání vyjádřit úhel přímo pomocí této délky. Pro takového vyjádření zavádíme pojem **oblouková míra**, jejíž jednotkou jsou **radiány**.

Při převodu mezi obloukovou a stupňovou mírou postupujeme tak, že si nejdříve průvodič v kružnici &ldquo;nastavíme&ldquo; na daný úhel a poté odvozujeme vyjádření. Vycházíme přitom stále ze zmíněného vztahu.

{{< details label="Převeď" summary="$45^\circ$ na radiány, $\pi / 3 \text{rad}$ na stupně." >}}

Úhel $45^\circ$ odpovídá osmině plného úhlu, protože $\frac{360}{45} = 8$. Pokud $2\pi \text{rad}$ odpovídá celému oblouku, potom osmina z něj je $\frac{2\pi}{8} = \frac{\pi}{4} \text{rad}$, což je řešením.

Úhel $\pi / 3 \text{rad}$ odpovídá šestině celého oblouku, protože $\frac{2\pi}{\frac{\pi}{3}} = 6$. Pokud $360^\circ$ odpovídá plnému úhlu, potom šestina z něj je $\frac{360}{6} = 60^\circ$, což je řešením.

{{< /details>}}

## Sinus a cosinus

Jelikož se pohybujeme v kartézské soustavě souřadnic, každý bod v této soustavě, a tedy i náš bod $M$, má svoji $x$-ovou a $y$-ovou souřadnici. Zavedeme si proto dvě funkce, které nám dovolí se na tyto souřadnice dotazovat.

První funkcí je **sinus**. Ptáme se: Jaká je $y$-ová souřadnice bodu daného úhlem $\theta$?

$$\sin{\theta} = y$$

Druhou funkcí je **cosinus**. Obdobně: Jaká je $x$-ová souřadnice bodu daného úhlem $\theta$?

$$\cos{\theta} = x$$

Obě funkce jsou omezené na interval $<-1; 1>$ (bod $M$ se nemůže naskytnout mimo kružnici) a periodické (při zvětšování $\theta$ bod $M$ &bdquo;obchází&ldquo; kružnici kolem dokola).

<!-- tady bude cvicční -->
