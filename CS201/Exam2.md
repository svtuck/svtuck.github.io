# Exam 2


## Format

You will be allowed a normal sheet of paper with handwritten notes. You do not need to turn it in, and I will not verify that it is handwritten. The format will be similar to the previous test with some multiple choice and some T/F portions. There will be two different types of questions:

- Draw the data structure: For both Trees and Hash Maps I may give you an initial state of the data structure and ask you to draw the data structure after some operations have been done on it (I had this type of question on the takehome/makeup version of the first exam).
- Coding with a "word bank": Coding from scratch in a time crunch is hard. I may provide a "word bank" containing all necessary lines (and superfluous ones) in a mixed up order. You then piece together the solution using what I've provided.

## Topics

### Lists
You should know how both array lists and linked lists work (very similar to the data structures in the first part of the course). You should be able to traverse a linked list and  make modifications in a single pass:

```
Node current = head;
while (current != null) {
	// do stuff
	current = current.next;
}
```

Know what operations are cheaper in an array list vs a linked list.

### Recursion

Be able to write code for simple recursive functions given a specification that performs some calculation (think factorial). Be able to write recursive functions that operate on arrays and use indexes to do the recursion (think binary search). As an example, write sum() which takes an array and returns the sum of the elements in the array.

```
// sum({1,2,3,4,5,6},0,5) = 21
// sum({1,2,3,4,5,6},1,1) = 2
// sum({1,2,3,4,5,6},1,3) = 9
public int sum(int[] nums, int first, int last);
```

Be able to explain backtracking (i.e. draw the tree of calls made for an example I give).

### Maps

Know the Map ADT and its operations (and what it does not support). Given a function, be able to tell me the type I would use if I were to *cache* that function. [Example](https://github.com/svtuck/cs201/blob/master/src/SetsMaps/CacheExample.java)

### Hashing

Know linear, quadratic and double hashing and their properties (clustering etc). Be able to code up the formula for any of these (like the lab). Know chaining. Be able to fill in an implementation that I start for you. Be able to draw the state of a hash map after inserts and deletes. Know the difference between worst case and expected case runtime for each of these. Be able to calculate the load factor and describe why it is important. Be able to distinguish between a "good" hash function and a "bad" hash function. You do not need to be able to code a hash map or hash function.

### Binary Search Trees
Be able to distinguish between a Binary Tree and Binary Search Tree. Be able to draw a BST after inserts and deletes. Be able to modify an insert method that I give you to *augment* a BST with extra information (the example I gave in class was that I want to store the size of each subtree). You do not need to be able to code a BST, but may need to modify code I give you.

Be able to tell me if a tree is an AVL tree. Be able to do insert in an AVL tree (draw the AVL tree after an insert). You do not need to be able to code an AVL tree.