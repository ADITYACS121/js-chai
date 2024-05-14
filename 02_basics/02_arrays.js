const marvel_heros = ["thor","Ironman","spiderman"]
const dc = ["flash","superman","batman"]


// marvel_heros.push(dc);
// console.log("using push ");
// console.log(marvel_heros);

console.log("using concat ");
const allheros =marvel_heros.concat(dc);//returns a new array which needs to be stores 
console.log(allheros);

console.log("using the spread operator ")
const newheros = [...marvel_heros , ...dc];

console.log(newheros);

const score1 = 100;
const score2 =200;
const score3 = 300;

const scores  = Array.of(score1,score2,score3);
console.log(scores);