---
slugKey: prosody
lang: en
title: "Prosody and counting: two different questions about rhythm"
summary: "Light and heavy syllables lead to powers of two, combinations, and a recurrence—but only after we specify exactly what is being counted."
kind: context
period: early
people: ["Piṅgala", "Halāyudha", "Hemacandra"]
topics: [combinatorics, arithmetic, historiography]
texts: ["Chandaḥśāstra"]
related: [ramanujan, lilavati, transmission]
lastRevised: '2026-11-16'
sources:
  - id: sridharan-prosody-2005
    author: "R. Sridharan"
    title: "Sanskrit Prosody, Piṅgala Sūtras and Binary Arithmetic, in Contributions to the History of Indian Mathematics (2005), pp. 33–62"
    url: "https://www.ms.uky.edu/~sohum/ma330/files/chennai_talks/Emch_Sridharan_Srinivas%20-%20Contributions%20ot%20the%20History%20of%20Indian%20Mathematics%20(2005).pdf"
    locator: "Sections 5–8 on Piṅgala and enumeration; section 9 on later prosodists and mātrā metres"
    kind: research
  - id: montelle-combinatorics-2026
    author: "Clemency Montelle"
    title: "Counting on the Past: The Birth of Combinatorics in Classical India (ICM 2026 Proceedings, volume 7, pp. 609–625)"
    url: "https://epubs.siam.org/doi/full/10.1137/25M180634X"
    locator: "Abstract, introduction, and section 5: prosodic origins and the uncertain circulation of combinatorial techniques"
    kind: research
---

## Mathematics from the study of verse

Indian prosody studies patterns of light (*laghu*) and heavy (*guru*) syllables. Piṅgala’s *Chandaḥśāstra* and later commentaries contain procedures for enumerating such patterns. Piṅgala’s precise date is uncertain; the surviving interpretive tradition also includes much later authors, including Halāyudha and Hemacandra. Their contributions must not all be attributed to Piṅgala. [1](#ref-1) Research traces the movement of combinatorial techniques between prosody and mathematical sciences while identifying gaps in our knowledge of that movement. [2](#ref-2)

The examples below are modern mathematical models. They do not scan an actual poem or reproduce the historical ordering of a *prastāra*, an enumeration of patterns. Their purpose is to separate two questions that are easily confused.

## Question one: fix the number of syllables

Use L for light and G for heavy. If there are three syllable positions and either choice is permitted in every position, there are **2 × 2 × 2 = 8** patterns:

| Starting with L | Starting with G |
| --- | --- |
| LLL | GLL |
| LLG | GLG |
| LGL | GGL |
| LGG | GGG |

For n positions the count is **2ⁿ**. We may encode L and G with two symbols, but our choice of symbols and ordering is modern. Recognising a binary structure does not establish that a historical author used every concept of modern binary arithmetic.

If exactly one of the three syllables must be heavy, only GLL, LGL, and LLG remain. If exactly two must be heavy, there are again three choices. The counts by number of heavy syllables are therefore **1, 3, 3, 1**. They sum to eight, as they must, because each pattern appears in exactly one category.

## Question two: fix the total duration

Now assign one time unit to L and two to G. Ask for every ordered pattern with total duration four. The five possibilities are **LLLL, LLG, LGL, GLL, GG**. The number of syllables varies, so the earlier power-of-two calculation does not apply.

Let C(n) count patterns of duration n. A pattern ends either in L or in G. Removing its last syllable leaves a pattern of duration n − 1 or n − 2, respectively. These two cases are disjoint and exhaustive, so

**C(n) = C(n − 1) + C(n − 2).**

There is one empty pattern, giving C(0) = 1, and one pattern of duration one, giving C(1) = 1. The sequence begins **1, 1, 2, 3, 5, 8, 13**. The empty pattern is a counting convention that makes the recurrence work at n = 2; it is not an audible syllable.

## What the model leaves out

Real metres may constrain the number of syllables, their weights, their positions, or combinations of these. Our unrestricted model therefore counts candidate strings, not necessarily recognised or acceptable poetic metres. Before applying a formula, specify its objects and its restrictions.

The same care matters historically. A later commentator’s explicit algorithm can clarify an earlier terse text without proving that every detail was already present in the earlier author’s mind. [1](#ref-1) And similar mathematics in different places does not, on its own, establish transmission. See [the circulation of mathematics](/en/articles/transmission/).

Compare [Ramanujan’s partitions](/en/articles/ramanujan/): order matters for our rhythmic patterns, while a partition ignores the order of its summands. Changing that one condition changes the count.
