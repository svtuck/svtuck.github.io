# Recursion Lab

This is a pair programming assignment. If you are working in a pair, this means that you and your partner should be doing the entirety of this assignment side-by-side, on a single computer, where one person is "driving" and the other is "navigating." Set a timer to swap every 15 minutes. You can choose your favorite from this online timer page. Make sure your sound volume is audible, but not so loud to disturb the people around you.

Zip files and submit on Moodle.


## Problem 1 - 8 Queens

[Puzzle Wikipedia Page](https://en.wikipedia.org/wiki/Eight_queens_puzzle)

[Starter Code](https://github.com/svtuck/cs201/blob/master/src/Recursion/Queens.java)

This problem is to place [8 queens on a chess board](https://en.wikipedia.org/wiki/Eight_queens_puzzle) such that they can not attack each other. Queens can attack down rows, columns and diagonally any distance. To solve this, place a queen on the first unattacked square, then recurse. If you are unable to place a queen, then your recursion should backtrack.

## Problem 2 - Sudoku
[Starter Code](https://github.com/svtuck/cs201/blob/master/src/Recursion/Sudoku.java)

This problem is to write a basic brute force [sudoku](https://en.wikipedia.org/wiki/Sudoku) solver. To do this, try to place each of 9 values in the first square, and then recursively try to solve the puzzle. Only place values if the placement would be valid (i.e. there is not another version of the value in the row, column or box). You will need to create a new Sudoku object each time you recurse.

## Problem 3 - Morse Code

[Morse Code Helper](https://github.com/svtuck/cs201/blob/master/src/Recursion/morse/MorseCode.java)

[Starter Code](https://github.com/svtuck/cs201/blob/master/src/Recursion/morse/MorseDecoder.java)

This problem is to a [Morse Code](https://en.wikipedia.org/wiki/Morse_code) encoder (going from text to Morse code) and decoder (going from Morse code to text). Encoding text into Morse code is unambiguous; there is only one result for each piece of text. Decoding, however, is ambigious. In this problem you need to track all possible decodings, some of which will be gibberish. I have provided [utility to map between characters and morse code](https://github.com/svtuck/cs201/blob/master/src/Recursion/morse/MorseCode.java).

## Problem 4 - Recursive Queue

[Interface](https://github.com/svtuck/cs201/blob/master/src/Recursion/CarlQueue.java)

[Starter code](https://github.com/svtuck/cs201/blob/master/src/Recursion/RQueue.java)

This problem is to implement a queue recursively. Specifically, create a class called RQueue that implements the [provided interface](https://github.com/svtuck/cs201/blob/master/src/Recursion/CarlQueue.java).

The idea is that a queue can be thought of as a data structure containing a front, a back, and a queue within. For example, if my queue contained the Strings "first", "second", and "third" (offered in that order), I can think of that as a queue whose front is "first", whose rear is "third", and whose inside is another queue containing all of the inside values (which, in this case, is just "second").

You'll need to handle special cases regarding when your queue is empty, has only one item, and so on. Here are my suggestions on how to handle these cases.


### To represent a completely empty queue:

front = null

inside = null

rear = null


### To represent a queue with only one item in it:

front = item

inside = null

rear = null

### To represent a queue with only two items in it:

front = item

inside = null

rear = item

### To represent a queue with three or more items in it:

front = item

inside = another queue

rear = item

inside should never refer to queue that is empty; if the queue that inside points to becomes empty, inside should be set directly to null.

