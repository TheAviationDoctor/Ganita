---
slugKey: kuttaka
lang: en
title: "Kuṭṭaka: breaking down an integer equation"
summary: "Repeated division turns an apparently open-ended search into a calculation, with a modern worked example of the ‘pulverizer’ idea."
kind: idea
period: classical
people: ["Āryabhaṭa", "Bhāskara I", "Brahmagupta", "Bhāskara II"]
topics: [algebra, arithmetic, astronomy]
texts: ["Āryabhaṭīya", "Bījagaṇita"]
related: [aryabhata, bhaskara, brahmagupta]
lastRevised: '2026-11-16'
sources:
  - id: dutta-kuttaka-2002
    author: "Amartya Kumar Dutta"
    title: "Mathematics in Ancient India 2: Diophantine Equations — The Kuttaka (Resonance, October 2002, pp. 6–22)"
    url: "https://sanskrit.uohyd.ac.in/faculty/amba/PUBLICATIONS/Lectures/IIT-Ropar/Material/Diophantine/Diophantine%20Equations%20-%20AK%20Dutta.pdf"
    locator: "pp. 10–12: ‘Kuttaka Algorithm of Aryabhata’, introduction, formulation, and reductions"
    kind: research
  - id: kak-aryabhata-1986
    author: "Subhash Kak"
    title: "Computational Aspects of the Aryabhata Algorithm (Indian Journal of History of Science 21(1), 1986, pp. 62–71)"
    url: "https://www.ece.lsu.edu/kak/AryabhataAlgorithm.pdf"
    locator: "Opening discussion and algorithm for the linear indeterminate equation ax − by = c"
    kind: research
---

## An algorithm and its interpreters

The *Āryabhaṭīya*, composed in 499 CE, gives a procedure for integer problems in verses 32–33 of its mathematical section. Bhāskara I’s commentary supplies important explanations. Later writers developed variants of the procedure called *kuṭṭaka*, or pulverizer. Dutta describes its connection with astronomical calculations involving integer cycles. [1](#ref-1) Modern research also studies the algorithm in computational terms. [2](#ref-2)

The following calculation is a modern teaching reconstruction using repeated division and back-substitution. It is not a literal translation of [Āryabhaṭa’s](/en/articles/aryabhata/) verses or a presentation of every historical variant.

## A concrete question

Find integers x and y such that **26x + 5 = 7y**. Interpreted as a remainder problem, the number 26x + 5 must be divisible by 7. Trying x = 0, 1, 2, and so on would work eventually, but it would not explain how to tackle much larger coefficients.

First divide repeatedly:

- 26 = 3 × 7 + 5
- 7 = 1 × 5 + 2
- 5 = 2 × 2 + 1

Each new remainder is smaller. The final nonzero remainder, 1, is the greatest common divisor of 26 and 7. Now express that 1 using the original two numbers. Substituting upward gives

**1 = 5 − 2 × 2 = 5 − 2(7 − 5) = 3 × 5 − 2 × 7 = 3 × 26 − 11 × 7.**

The large-number problem has been reduced to a relation with a small remainder, then rebuilt. This downward-and-upward movement makes the name “pulverizer” memorable.

## From one solution to all integer solutions

Multiply the identity by −5:

**−5 = −15 × 26 + 55 × 7.**

Rearranging, **26(−15) + 5 = 7(−55)**. Thus x = −15 and y = −55 form a solution. To get positive values, increase x by 7 and y by 26 together. Each such change adds 182 to both sides. Three steps give **x = 6, y = 23**, and direct checking yields 156 + 5 = 161.

Every integer t therefore gives a solution

**x = 6 + 7t, y = 23 + 26t.**

Why are there no others? Subtract the equation for (6, 23) from the equation for any solution. Then 26(x − 6) = 7(y − 23). Since 26 and 7 share no factor, x − 6 must be divisible by 7, giving precisely the family above. If both unknowns must be positive, t must be a nonnegative integer.

## When a solution is impossible

Now try **6x + 3 = 10y**. The term 6x is even, so the left side is odd; the right side is even. There is no integer solution. More generally, the greatest common divisor of the two coefficients must divide the constant term. [1](#ref-1) Here the divisor is 2 and it does not divide 3.

This distinction between a rational answer and an integer answer is the heart of the subject. A fraction can solve an equation while failing to represent a whole number of cycles or objects. Compare [Brahmagupta](/en/articles/brahmagupta/) and [Bhāskara II](/en/articles/bhaskara/) for related algebraic questions. Keep the modern proof separate from the historical evidence for who used which procedure.
