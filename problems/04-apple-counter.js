/***********************************************************************
Write a function `appleCounter(appleObj)` that takes in an object containing a
number of keys that have the word 'apple' contained within them. The `appleCounter`
function will be in charge of returning the number of keys that contain the word
"apple".

**Hint**: you may want to take all the keys and lower case them for easier
searching.


Example:
let obj = { banana: "yay!" };
appleCounter(obj); // => 0

let obj1 = { crabapple: "yum!" };
appleCounter(obj1); // => 1

let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
appleCounter(obj2); // => 2


let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
appleCounter(obj3); // => 3
***********************************************************************/

function appleCounter(appleObj) {
// Initialize count to 0
    let count = 0;
// Go over every key in the object
    for(let key in appleObj) {
// Convert the current key to lowercase
      let lowerCaseKey = key.toLowerCase();
// Check if the converted key contains "apple"
      if (lowerCaseKey.includes("apple")) {
// If it contains "apple", increase the count by 1
        count++;
      }
    }
// Return the new count after every key in the object is ran through
    return count;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = appleCounter;
