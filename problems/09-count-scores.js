/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.


Example 1:
let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2:
let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
***********************************************************************/

function countScores(people) {
// Initialize scores, an empty object for the scores to be stored in
    let scores = {};
// Go over each score object in the given array
    for(let person of people) {
// Take out the name and score from the current object
      let name = person.name;
      let score = person.score;
// If the name already has a key, update the score
      if (scores.hasOwnProperty(name)) {
        scores[name] += score;
      } else {
// If the name does not have a key yet, add it to the object, along with the score
          scores[name] = score;
      }
    }
// Return object
    return scores;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;
