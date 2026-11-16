---
slugKey: sulbasutras
lang: en
title: "Śulbasūtras: geometry with a cord"
summary: "How altar construction made area, diagonals, and approximation into practical mathematical questions."
kind: text
period: early
people: [Baudhāyana, Āpastamba]
topics: [geometry, historiography]
texts: [Śulbasūtras]
related: [aryabhata, zero, lilavati]
lastRevised: '2026-11-16'
sources:
  - id: mactutor-sulbasutras
    author: "J. J. O’Connor and E. F. Robertson"
    title: "The Indian Sulbasutras — MacTutor, University of St Andrews"
    url: "https://mathshistory.st-andrews.ac.uk/HistTopics/Indian_sulbasutras/"
    locator: "Discussion of altar construction, combining squares, and exact versus approximate constructions"
    kind: reference
  - id: price-sulba-geometry
    author: "John F. Price"
    title: "Applied Geometry of the Sulba Sutras"
    url: "https://sanskrit.uohyd.ac.in/faculty/amba/PUBLICATIONS/Lectures/UoHyd/Material/SulbaSutrasPrice.pdf"
    locator: "Section 3.1, ‘The square root of two’ (printed p. 51); Baudhāyana I.61 in this numbering"
    kind: research
---

## A mathematical problem inside a ritual practice

The Śulbasūtras are Sanskrit rules for constructing sacrificial altars, associated with names including Baudhāyana and Āpastamba. They belong broadly to the first millennium BCE; precise dates for their composition are uncertain. Their geometry concerns measured lengths and transformations of area. A cord makes a straight line, a radius, or a diagonal tangible. These are construction texts, and a surviving rule is not automatically a surviving proof. [1](#ref-1)

The setting matters. A question such as “make this shape twice as large” is ambiguous until we specify whether “large” means length or area. Doubling a square’s side quadruples its area. Producing twice the area requires a different operation. This distinction gives us a useful way into the mathematical reasoning, without pretending that an ancient manual used our symbols or classroom vocabulary.

## A diagonal that doubles an area

The following is a modern explanatory reconstruction. Begin with a square of side 1, and draw its diagonal. The diagonal has length √2. A new square whose side is that diagonal therefore has area (√2)² = 2. A geometric object has supplied the length needed for an area transformation.

We can check the relationship without measuring a decimal. Divide the original square along a diagonal into two congruent right triangles. Four such triangles can be arranged around a central point so that their hypotenuses form the boundary of a larger square. Each triangle has area 1/2, so the new square has area 4 × 1/2 = 2. Its side is the diagonal we started with. This is a present-day area argument, not a quotation or an attributed ancient proof.

Combining two unequal squares leads to the same kind of question. If their sides are 3 and 4, the desired area is 9 + 16 = 25. A right triangle with perpendicular sides 3 and 4 supplies a hypotenuse of 5. The important operation is adding **areas**, not adding side lengths. Cord constructions for combining squares are discussed in the source overview. [1](#ref-1)

## Exact relationships, approximate measurements

A rule associated with the Baudhāyana text gives the following approximation, written here in modern notation: [2](#ref-2)

**√2 ≈ 1 + 1/3 + 1/(3 × 4) − 1/(3 × 4 × 34) = 577/408.**

To assess it, we can do an exact integer calculation: 577² − 2 × 408² = 1. Consequently, (577/408)² is 2 + 1/166464, slightly greater than 2. The fraction therefore lies above √2. Its decimal value is approximately 1.414215686, compared with √2 ≈ 1.414213562. The absolute error is about 0.000002124.

This calculation tells us about the approximation, but not how its author discovered it. Several procedures can produce the same fraction. Reconstructing a plausible procedure and documenting the procedure historically are different tasks. Nor does a good approximation by itself establish that its author had proved the irrationality of √2.

## Read the practice before claiming priority

These texts make a rich subject for studying construction, accuracy, and the relationship between a practical instruction and an explanation. We avoid attaching a single exact date to a layered textual tradition or using a modern theorem’s name to settle who first knew every version of it.

Continue with [Āryabhaṭa’s numerical astronomy](/en/articles/aryabhata/) for another setting in which geometry supports calculation, or compare the problem-based teaching of the [Līlāvatī](/en/articles/lilavati/).
