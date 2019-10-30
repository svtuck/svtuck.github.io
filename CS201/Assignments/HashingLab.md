# Hashing and BST Lab

In this lab we are building a Reservation System. It has two components, a "lookup" table to get reservations by name and a tree to schedule reservations such that they do not conflict.

The lookup table uses hashing and the scheduling is done with a Binary Search Tree. Just like in class, the scheduling has a constraint: reservations last an hour and we should not add a reservation unless it does not overlap with existing reservations (this uses the time as a key). We should also be able to look up by name (the hash map uses the name as the key).

[Here is the package containing the code.](https://github.com/svtuck/cs201/tree/master/src/reservation)

The main method is in ReservationSystem.java. I have tried to give you approximately how many lines of code you need to add. If you find yourself adding significantly fewer or more lines of code, then you may be off track.



## Finding the first available appointment

The first piece of functionality we want is to find the first available appointment after a certain time. To do this, implement findPredecessor(t), which will the return the closest appointment with a start time less than t (use findSuccessor as a template). The first available appointment is then either t, the end time of the predecessor (if this end time is greater than t) or the first available appointment after the successor (if t is too close to the start time of the successor). Draw out how this works on a piece of paper first (you do not need to hand the drawing in).

Approximate lines of code added: ~15 for findPredecessor, 1 in [ReservationSystem](https://github.com/svtuck/cs201/blob/master/src/reservation/ReservationSystem.java#L115)

## Display with the "index" of each node

One of the powerful aspects of tree traversals is that they let us use the ["visitor pattern"](https://en.wikipedia.org/wiki/Visitor_pattern), a software design pattern to help reuse code. The Binary Search Tree already has a normal [toString](https://github.com/svtuck/cs201/blob/master/src/reservation/ReservationBinarySearchTree.java#L125) method which uses a ["toString" visitor](https://github.com/svtuck/cs201/blob/master/src/reservation/ReservationToStringVisitor.java). I've started you with another class that is an ["indexed" toString visitor](https://github.com/svtuck/cs201/blob/master/src/reservation/ReservationIndexedToStringVisitor.java), but it is missing its core functionality. To implement the indexed visitor, add a new instance variable for "i" and increment "i" each time visit is called. Then append "i" before you append the reservation to the StringBuilder. When are you are done, the method indexedToString() should include the index.

Approximate lines of code added: ~3 to ReservationIndexedToStringVisitor

## Measure Hash Performance

In the ReservationSystem class, there is a function called "runExperiment". This will output data that relates load factor to the number of probes needed to do an insert. Run this function with 1022 additions and 10 trials to generate the data. Copy this data to Google Sheets or Excel. Add a column that contains the average of all trials (use =AVERAGE() and select your data, then copy and paste this for all rows). Create a chart that shows the relationship between load factor and the average number of probes required. Finally, calculate the average of the TOTAL number of probes done to add 1022 items to the hashmap (sum the probes for each trial, and then average this number).

I have a created a starter spreadsheet that you can expand [here](https://docs.google.com/spreadsheets/d/1QKtcSG4rJ0SrquyWmYWI1G7cM97loGPm1veezdAL4sg/edit?usp=sharing).

No extra code added.

## Measure Hash Performance for quadratic probing

In the ReservationHashMap class, modify [getIndexForProbe](https://github.com/svtuck/cs201/blob/master/src/reservation/ReservationHashMap.java#L33) to do quadratic probing. Repeat the experiment and add a line for quadratic probing to the chart. Calculate the average of the TOTAL number of probes done to add 1022 items to the hashmap using quadratic hashing (sum the probes for each trial, and then average this number). You can save the results from previous sections by copying the result columns and then going to Edit -> Paste Special -> Paste Values Only into new columns.

One line modified in ReservationHashMap.

## Expanding the lookup table

Finally, we want to be able to expand the lookup table when we get above our load factor. To do this, use the method expand() in ReservationHashMap. You will then need to modify [put()](https://github.com/svtuck/cs201/blob/master/src/reservation/ReservationHashMap.java#L8) to call expand() when the load factor is too high. You should include all the probes done by expand in what you return as the total cost of this new put() method (i.e. the total cost is the cost of expanding plus the cost of the new addition).

Rerun runExperiment() and copy the data to Excel or Google Sheets. Calculate the average of the TOTAL number of probes done to add 1022 items to the hashmap using quadratic hashing and resizing (sum the probes for each trial, and then average this number).

Modify the ReservationHashMap to begin with an array of size 4. Run runExperiment with numAdditions = 10000 and numtrials = 10 for maximum load factors of .5, .75 and .99. Create a chart that shows the average cost of adding n items. How does load factor impact the expected cost? How does the number of items in the table impact the expected cost?

Approximate lines of code added: ~5 to ReservationHashMap.

## What to turn in

Turn in:

1. Your code in a .zip file.
2. Your charts.


