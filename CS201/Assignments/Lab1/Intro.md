# Intro Lab

For this lab we are going to write five sample programs in Java. These are hosted on github here: [lab 1](https://github.com/svtuck/cs201/tree/master/src/lab1) This is a *pair programming* assignment. This means you and your partner should both be at the computer, with one driving and the other contributing. Trade off every 15 minutes.

Here is the order I suggest, but feel free to go in any order.

## Remove Vowels
For this program, take a String as an argument and print that string with vowels removed. Assume the input is all lower cased.

* Input: a string from the command line (perhaps multiple words with spaces).
* Output: that string with vowels removed

[RemoveVowels](https://github.com/svtuck/cs201/blob/master/src/lab1/RemoveVowels.java)

## Palindrome
For this program, take a string as input as an argument and determine if that String is a palindrome. Assume the word is all lower cased.
* Input: a string from the command line (perhaps multiple words with spaces).
* Output: whether this is a palindome

[Palindrome](https://github.com/svtuck/cs201/blob/master/src/lab1/Palindrome.java)

## Stars
For this program, take an integer *n* as input from the command line and build a pyramid of stars with *n* rows. *Hint* you will need to figure out how division of integers works.

Example:


      5
      *
      **
      ***
      **
      *

      9
      *
      **
      ***
      ****
      *****
      ****
      ***
      **
      *

      6
      *
      **
      ***
      ***
      **
      *
      
* Input: an integer from the command line.
* Output: the star pyramid

[Stars](https://github.com/svtuck/cs201/blob/master/src/lab1/Stars.java)

## Diagonal
For this program, read a matrix (array of array of ints) from a file, and return the absolute value of the difference of the diagonals. Break this into (at least) two functions, one that reads the file and returns a matrix, the other that determines the difference in diagonals.

* Input: an filename from the command line.
* Output: the absolute value of the difference in diagonals

[Diagonal](https://github.com/svtuck/cs201/blob/master/src/lab1/Diagonal.java)

[Sample Input](https://github.com/svtuck/cs201/tree/master/text/lab1)

## Remove Vowels 2
For this program, we are going to again remove vowels. Instead of using a String, you are going to get an Arrray.

### Part A
	1. Read a String into an array of chars (char[])
	2. Pass this array to removeVowels
	3. Modify this array to remove all the vowels



### Part A
	1. Read a String into an array of chars (char[])
	2. Pass this array to removeVowels
	3. Return a new (potentially smaller) array with vowels removed without modifying the original array

[Part A](https://github.com/svtuck/cs201/blob/master/src/lab1/RemoveVowelsA.java)
[Part B](https://github.com/svtuck/cs201/blob/master/src/lab1/RemoveVowelsB.java)

# What to turn in
Submit a zip of your programs on moodle.


