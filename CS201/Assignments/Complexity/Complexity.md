This assignment is to be done individually. You can share ideas and thoughts with other people in the class, but you should write up your own assignment.

Submit your assignment electronically. If you want to write it out on paper, which is likely the easiest way to do it, scan your solution using any of the scanners in the library or elsewhere (or take a quality picture of it), and submit. If you prefer, you may also do it using Word or LibreOffice (which produce ugly results, but they work) or learn LaTeX, which lets you produce professional quality readable mathematical text like this. An easy way to get started with LaTeX is to use the online version [Overleaf](https://www.overleaf.com/), which has a tutorial if you want to work through it.

We will use anonymous grading on Moodle, which means that the grader won't see your name until after the grading is done. This is an easy way to help add an extra element of fairness to the grading. Therefore, make sure your name doesn't appear on your actual submission. When you submit via Moodle, it will know you are. Thanks!

## Problem 1

Determine how many times the output statement is displayed in each of the following fragments. Indicate whether the number of times that the output is printed is better described as (O(n)) or (O(n^2)).


    // example a
    for (int i=0; i < n; i++)
    {
        for (int j=0; j < n; j++)
        {
            System.out.println(i + " " + j);
        }
    }


    // example b
    for (int i=0; i < n; i++)
    {
        for (int j=0; j < 2; j++)
        {
            System.out.println(i + " " + j);
        }
    }


    // example c
    for (int i=0; i < n; i++)
    {
        for (int j=n-1; j >=0; j--)
        {
            System.out.println(i + " " + j);
        }
    }


    // example d
    for (int i=0; i < n; i++)
    {
        for (int j=0; j < i; j++)
        {
            if (j % i == 0)
            {
                System.out.println(i + " " + j);
            }
        }
    }
    
## Problem 2
For f(n) = n^3 - 5n^2 + 20n - 10, find values of *N* and *c* such that *cn^3* is larger than f(n) for all *n* larger than or equal to to *N*.

## Problem 3
Show that n^2 is O(n^3) using the definition of big-O.

## Problem 4
Show that n^3 is not O(n^2) using the definition of big-O.
