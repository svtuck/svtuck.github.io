# Intro Lab

For this lab we are going to write five sample programs in Java. These are hosted on github here: [lab 1](https://github.com/svtuck/cs201/tree/master/src/lab1) This is a *pair programming* assignment. This means you and your partner should both be at the computer, with one driving and the other contributing. Trade off every 15 minutes.

Here is the order I suggest, but feel free to go in any order.

## Remove Vowels
For this program, take a String as an argument and print that string with vowels removed. All lower case is fine.

* Input: a string from the command line (perhaps multiple words with spaces).
* Output: that string with vowels removed

[RemoveVowels](https://github.com/svtuck/cs201/blob/master/src/lab1/RemoveVowels.java)

## Palindrome
For this program, take a string as input as an argument and determine if that String is a palindrome.
* Input: a string from the command line (perhaps multiple words with spaces).
* Output: whether this is a palindome

[Palindrome](https://github.com/svtuck/cs201/blob/master/src/lab1/Palindrome.java)

## Stars
For this program, take an integer *n* as input from the command line and build a pyramid of stars with *n* rows. *Hint* you will need to figure out how division of integers works.

* Input: an integer from the command line.
* Output: the star pyramid

[Stars](https://github.com/svtuck/cs201/blob/master/src/lab1/Stars.java)

## Diagonal
For this program, read a matrix (array of array of ints) from a file, and return the absolute value of the difference of the diagonals. Break this into (at least) two functions, one that reads the file and returns a matrix, the other that determines the difference in diagonals.

* Input: an filename from the command line.
* Output: the absolute value of the difference in diagonals

[Diagonal](https://github.com/svtuck/cs201/blob/master/src/lab1/Diagonal.java)

[Sample Input](https://github.com/svtuck/cs201/tree/master/text/lab1)

## Sieve
For this program, we will implement the ('Sieve of Eratosthenes')[https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes]. We will do this using 'Sieve' objects, which take an integer as input and have functions that remove multiples of that number from an array. We will do two versions, one that takes an array as input and returns a NEW array with the elements removed, and another that modifies the passed in array without creating a new array. 

* Input: an integer from the command line.
* Output: the primes less than that number, first with the 'new array' version, and then the 'in place version' (which should be padded with zeros).

[Sieve](https://github.com/svtuck/cs201/blob/master/src/lab1/Sieve.java)

# What to turn in
Submit a zip of your programs on moodle.


