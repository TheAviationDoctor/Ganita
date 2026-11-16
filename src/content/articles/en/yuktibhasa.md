---
slugKey: "yuktibhasa"
lang: "en"
title: "Yuktibhāṣā: making the reasons visible"
summary: "A Malayalam work that invites us to distinguish a rule, an example, and an explanation."
kind: "text"
period: "medieval"
people: ["Jyeṣṭhadeva", "Mādhava", "Nīlakaṇṭha"]
topics: ["analysis", "astronomy", "historiography"]
texts: ["Yuktibhāṣā", "Tantrasaṅgraha"]
related: ["madhava", "kuttaka", "transmission"]
lastRevised: "2026-11-16"
sources: [{"id": "iitbbs-yuktibhasa", "author": "Central Library, Indian Institute of Technology Bhubaneswar", "title": "Catalogue record: Ganita-yukti-bhasa (Rationales in Mathematical Astronomy), Vol. 1", "url": "https://koha.iitbbs.ac.in/cgi-bin/koha/opac-MARCdetail.pl?biblionumber=9797", "locator": "Summary and responsibility fields: text dated c.1530; original Malayalam text with critical English translation", "kind": "reference"}, {"id": "ramasubramanian-srinivas-2010", "author": "K. Ramasubramanian and M. D. Srinivas", "title": "Development of Calculus in India (2010)", "url": "https://iks.iitgn.ac.in/wp-content/uploads/2016/02/Development-of-Calculus-in-India-K-Ramasubramanian-MD-Srinivas-2010.pdf", "locator": "Part II, §8 (printed pp. 236–237) and §§13–15: series, correction terms, and convergence", "kind": "research"}, {"id": "sarma-yuktibhasa-2008", "author": "K. V. Sarma, K. Ramasubramanian, M. D. Srinivas, and M. S. Sriram", "title": "Gaṇita-Yukti-Bhāṣā of Jyeṣṭhadeva, Vol. 1: Mathematics (2008)", "url": "https://link.springer.com/book/10.1007/978-93-86279-36-1", "locator": "Publisher’s table of contents: English translation and explanatory notes; Circle and Circumference; Derivation of Sines", "kind": "primary"}]
---

## A text of rationales

Yuktibhāṣā is associated with Jyeṣṭhadeva and sixteenth-century Kerala. We use the approximate date c.1530, following the scholarly edition’s catalogue description, rather than presenting a precise year of composition as settled. Its Malayalam setting matters: mathematical explanation was not confined to Sanskrit. [1](#ref-1)

The text presents rationales for mathematical and astronomical procedures associated with Nīlakaṇṭha’s Tantrasaṅgraha, including earlier results. It is an important witness to the Kerala tradition, rather than a transcript of Mādhava teaching. [2](#ref-2)

The modern edition separates an English translation from explanatory notes. Its contents range from arithmetic to the circle and the derivation of sines. Keeping translation and commentary distinct helps readers recognise which explanation belongs to an old text and which belongs to its modern editors. [3](#ref-3)

## Three different kinds of mathematical statement

A **rule** tells a reader what to do. An **example** shows the rule operating on chosen numbers. A **rationale** explains why the operation should work beyond those numbers. Confusing the three makes both mathematics and its history harder to read.

For a modern illustration, take the rule “add successive powers of one half.” One example gives:

**1 + 1/2 + 1/4 + 1/8 = 15/8.**

That calculation is correct, but it does not explain the general behaviour. Let S be the sum of the first n terms, beginning with 1. Then:

**S = 1 + 1/2 + ⋯ + 1/2ⁿ⁻¹**

**S/2 = 1/2 + 1/4 + ⋯ + 1/2ⁿ**

Subtracting cancels all the overlapping terms. We obtain S/2 = 1 − 1/2ⁿ, so **S = 2 − 1/2ⁿ⁻¹**. For n = 4 this returns 15/8, but it now explains every positive integer n.

This is our pedagogical derivation in modern notation. It is not offered as a translation of a particular Yuktibhāṣā passage.

## From a finite identity to a limit

The formula also tells us exactly how far the sum lies below 2: the gap is 1/2ⁿ⁻¹. Each added term halves the gap. Given any positive tolerance, we can choose enough terms to make the gap smaller than that tolerance. That statement explains the limiting value without pretending that a finite sum ever equals 2.

Try n = 10. The sum is 2 − 1/512, or 1.998046875. With n = 11 the gap is 1/1024. The distinction between an exact finite identity and an infinite limiting statement is small on the page but large in the reasoning.

It is equally important historically. Rewriting an old argument with current symbols may clarify a mathematical relation, while concealing differences in vocabulary, purpose, or standards of explanation. A responsible edition allows a reader to move between the text and the reconstruction.

## How to read an explanatory text

When reading a translated mathematical passage, identify the starting assumptions, the permitted operations, and the point at which a conclusion becomes general. Mark any modern symbols added by an editor. Then ask whether a numerical example establishes a result or merely illustrates it.

Continue with [Mādhava’s approximations](/en/articles/madhava/) to see why an infinite series needs a finite error estimate, or [kuṭṭaka](/en/articles/kuttaka/) to examine an algorithm. [Mathematics across languages](/en/articles/transmission/) considers how textual evidence travels with procedures.
