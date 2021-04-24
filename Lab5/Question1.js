// For a given array, sum all the elements which are greater than 20. 
let arr = [1, 50, 40, 3, 10];

let result = arr.filter(e=> e>20).reduce((accum, current)=>accum+current);

console.log(result);
// ====> Console output: 90