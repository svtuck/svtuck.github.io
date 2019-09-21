This is a pair programming assignment. If you are working in a pair, this means that you and your partner should be doing the entirety of this assignment side-by-side, on a single computer, where one person is "driving" and the other is "navigating." Set a timer to swap every 15 minutes. You can choose your favorite from this online timer page. Make sure your sound volume is audible, but not so loud to disturb the people around you.

We will use anonymous grading on Moodle, which means that the grader won't see your name until after the grading is done. This is an easy way to help add an extra element of fairness to the grading. Therefore, make sure your name doesn't appear on your actual submission. When you submit via Moodle, it will know you are. Thanks!

## Game of Sticks
In the game of sticks there is a heap of sticks on a board. On their turn, each player picks up 1 to 3 sticks. The one who has to pick the final stick will be the loser.

The following is an example of the game of sticks.

	The game starts with 20 sticks on the board.
	Jamie takes 3 sticks, there are 17 sticks remaining.
	Dakota takes 2 sticks, there are 15 sticks remaining.
	Jamie takes 1 stick, there are 14 sticks remaining.
	Dakota takes 3 sticks, there are 11 sticks remaining.
	Jamie takes 2 sticks, there are 9 sticks remaining.
	Dakota takes 2 sticks, there are 7 sticks remaining.
	Jamie takes 3 sticks, there are 4 sticks remaining.
	Dakota takes 1 stick, there are 3 sticks remaining.
	Jamie takes 2 sticks, there is 1 stick remaining.
	Dakota has to take the final stick and loses.


This assignment is cumulative, but broken into three parts with two deadlines. We will grade parts 1 and 2 superficially at the time you submit them to make sure that you have kept up with the deadlines and gotten them essentially right. After the final version has been submitted, we will go back and look at details such as style, appropriate organization, and so on.

## Submitting your work
When you submit your work via Moodle, you should submit a single zip file named sticks.zip containing all of your .java files.

# Part one: Human vs Human, and Human vs dumb AI
First, create a game where two players can play against each other, or against an AI that always removes one stick. (This is a very dumb AI player.) The examples below demonstrate how the game should behave.

Example 1
	Welcome to the game of sticks!
	How many sticks are there on the table initially (10-100)? 10
	Options:
	 Play against a friend (1)
	 Play against the computer (2)
	Which option do you take (1-2)? 1

	Player 1: Good luck!
	Player 2: Good luck!

	There are 10 stick(s) on the board.
	Player 1: How many sticks do you take (1-3)? 3

	There are 7 stick(s) on the board.
	Player 2: How many sticks do you take (1-3)? 3

	There are 4 stick(s) on the board.
	Player 1: How many sticks do you take (1-3)? 3

	There are 1 stick(s) on the board.
	Player 2: How many sticks do you take (1-3)? 1

	Player 2: You lose.
	Player 1: You win!
	
Example 2

	Welcome to the game of sticks!
	How many sticks are there on the table initially (10-100)? 500
	Please enter a number between 10 and 100.
	How many sticks are there on the table initially (10-100)? 3
	Please enter a number between 10 and 100.
	How many sticks are there on the table initially (10-100)? 50
	Options:
	 Play against a friend (1)
	 Play against the computer (2)
	Which option do you take (1-2)? 1

	Player 1: Good luck!
	Player 2: Good luck!

	There are 50 stick(s) on the board.
	Player 1: How many sticks do you take (1-3)? 3

	There are 47 stick(s) on the board.
	Player 2: How many sticks do you take (1-3)? 55
	Please enter a number between 1 and 3.
	Player 2: How many sticks do you take (1-3)? 3

	There are 44 stick(s) on the board.
	Player 1: How many sticks do you take (1-3)? 3
	...

	There are 1 stick(s) on the board.
	Player 1: How many sticks do you take (1-3)? 1

	Player 1: You lose.
	Player 2: You win!
	
Example 3

	Welcome to the game of sticks!
	How many sticks are there on the table initially (10-100)? 7 
	Options:
	 Play against a friend (1)
	 Play against the computer (2)
	Which option do you take (1-2)? 2

	Player 1: Good luck!
	Player 2 says 'I, the AI, will hope to defeat you!'

	There are 7 stick(s) on the board.
	Player 1: How many sticks do you take (1-3)? 3

	There are 4 stick(s) on the board.
	Player 2 selects 1 stick(s).

	There are 3 stick(s) on the board.
	Player 1: How many sticks do you take (1-3)? 2

	There are 1 stick(s) on the board.
	Player 2 selects 1 stick(s).

	Player 2: You lose.
	Player 1: You win!

	Player 2 says 'That was fun, thank you!'
	
# Getting started
One of the purposes of this assignment is to practice inheritance, and to see how it can be helpful. To that end, I am giving you some sample code to get started:

[Player and SticksGame](https://github.com/svtuck/cs201/tree/master/src/sticks)

To complete this assignment, you will need to make two new classes, Human and AI, each of which implements the Player interface. You will also need to fill in the details for the method playGameOnce, which you'll find in the SticksGame class. You may not make any changes to the main method, or to the Player interface. To test your code, we will use our main method, and our Player interface, with the code that you submit.

# Part two: Human vs Learning AI
## Overview
One of the amazing things about computers is that they can learn. We're going to develop an AI that can learn to play the game better, with experience. Here's how we're going to do it:

The AI has a number of hats, one hat for each possible amount of sticks on the table. Initially, each hat contains three balls that are numbered from 1 to 3.
At every step of the game that the AI plays, the AI selects a random ball from the hat that matches the amount of sticks currently on the board. When the AI chooses a ball from a hat, it leaves it in the hat, but it needs to remember which one it picked, and then takes the amount of sticks that the ball indicates.
If the AI wins the game, it goes back through its memory of all the balls it picked. Since it won, these all must have been good choices! It then adds a another ball to each hat with the same number on it as the ball that it had selected from that hat. If the AI loses, it will throw away a ball from each hat with the number that it selected from that hat. (Note: A hat must always have at least one ball of each number, hence the last ball of a specific number cannot be thrown away.)
As more and more games are played, the good moves will be associated with having many more balls in the hats.
For example, suppose there are 10 sticks at the beginning. The hat contents appear as:

| hat     	| 1     	| 2     	| 3     	| 4     	| 5     	| 6     	| 7     	| 8     	| 9     	| 10    	|
|---------	|-------	|-------	|-------	|-------	|-------	|-------	|-------	|-------	|-------	|-------	|
| content 	| 1,2,3 	| 1,2,3 	| 1,2,3 	| 1,2,3 	| 1,2,3 	| 1,2,3 	| 1,2,3 	| 1,2,3 	| 1,2,3 	| 1,2,3 	|


The game may proceed as follows:

Player takes 3 sticks, there are 7 sticks remaining.
AI randomly picks up ball 2 from the hat 7. This means that the AI takes 2 sticks, and there are 5 sticks remaining.
Player takes 1 stick, there are 4 sticks remaining.
AI randomly picks up ball 3 from hat 4. This means that AI takes 3 sticks, and there is 1 stick remaining.
Player has to take the final stick and loses.
Now, the situation with the AI looks like:

| hat     	| 1     	| 2     	| 3     	| 4     	| 5     	| 6     	| 7     	| 8     	| 9     	| 10    	|
|---------	|-------	|-------	|-------	|-------	|-------	|-------	|-------	|-------	|-------	|-------	|
| content 	| 1,2,3 	| 1,2,3 	| 1,2,3 	| 1,2,3 	| 1,2,3 	| 1,2,3 	| 1,2,3 	| 1,2,3 	| 1,2,3 	| 1,2,3 	|
| chosen  	|       	|       	|       	| 3     	|       	|       	| 2     	|       	|       	|       	|	 	

 
As the AI wins the game, it will add additional balls to match the chosen ones:

| hat     	| 1     	| 2     	| 3     	| 4       	| 5     	| 6     	| 7       	| 8     	| 9     	| 10    	|
|---------	|-------	|-------	|-------	|---------	|-------	|-------	|---------	|-------	|-------	|-------	|
| content 	| 1,2,3 	| 1,2,3 	| 1,2,3 	| 1,2,3,3 	| 1,2,3 	| 1,2,3 	| 1,2,2,3 	| 1,2,3 	| 1,2,3 	| 1,2,3 	|


Next time it plays, when it chooses a ball at random, it will be more likely to pick one that corresponded to a winning play on a previous game.

### An important caveat
Note that you shouldn't literally store each one of these balls as a separate number. It would be a massive waste of space to actually store another "2" every time you wanted to record it as a good move. The above description is a conceptual explanation: you should use counts to achieve an efficient approach. It should be something more like:

| hat     	| 1     	| 2     	| 3     	| 4     	| 5     	| 6     	| 7     	| 8     	| 9     	| 10    	|
|---------	|-------	|-------	|-------	|-------	|-------	|-------	|-------	|-------	|-------	|-------	|
| content 	| 1,1,1 	| 1,1,1 	| 1,1,1 	| 1,1,2 	| 1,1,1 	| 1,1,1 	| 1,2,1 	| 1,1,1 	| 1,1,1 	| 1,1,1 	|


… where for each hat above, the position is telling you the move to make (1, 2, or 3), and the number shown is the count of the number of balls in that position. This also means that when you "pick a ball at random," you will need to use arithmetic to pick a number the right fraction of the time.

## Your job
Your task is to modify the dumb AI from the previous part so that it works as described above. At the end of the game, the AI should print out the contents of all of its hats so you can see if it learned appropriately. At the end of the game, add functionality that asks the human if they want to play again. This way, you can see the AI learning over multiple rounds.

Admittedly, it needs a lot more practice than just a few games, and it wouldn't hurt to have it play both first and second positions. That's what's coming up for the next part of the assignment.

It's ok to make some non-extensive changes to the main method for this part. You'll need to ask the human player to play again, and manage that piece accordingly. You also might want to modify the constructor for the AI player to take the starting number of sticks, so that you know how many hats to make.

We will grade this by running your AI repeatedly, and looking to see if the hats seem to me changing as expected.

# Part three: AI vs AI
In the previous part we created an AI that is able to learn from playing against the player. As we play against it, we notice that it takes a considerable amount of time before the AI is able to perform against a human player. In this part, you need to modify the program so that the player can choose to play either against a naive AI or a pre-trained AI.

In order to pre-train an AI, you need to write Java that allows two AIs to battle against each others – say a hundred thousand times (after the training is working, try out different numbers as well!) – and after that the player will be set to play against the AI that is ready to battle the player.

The following example shows how the game would start with the trained AI option.


	Welcome to the game of sticks!
	How many sticks are there on the table initially (10-100)? 10
	Options:
	 Play against a friend (1)
	 Play against the computer (2)
	 Play against the trained computer (3)
	Which option do you take (1-3)? 3
	Training AI, please wait...

	Player 1: Good luck!
	Player 2 says 'I, the AI, will hope to defeat you!'

	There are 10 stick(s) on the board.
	Player 1: How many sticks do you take (1-3)? 3

	There are 7 stick(s) on the board.
	Player 2 selects 2 stick(s).

	...
You'll need to change the main method for this part. That's fine, go right ahead.

As you did in the previous part, make sure to print out the totals for each hat, so you and we can see how the learning worked. If things went as they should, you should observe a pretty interesting pattern. And you will have created an AI system that can beat you!