---
slugKey: bhaskara
lang: en
title: "Bhāskara II: equations, surds, and mathematical astronomy"
summary: "Read Bhāskara II through two algebraic examples, and distinguish his documented work from modern claims made on his behalf."
kind: person
period: classical
people: ["Bhāskara II", "Brahmagupta"]
topics: [algebra, arithmetic, astronomy]
texts: ["Līlāvatī", "Bījagaṇita", "Siddhāntaśiromaṇi"]
related: [lilavati, brahmagupta, kuttaka]
lastRevised: '2026-11-16'
sources:
  - id: mactutor-bhaskara-ii
    author: "J. J. O’Connor and E. F. Robertson"
    title: "Bhaskara II — MacTutor History of Mathematics"
    url: "https://mathshistory.st-andrews.ac.uk/Biographies/Bhaskara_II/"
    locator: "Biography: names, dates, works, and discussion of the Līlāvatī legend"
    kind: reference
  - id: colebrooke-1817
    author: "Brahmagupta and Bhāskara II; translated by Henry Thomas Colebrooke"
    title: "Algebra, with Arithmetic and Mensuration (1817)"
    url: "https://archive.org/stream/algebrawitharith00brahuoft/algebrawitharith00brahuoft_djvu.txt"
    locator: "Dissertation, pp. ii–iii; Bījagaṇita, chapter I, section V, and chapter III, sections I–II"
    kind: primary
---

## A name and a body of work

Bhāskara II, born in 1114, is also called Bhāskarācārya. The numeral distinguishes him from the earlier Bhāskara I. His writings include the arithmetic *Līlāvatī* and algebraic *Bījagaṇita*. These belong to the mathematical and astronomical programme associated with his *Siddhāntaśiromaṇi*, completed in 1150. [1](#ref-1) Colebrooke’s 1817 translation makes the arithmetic and algebra accessible in English, although its terminology and historical commentary require critical reading. [2](#ref-2)

The most useful introduction is to work through a problem. Two examples below are modern teaching reconstructions, using present-day notation. They illustrate kinds of algebra treated in the *Bījagaṇita*; they are not quotations or transcriptions of Bhāskara’s calculations. [2](#ref-2)

## Finding another integer solution

Suppose we want whole numbers satisfying **x² − 2y² = 1**. The small pair x = 3, y = 2 works, because 9 − 8 = 1. A search through larger numbers would eventually find more pairs, but a transformation is more informative.

Starting with any solution, define **X = 3x + 4y** and **Y = 2x + 3y**. Expand the difference:

**X² − 2Y² = (9x² + 24xy + 16y²) − (8x² + 24xy + 18y²) = x² − 2y².**

The middle terms cancel. The new pair therefore solves the same equation. Beginning with (3, 2), we obtain (17, 12), then (99, 70). Direct checking gives 289 − 288 = 1 and 9801 − 9800 = 1.

This explains why a rule can outperform trial and error: it preserves an invariant, the value of x² − 2y². It also exposes the limits of our example. We have generated a sequence of solutions for one coefficient; we have not proved that we have found every positive solution, or explained a procedure for every nonsquare coefficient. Bhāskara’s treatment of the affected square and cyclic method addresses a wider setting. [2](#ref-2) For the simpler problem of a linear equation in integers, see [the kuṭṭaka](/en/articles/kuttaka/).

## Taking apart a nested square root

Consider **√(5 + 2√6)**. Look for an answer of the form √a + √b. Its square is a + b + 2√(ab), so we need a + b = 5 and ab = 6. Taking a = 2 and b = 3 gives

**√(5 + 2√6) = √2 + √3.**

Checking by squaring is essential. Because both expressions are positive, matching their squares establishes equality. Without that sign condition, squaring could hide a wrong choice of root. This is a useful reading habit for historical algorithms: distinguish the operation that produces a candidate from the argument that validates it.

## Reading without retrospective labels

The arithmetic in these examples is exact, but the notation is modern. A compact symbolic identity is our explanation, not evidence that a medieval author wrote it in this form. Likewise, calling a historical technique “calculus” requires more argument than spotting a familiar-looking expression.

Read [Līlāvatī](/en/articles/lilavati/) for the relationship between a rule, a word problem, and a learner’s interpretation. Read [Brahmagupta](/en/articles/brahmagupta/) for an earlier mathematical setting. Comparing specific procedures gives a richer history than assigning a single modern title to an entire body of work.
