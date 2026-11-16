---
slugKey: brahmagupta
lang: en
title: "Brahmagupta: arithmetic and its conditions"
summary: "Read a seventh-century author through signed numbers, a quadrilateral formula, and the importance of stating assumptions."
kind: person
period: classical
people: [Brahmagupta]
topics: [arithmetic, algebra, geometry, astronomy]
texts: [Brāhmasphuṭasiddhānta, Khaṇḍakhādyaka]
related: [zero, kuttaka, bhaskara]
lastRevised: '2026-11-16'
sources:
  - id: mactutor-brahmagupta
    author: "J. J. O’Connor and E. F. Robertson"
    title: "Brahmagupta — MacTutor, University of St Andrews"
    url: "https://mathshistory.st-andrews.ac.uk/Biographies/Brahmagupta/"
    locator: "Opening biography: Brāhmasphuṭasiddhānta (628), Bhillamāla, and Khaṇḍakhādyaka (665)"
    kind: reference
  - id: gretil-brahmasphutasiddhanta
    author: "Brahmagupta; S. Dvivedin edition (1902), electronic text by Takao Hayashi"
    title: "Brāhmasphuṭasiddhānta — GRETIL, SUB Göttingen"
    url: "https://gretil.sub.uni-goettingen.de/gretil/corpustei/transformations/html/sa_brahmagupta-brAhmasphuTasiddhAnta.htm"
    locator: "XII.21 (area rule); XVIII.30–35 (positive, negative, and zero quantities); XVIII.64–65 (composition)"
    kind: primary
  - id: strick-brahmagupta
    author: "Heinz Klaus Strick"
    title: "Brahmagupta — MacTutor, University of St Andrews"
    url: "https://mathshistory.st-andrews.ac.uk/Strick/brahmagupta.pdf"
    locator: "Printed p. 2: cyclic-quadrilateral area formula and the unstated restriction in the text"
    kind: reference
---

## A work in mathematical astronomy

Brahmagupta composed the *Brāhmasphuṭasiddhānta* in 628 CE at Bhillamāla, now Bhinmal. His later *Khaṇḍakhādyaka* dates to 665. Both belong to mathematical astronomy, rather than to a modern division separating “pure mathematics” from calculations about the sky. [1](#ref-1)

The mathematical chapters range across arithmetic, geometry, and equations. The surviving Sanskrit text lets a reader locate an area rule in XII.21 and rules for signed and zero quantities in XVIII.30–35. Such locators matter: an attribution becomes checkable when we can identify the passage, rather than merely repeat a famous name. [2](#ref-2)

## A formula with a geometric condition

In modern notation the area rule associated with Brahmagupta is

**K = √((s − a)(s − b)(s − c)(s − d)), where s = (a + b + c + d)/2.**

Here a, b, c, and d are the side lengths and K is the area. It is valid for a **cyclic quadrilateral**: all four vertices must lie on one circle. The original rule does not explicitly state that restriction, which creates a historical question about its intended scope. The modern mathematical condition itself is clear. [3](#ref-3)

Take a rectangle with sides 5 and 12 as an original worked example. A rectangle is cyclic. Its semiperimeter is s = 17, so the formula gives √(12 × 5 × 12 × 5) = 60 square units, agreeing with 5 × 12. The agreement is a check in one valid case, not a proof for all cyclic quadrilaterals.

To see why the condition matters, compare two quadrilaterals whose sides are all 2. A square has area 4. A rhombus with an interior angle of 30 degrees has area 2 × 2 × sin 30° = 2. Putting four side lengths of 2 into the formula produces 4 in both cases. Thus side lengths alone do not determine an arbitrary quadrilateral’s area. The second shape is not cyclic, and applying the formula to it is a mistake. This counterexample is a modern explanation, not a problem taken from the text.

## Composition as a way to make new solutions

Brahmagupta’s treatment of quadratic indeterminate problems includes composition rules. [2](#ref-2) A useful modern identity shows the idea:

**(x² − Ny²)(u² − Nv²) = (xu + Nyv)² − N(xv + yu)².**

The identity follows by expanding both sides and cancelling the two opposite cross terms. If each expression on the left equals 1, the new expression on the right also equals 1. With N = 2, start from 3² − 2 × 2² = 1 and use the same pair twice. We obtain x′ = 3 × 3 + 2 × 2 × 2 = 17 and y′ = 3 × 2 + 2 × 3 = 12. Direct substitution gives 17² − 2 × 12² = 289 − 288 = 1.

This example explains the mathematical power of composition: a known solution can generate another. Our symbolic derivation does not claim to reproduce the author’s notation or recover his route to discovery.

## Read achievement together with limitation

A historical formula deserves careful attention both for what it accomplishes and for the assumptions under which we can use it. The same standard applies to arithmetic: rules involving zero must be read without silently replacing difficult historical statements by modern ones.

The companion article on [zero and place value](/en/articles/zero/) examines that distinction. For another kind of integer equation, see the [kuṭṭaka](/en/articles/kuttaka/); for later algebraic work, continue to [Bhāskara II](/en/articles/bhaskara/).
