let i = 0;

setTimeout(()=> console.log(i), 100);

for(let j = 0; j < 100000000; j++){// tested it with also 2 x 100000000 and 5 x 100000000
    i++;
}

// When will the scheduled function run? 
// My Answer: "After the loop"

// What will the alert going to show? 
// My Answer: 100000000