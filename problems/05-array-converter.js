/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

function arrayConverter(array) {
// Create an empty object to store the count in
    let count = {};
// Go through each element inside of the given array
    for(let i = 0; i < array.length; i++) {
      let element = array[i];
// Check wether the element is already a key inside of the object
      if (count[element] === undefined) {
// If it is not, initalize its count to 1
        count[element] = 1;
      } else {
// If it is, increase its count by 1
        count[element]++;
      }
    }
// Return count, which will have all of the results in
    return count;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
