let strArr = ['mars', 'earth', 'jupiter', 'pluto', 'saturn'];

let result = strArr.filter(e=>e.length>=5).filter(e=>e.includes('a'));

console.log(result);////(2) ["earth", "saturn"]