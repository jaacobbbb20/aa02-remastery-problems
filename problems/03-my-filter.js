/*******************************************************************************
Write a function `myFilter` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in
the element. The function should return a new array containing
the elements that result in true when passed to the callback.

Do not use the built in Array.filter.

Examples:

let result1 = myFilter([5, 7, 4, 3, 8], function (n) {
    return n % 2 === 0;
});
console.log(result1);       // [ 4, 8 ]

let result2 = myFilter(['choose', 'big', 'words', 'only'], function (s) {
    return s.length > 3;
});
console.log(result2);      // ['choose', 'words', 'only']
*******************************************************************************/

function myFilter(array, cb) {
// Create a new empty array to put the filtered results in
    let results = [];
// Go over each element in the given array
    for( let i = 0; i < array.length; i++) {
        let element = array[i];
// Use the callback for the current element
        if (cb(element)) {
// If the callback ends up being true, add the element to the results array
            results.push(element);
        }
    }
    return results;
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
    module.exports = myFilter;
} catch(e) {
    return null;
}
