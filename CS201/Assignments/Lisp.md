# Evaluating Lisp Expressions

This is a pair programming assignment. If you are working in a pair, this means that you and your partner should be doing the entirety of this assignment side-by-side, on a single computer, where one person is "driving" and the other is "navigating." Set a timer to swap every 15 minutes. You can choose your favorite from this online timer page. Make sure your sound volume is audible, but not so loud to disturb the people around you.


## Introduction
The programming language Lisp is one of the oldest programming languages around. It had something of an unusual way of writing mathematical expressions, which looks something this:

	 (+ 1 2 (* 3 5) (- 4 7))
	 
Unlikely the way in which we're normally accustomed to writing arithmetic, Lisp puts the arithmetic symbol first, instead of between the numbers. So (+ 1 2) evaluates to 3. Here are some further examples:

	(- 5 3) evaluates to 2
	(+ 1 3 4) evaluates to 8
	(- 1 3 4) evaluates to -6
	(* (/ 4 2) (+ 5 3)) evaluates to 16
	
	
While Lisp is very old, it has been reborn in two important modern ways. A Lisp dialect called Scheme is very popular for use in programming language design classes, such as our own CS 251. Even more recently, the Lisp dialect Clojure is gaining real traction as a language that emphasizes concurrency and parallelism, while being able to leverage all of the Java libraries.

In this assignment, you'll write a Java program to evaluate a Lisp mathematical expression.

## How to do it

There are multiple approach to evaluating Lisp expressions. For this assignment, however, I want you to do so by making use of a stack. You may use one of the built-in stacks that Java offers: you are welcome to use Stack or Deque, as you prefer. This problem is also solvable via the use of recursion, but you may not use recursion for solving this assignment.

### Obtaining a filename
It will be really cumbersome for you to debug your code by typing in a Lisp expression every time you run your program, so I want you to instead read the Lisp expression from a file. You should use a command-line argument to indicate the name of the file. Here's a simple example of using one:

	public class Demo {
	   public static void main(String[] args) {
 	     for (int i=0; i < args.length; i++) {
 	        System.out.println(args[i]);
  	    }
	   }
	}
	

To run this program in jGrasp, copy and paste it into a file named Demo.java. Then go to the Build menu, and check the "Run Arguments" checkbox near the bottom of the drop-down menu. A new text box with the title Run Arguments will appear over your program window. You can then put hello there friend into the Run Arguments box, and run the program. You should then get this output:

	hello
	there
	friend
	
Alternatively, if you are running your Java programs through the terminal window, you would enter your command-line aguments like this:

	javac Demo.java
	java Demo hello there friend
	
The program will display the output shown above.

If you are using another Java development environment, you'll have to figure out how to enable command-line arguments. They will all do it, but it's all in different places.

You should indicate the name of the file containing your Lisp expression. For example, I put a test Lisp expression in a file named input1.txt. I would then put input1.txt in as a command-line argument, and use the value of args[0] as the name of the file to open.

### Reading in the expression
Reading data from a file in Java is super easy if the data is space-delimited. It's more work if it isn't. To that end, we're going to simplify this part of the assignment and assume that in the input file, every entry in the Lisp expression is separated by spaces, including the parentheses. A sample expression would look like this:

	( + ( * 2 3 ) 4 5 )
	
This way, you won't have to worry about how to separate parentheses from numbers or operators. Based on that, the following code would read each of those items in the Lisp expression, one by one, and print them to the screen:

	import java.util.Scanner;
	import java.io.IOException;
	import java.io.File;
	
	public class TestFileReader {
 	  public static void main(String[] args) throws IOException {
  	    Scanner input = new Scanner(new File(args[0]));
  	    while (input.hasNext()) {
 	        String symbol = input.next();
  	       System.out.println(symbol);
		      }
	   }
	}	
	
	
## The Algorithm
Evaluating the answer to a Lisp expression is a great application for a stack. Here's what the process looks like:

1. Start with an empty stack.
2. While there are more symbols from the Lisp expression to be read…
3. Get the next symbol.
4. If that symbol is anything other than a closing parenthesis, push it on the stack.
5. If that token is a closing parenthesis, pop items one-by-one off your stack, and add them as they come off to a different temporary stack. Once you finally pop off a left parenthesis, your new temporary stack has a symbol on top, and a series of numbers following it. Pop the symbol off the stack, and use it to evaluate the arithmetic result of applying that symbol to all of the numbers that follow on the stack. Once you have finally obtained that arithmetic result (which is a single number), push that answer back on the original stack.


Try this out on paper first with a bunch of examples to see if you understand it. Understanding how the process works is a necessary prerequisite for being able to code up a solution.

## Your assignment
Write a program that takes a file name as a command-line argument, where that file contains a Lisp expression. Your program should display a single number, which is the result of evaluating that Lisp expression.

You may assume that the Lisp expression is well-formed, i.e. it isn't missing parentheses, have symbols in the wrong places, or anything like that. You do not need to do any robust error-handling if the Lisp expression is an improper expression. (That said, if you're looking for an extra challenge to try, see how good you can get your error messages to be if the expression is malformed. How well can you inform the person running your program about what is wrong with the Lisp expression, if there's something wrong with it?)

You should be able to support the four most common arithmetic operations: +, -, *, and /. You should assume that division is not integer division; it is standard floating point division. The easiest way to do this is simply to convert all numbers to doubles for purposes of doing your calculations, and so all of your outputs should be of type double.

### Sample input and output
Here are a few examples. These are not comprehensive tests; make sure to add your own. We will add further tests than this while grading.

	( - 1 2 5 )  ---> -6.0
	( * 1 2 ( / 10 4 2 ) ( + 6 5 ( - 1 2 3 ) ) ( + 2 3 ) )  ---> 87.5
	
## Two parts for asssignment
### Part 1
Get the assignment working for the case with no nested parentheses, like the first example above.

### Part 2
Get the complete assignment working.