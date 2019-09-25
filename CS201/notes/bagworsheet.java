package bags;

import java.util.Arrays;
import java.util.Random;

public class ArrayBag implements Bag {

    // Stores strings
    private String[] contents;

    // Tracks how many strings are in my bag
    private int count;

    public ArrayBag(int size) {
        contents =  new String[size];
        count = 0;

    }

    public boolean add(String s){
        //If the bag is full, return false
        if(count == contents.length) {
           return false;
        }
        contents[count] = s;
        count++;
        return true;
    }

    public int getCurrentSize(){
        return count;
    }

    public int getFrequencyOf(String s) {
        int x = 0;
        for(int i = 0; i < count; i++ ) {
            if(contents[i].equals(s)) {
                x += 1;
            }
        }
        return x;
    }

    // Selects, returns and removes a random element from the bag
    public String grab() {
       int index = new Random().nextInt(count);

       String element = ___________________

       contents[index] = ___________________

       count = ___________________

       return ___________________
    }

    // Removes an instance of 's' from the bag
    // Returns true if 's' was in the bag and was successfully removed
    // Returns false if 's' was not in the bag
    public boolean remove(String s) {

       for(int index = 0; ___________________; ___________________){

            if(___________________) {

                ___________________

                ___________________

                return ___________________
            }
       }
       return ___________________
    }

    
}
