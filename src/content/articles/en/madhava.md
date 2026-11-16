---
slugKey: "madhava"
lang: "en"
title: "Mādhava and the art of approximation"
summary: "Infinite series, finite calculations, and the later texts that preserve Mādhava’s mathematical work."
kind: "person"
period: "medieval"
people: ["Mādhava", "Nīlakaṇṭha", "Jyeṣṭhadeva"]
topics: ["analysis", "astronomy"]
texts: ["Yuktibhāṣā", "Tantrasaṅgraha"]
related: ["yuktibhasa", "aryabhata", "ramanujan"]
lastRevised: "2026-11-16"
sources: [{"id": "mactutor-madhava", "author": "J. J. O’Connor and E. F. Robertson", "title": "Madhava of Sangamagrama — MacTutor History of Mathematics", "url": "https://mathshistory.st-andrews.ac.uk/Biographies/Madhava/", "locator": "Biography: surviving works, later attributions, and arctangent series", "kind": "reference"}, {"id": "ramasubramanian-srinivas-2010", "author": "K. Ramasubramanian and M. D. Srinivas", "title": "Development of Calculus in India (2010)", "url": "https://iks.iitgn.ac.in/wp-content/uploads/2016/02/Development-of-Calculus-in-India-K-Ramasubramanian-MD-Srinivas-2010.pdf", "locator": "Part II, §8 (printed pp. 236–237) and §§13–15: series, correction terms, and convergence", "kind": "research"}]
---

## A mathematician known through a tradition

Mādhava worked in Kerala around the turn of the fifteenth century. His life dates are approximate. Many of the series results associated with him survive through later mathematicians’ accounts rather than his own surviving mathematical treatises. Attribution therefore depends on reading a tradition of texts, not a single original notebook. [1](#ref-1)

Later Kerala works discuss infinite series for circular functions and end corrections that improve finite approximations. [2](#ref-2) These achievements do not by themselves establish a general modern calculus or transmission to Europe.

## An infinite expression, a finite task

Consider the following series in modern notation:

**π / 4 = 1 − 1/3 + 1/5 − 1/7 + ⋯** [1](#ref-1)

An infinite list cannot be added one term at a time to completion. A calculator must stop. Let Sₙ mean the sum of the first n terms. Multiplying Sₙ by four gives a usable approximation to π, but how usable?

Here is an original calculation, using the historical series rather than reproducing a manuscript layout:

| Terms n | Approximation 4Sₙ | Position relative to π |
| --- | --- | --- |
| 1 | 4.000000 | above |
| 2 | 2.666667 | below |
| 3 | 3.466667 | above |
| 4 | 2.895238 | below |

Each new term crosses to the other side. The jump shrinks, but slowly: after four terms the error is still about 0.246. A beautiful formula need not be an efficient numerical recipe.

## Bounding the error

For this decreasing alternating series, the omitted tail has absolute size no larger than the next term. Thus the error in 4Sₙ is at most **4/(2n + 1)**. This is a modern explanation of the estimate, not a quotation from Mādhava.

Why does it work? Pair each positive tail term with the smaller negative term following it. Each pair is positive. Pair from the other end, beginning after the first omitted term, and the tail cannot exceed that first term. The two groupings trap the true value between consecutive partial sums.

This bound also exposes the cost of accuracy. To guarantee an error below 0.001 using this estimate alone, n must be at least 2,000. An error bound is more informative than a long display of digits: it says how much trust a finite calculation earns.

The Kerala discussions of correction terms address precisely the problem of making truncation more effective. [2](#ref-2) A corrected approximation and a raw partial sum should always be labelled separately.

## Reading achievement without a race

Three questions help organise the evidence: what result is stated, what reasoning is preserved, and what later text attributes it to whom? These questions can have different answers. A modern derivation explains why a formula works; it cannot by itself tell us how an earlier mathematician discovered it.

Read [Yuktibhāṣā](/en/articles/yuktibhasa/) for the role of explanations, and [Āryabhaṭa](/en/articles/aryabhata/) for the older relationship between astronomy and computation. [Ramanujan’s partition work](/en/articles/ramanujan/) offers another example of numerical patterns leading to deeper mathematical questions.
