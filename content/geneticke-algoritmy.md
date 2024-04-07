---
title: Genetické algoritmy
date: 2024-03-13T13:36:15+01:00
description: ""
keywords: []
draft: true
---

## Motivace

<!-- Let us begin with something that will seem unrelated at first -- airplanes. It took us a long time to figure them out. It is not at all obvious how to construct a vehicle that can maintain itself in the air. Yet, over the years, through trial and error, science, and even sheer luck, we have slowly reached the conclusion. We can confidently say: this is the best shape for flight. -->
Začněme toto pojednání něčím, co se možná na první pohled bude jevit jako nesouvisející: letadly. Na to, jak taková letadla konstruovat, jsme přišli teprve nedávno. Rozhodně není zřejmé, jak sestrojit vozidlo, které dokáže sebe samo po delší dobu udržet ve vzduchu. Nejeden lidský život byl proto v minulosti zasvěcen hledání dokonalého návrhu. Sto let pokusů a omylů, vědeckého bádání a šťastných náhod ale nese své ovoce; můžeme ukázat na dnešní letadla a hrdě prohlásit: *toto* je dokonalý návrh létajícího stroje.

![Silueta letadla](plane.webp)

<!-- What's interesting is that someone has also reached the same conclusion: birds. Anatomically, birds and airplanes are equivalent. Yet there is a fundamental difference between them. We know, how we invented airplanes (trial and error, science, luck); but how did nature do it? After all, it is not a sentient being. It cannot reason, and it is certainly blind. Yet birds are equipped with a body that is very well fit for flying. Nature therefore has to have other tools; otherwise it coundn't have solved the problem of flight. -->
Zajímavé je, že někdo jiný došel k úplně stejnému závěru: ptáci. Z anatomického hlediska jsou ptáci i letadla totožní. Přesto mezi nimi existuje zásadní rozdíl. Víme, jak jsme letadla vynalezli my (pokus-omyl, věda, štěstí); jak to ale udělala příroda? Nemá přece ani vědomí, ani rozum; dá se říci, že je svým způsobem &bdquo;slepá"&ldquo;. Přesto jsou ptáci vybaveni tělem, které je velmi dobře přizpůsobeno letu. Příroda tedy musí nutně mít jiné nástroje pro řešení problémů.

![Ilustrace podobnosti letadel a ptáků](planes_birds.webp)

<!-- The tool nature uses for solving problems is called evolution. We are interested in understanding it because there is something in it for us -- if we understand evolution, then we can possibly use it for solving *our own problems*. -->
Hlavním nástrojem přírody je **evoluce** a toto pojednání se venuje právě jí. Chceme pochopit, jak funguje, protože pro nás může být užitečná -- pokud dokážeme evoluci patřičně zobecnit, potom ji můžeme využít pro řešení *našich vlastních problémů*.

## Mechanisms

<!-- Let us imagine a population of birds. We can say that there are always going to be differences among individual members -- some birds are just going to be stronger, faster, and healthier than others, generally better at survival. For illustration purposes, let's exagerate the differences and say that one third of the population was born with just one wing. This makes the third obviously less fit than the rest. What happens to these birds? Without a wing, they are not likely to survive for long, and if they will, they certainly will not reproduce. Either way, the consequence of their disability is that they *lose influence over the next generation* -- their genes will not propagate. Conversely, fittest birds are most likely to attract mates and reproduce, meaning they are to have a significant influence on the children -- they are going to be carrying their genes. The children are shaped after the fittest parents, and the fittest children will shape their grandchildren and so on. This process is the first mechanism of evolution: **selection**. -->

<!-- Let's abandon flying creatures for a second and observe organisms living at a much smaller scale: bacteria. Members of bacteria population also undergo selection. This mode of evolution has just one problem. Bacteria reproduce by creating replicas of itself. With our current state of evolution, the children would be identical to their parents. Even with the fittest bacteria reproducing the fasters and influencing the population, hidden weaknesses of the parents are also present in the children. Exploiting this weakness leads to the death of the whole family. These huge wipeouts are terminal for populations like these. Small, random noise is therefore introduced into the childrens genotypes, which prevents them from all sharing the same weaknesses. These occasional random changes are called **mutations** and are a vital part of the evolutionary process, not just in bacteria. The mutation rate has to be properly calibrated -- too small means practically losing it's advantages, while too big leads to big number of negative mutations, which retards and mutates the population. -->

<!-- But most life on earth does not reproduce by cloning. In the animal kingdom, every child has two parents -- one mother, one father. The childrens genes are donated from each parent roughly equally. This means that the child has an equal change of receiving a gene from either of the parents. This is advantageous become bad genes from one parent can be replaced by good genes from the other. We call this process **crossover**. -->

## Aplications

<!-- A thief breaks into a house and is about to steal himself some goods. He wants to maximize his gains, but can only carry a certain weight. Which items should the thief steal from the house? This riddle is known as **the knapsack problem** and the solution is not at all obvious. There is no nice formula that we can use. Looking at all possible answers and picking the best one is not a solution either -- if we consider that each item can either be stolen or not stolen, for $n$ items we are looking at $2_n$ possible solutions. This problem gets thus very computationally intensive for large numbers of items; for just twenty items, we are looking at over a milion possible soutions! -->

<!-- Let's think about how we can use our newly gained knowledge to transform this riddle into an evolutionary problem. As mentioned, each item can be either stolen or not stolen; we can therefore represent possible solutions using binary vectors. Each bit corresponds to a specific item and its value tells us whether the thief will steal it or not. -->

$$\alpha = \begin{bmatrix} \alpha_1 & \alpha_2 & \ldots & \alpha_n \end{bmatrix} \in \\{0, 1\\}^n$$

This is essentially equivalent to encoding information about a person using their DNA. Hence we call this representation a **genotype**.

<!-- A genotype is used to "build" the particular creature, a particular person, or in our case, a particular solution. We call this build a **fenotype**. To implement this, we define a **gamma converter**. It creates a fenotype out of a genotype. For our knapsack problem, we would filter out the items based on the bit values in the genotype. If it is a one, include it in the fenotype. The filtered lsit of items is then returned by the function. -->

```
def gamma(genotype: list, items: dict) -> dict:
    filtered_keys = [i for i, g in zip(items, genotype) if g]
    filtered_items = {key: items[key] for key in filtered_keys}
    return filtered_items
```

<!-- Now that we are able to create these fenotypes, we need a way of evaulating them. In other words, we need to determine how well they solve our problem. We call this a **fitness function**. As said, our goal is to maximize the gains while not exceeding a weight limit. We can implement the following algorithm: -->

```
def fitness(fenotype: dict) -> int:
    total_weight = sum([item["weight"] for item in fenotype.values()])
    if total_weight > MAX_WEIGHT:
        return 0

    total_value = sum([item["value"] for item in fenotype.values()])
    return total_value
```

We will use these scores generated by our fitness function to select solutions for propagation. There are numerous ways to do this, some of which includes:

- **Roulette**: Solutions are selected for propagation randomly but with respect to their relative success (better solutions are more likely to be selected)
- **Elitism**: Only a fixed number of best solutions is selected for propagation.
- **Arena**: Two or more solutions are randomly selected from the population. The best solution out of the group is the winner and gets to propagate.

Elitism is specific because it does not allow propagation of less fit solutions. Roulette and arena on the other hand give that option. For our case of thief, we are going to use elitism as a selection mechanism.

After we select the parents of the next generation, we want them to mate, in other words, to do a crossover. This can again be done in multiple ways:

<!-- make sure the names are correct -->
- **One-Point**: A random split point is picked along the genotype. The parents then get split and exchange parts. The newly created genotypes are the children.
- **Multi-Point**: Same as One-Point, but two or more split points are selected.
- **Uniform**: Produces only one child. Each bit in a genotype is equally likelyy to be inherited from either parents.

In our case, uniform could produce children that are very unfit. We therefore select a one-point crossover method.

```
kod pro krizeni
```

We put it all together, we get the following:

```
main
```

<!-- komentar ke kodu -->

<!-- MOZNA O HODNE MENE TECHNICKE, SPISE POVIDANI, OBRAZKY MISTO KODU

The entire script is to be found HERE. <!-- link -->

## More applications

The knapsack problem is an interesting omptimization problem. It is not useful tho. Here are therefore some more practical examples of using genetic algorithms for solving problems:

-
