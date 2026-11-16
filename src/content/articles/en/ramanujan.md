---
slugKey: "ramanujan"
lang: "en"
title: "Srinivasa Ramanujan: patterns in partitions"
summary: "A route into Ramanujan’s mathematics through counting, congruences, and the difference between evidence and proof."
kind: "person"
period: "modern"
people: ["Srinivasa Ramanujan", "G. H. Hardy"]
topics: ["combinatorics", "analysis"]
texts: ["Some properties of p(n)", "Asymptotic formulæ in combinatory analysis"]
related: ["prosody", "madhava", "transmission"]
lastRevised: "2026-11-16"
sources: [{"id": "royal-society-ramanujan-2018", "author": "Royal Society", "title": "Revisiting Ramanujan (1 October 2018)", "url": "https://royalsociety.org/blog/2018/10/revisiting-ramanujan/", "locator": "Historical account of Indian Mathematical Society publications, Hardy correspondence, and election on 2 May 1918", "kind": "reference"}, {"id": "ramanujan-1919-partitions", "author": "Srinivasa Ramanujan", "title": "Some properties of p(n), the number of partitions of n (1919)", "url": "https://ramanujan.sirinudi.org/Volumes/published/ram25.html", "locator": "Proceedings of the Cambridge Philosophical Society 19, pp. 207–210; §1 and §2, congruence (1)", "kind": "primary"}, {"id": "hardy-ramanujan-1918", "author": "G. H. Hardy and Srinivasa Ramanujan", "title": "Asymptotic formulæ in combinatory analysis (1918)", "url": "https://ramanujan.sirinudi.org/Volumes/published/ram36.html", "locator": "Proceedings of the London Mathematical Society, series 2, 17, pp. 75–115; §1.1, equation (1.11)", "kind": "primary"}]
---

## A career already under way in India

Srinivasa Ramanujan (1887–1920) published mathematical work in India before his collaboration with G. H. Hardy. His correspondence with Hardy began in 1913, and he later worked at Cambridge. The Royal Society elected him a Fellow on 2 May 1918. This chronology helps place collaboration within an existing career rather than treating recognition abroad as its beginning. [1](#ref-1)

His 1919 partition paper moves from numerical observations to conjectures and proofs. We focus on one proved congruence; the paper also contains conjectural assertions. [2](#ref-2)

## What does a partition count?

A partition of a positive integer is a way of writing it as a sum of positive integers, ignoring order. The five partitions of 4 are:

- 4
- 3 + 1
- 2 + 2
- 2 + 1 + 1
- 1 + 1 + 1 + 1

Thus p(4) = 5. We do not count 1 + 3 again, because it differs from 3 + 1 only in order. By convention p(0) = 1: there is one empty partition. That convention makes recursive counting work cleanly.

Here is an original way to organise the calculation. First permit only parts of size 1. There is exactly one way to form each total: use enough ones. Then allow parts of size 2, then 3, and so on. At each stage, separate partitions using the newly allowed part from those avoiding it. Advancing through totals in increasing order lets the same part be used repeatedly. This counts each unordered partition once, instead of listing every ordering of a sum.

## A striking divisibility pattern

Ramanujan proved that **p(5m + 4) is divisible by 5** for every non-negative integer m. [2](#ref-2) Small cases are easy to check:

| m | 5m + 4 | p(5m + 4) |
| --- | --- | --- |
| 0 | 4 | 5 |
| 1 | 9 | 30 |
| 2 | 14 | 135 |
| 3 | 19 | 490 |

All four values are multiples of five. The table is evidence and a useful check on a counting program. It is not a proof for every m: infinitely many inputs remain unchecked.

To see the distinction, imagine a rule that matched these four rows but changed at m = 4. The displayed data could not exclude it. A proof needs structure that controls the whole sequence. Ramanujan’s proof uses infinite-product identities; our counting illustration does not reproduce it. [2](#ref-2)

## From counting to analysis

Hardy and Ramanujan’s 1918 joint paper relates p(n) to a generating function, an infinite product whose coefficients encode the partition counts. [3](#ref-3) For a simple modern explanation, the factor 1 + x² + x⁴ + ⋯ records the choice of zero, one, two, or more parts of size 2. Multiplying analogous factors for every part size collects all choices. The coefficient of xⁿ then counts those with total n.

This gives a bridge between a discrete counting question and analytic methods. Compare the different counting problem in [prosody](/en/articles/prosody/), or the role of finite approximations in [Mādhava’s series](/en/articles/madhava/). Each connection illuminates a mathematical question without requiring a claim of direct historical influence.
