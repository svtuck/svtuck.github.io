In some crossword puzzle books, there is a kind of word puzzle called a Changeling. A changeling (in this context, anyway) is a pair of words with the same number of letters. To solve the changeling, you show a sequence of words, each differing from the previous word by a single letter, that transforms the first word of the changeling into the second.

For example, one solution to the changeling "CAT to DOG" is "CAT, COT, DOT, DOG." The intermediate words must, of course, be words. Note that in this example, we have the smallest possible number of words, since CAT and DOG differ in three letter positions, and there are three letter transitions in this solution. In a contest of changeling solutions, short solutions win. (Actually, short and clever solutions would be better than the short and dull solutions that are most common, but I won't ask you to write a program to judge cleverness.)

For this project, you will write a program that uses a dictionary to compute solutions to changelings. [Here is a public domain dictionary designed for Scrabble that you can use.](https://www.cs.carleton.edu/faculty/dmusican/cs201f07/WORD.LST) (If you want to read more than you ever wanted to know about where this dictionary came from and who made it, download the full distribution.)

Your main class for this assignment should be called Changeling, and will be used as follows:
```
java Changeling dictionaryfile firstword secondword
```

This should compute a solution to the changeling starting at firstword and going to secondword using the indicated dictionary file. If the user runs the program with some number of command-line arguments other than two or three, the program should print an appropriate usage message and exit.

So, how are you going to compute changeling solutions? There are undoubtedly many ways to solve this problem, but here is the way I want you to do it. Build a graph out of the dictionary file where each word is a vertex of the graph and two words/vertices are connected if they are the same length and differ by only one letter. Then use a breadth-first search starting at the first word until you find the second word. Then print out the path, if any, that you discovered in this way.

You should start first with a smaller dictionary, which contains only the three-letter words (write some code to only use three letter words). Get the program working with this data first. Building the graph by comparing every pair of words is an O(N^2) process that could take quite a long time on the full 170,000-word (approximately) dictionary. Once you have your program working on the stripped down dictionary, you may wish to think about how to make it work efficiently for the large one. To get full credit on the assignment, you only need to make it work on the smaller dictionary.

Think about this problem before running to the computer to start coding, and remember to keep your code organized and your methods short. The program should be lots of fun to play with when you're done.

Some additional details:

- Make sure that if the user supplies illegal first or second words (i.e., words which aren't in the dictionary) that your program handles this gracefully.
- Your program does not have to find the shortest path in order to get full credit. However, this is a fun additional challenge.
- Your program does not have to run efficiently on the large dictionary in order to get full credit. However, this is a fun additional challenge.