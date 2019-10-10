# Notes on grading

See question 4 to adjust your score.

## Question 1
- This was asking for a count, not Big O. I gave 1 point for getting big O each and took off at most one point for the whole question if you were imprecise.

## Question 2
- You need to show the C and the k (or N).
- C must be greater than 0

## Question 3
- All or nothing

## Question 4
- If you believe I was wrong, please come have a private conversation about your reasoning
- I was not happy with the size of this question. Big O was over represented on the test, and switching between tight bounds for Big O when looking at code and loose ones for definitions threw people off. In light of this, divide your score on Q4 by 3 and round it for your adjusted score. The adjusted test is then out of 37.

## Question 5
- Part 1: primitive assignments, data is copied
- Part 2: arrays and references, the data is shared
- Part 3: reference assignments, behaves like part 1 because you are not modifying the object, you are assigning to a new one
- Part 4: new always creates a new object, in which case == will be false and .equals true

## Question 6
- I generally took off max 1 point for inefficiency in various forms. I was strict about what consitituted inefficiency but not strict about penalizing extra.
- When you remove a node and copy data from the head, you need to copy the count from head as well.

## Question 7
- Again, I was strict about what consituted inefficiency.
- If I could see what you were getting at, and things made sense together but perhaps didn't actually work I tried to give as much partial credit as I could.

## Score breakdown by adjusted scores

- ≥ 34 A: 8 exams - This left room to miss things like copying head.count, being slightly inefficient in implementations and being imprecise on early questions
- ≥ 31 A-: 15 
- ≥29 B+: 12 
- ≥27 B: 8  - This allowed some significant errors in either Bag or Stack question, plus some confusion on Big O.
- ≥24 B-: 7
- 16-23 C-/C/C+ - This was generally partial credit on the large questions and errors on Big O.
- < 16 : < C-


## Takehome

Writing code in class under time constraints is difficult. If you feel like your grade does not reflect your handle on the material, I am making a makeup available in two forms, both of which will be "soft" adjustements. This means they will be qualitative data for me as I'm assigning grades, and may bump you from one grade into another.

1. You may set up time with me to talk through your exam 1:1. Explain what you are thinking and code on the whiteboard. 
2. You may take a new open book, open notes takehome exam. This is due Monday at 10 p.m.
