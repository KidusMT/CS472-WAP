// For a given String array, return a new array which contains all
// string, length is greater than and equals to 5, and contains letter 'a'.
let strArr = ['mars', 'earth', 'jupiter', 'pluto', 'saturn'];

let result = strArr.filter(e=>e.length>=5).filter(e=>e.includes('a'));

console.log(result);//(2) ["earth", "saturn"]