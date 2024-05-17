// Define a tuple with a fixed size and types
let myTuple: [number, number, ...number[]] = [1, 2, 3];

// Update the second element of the tuple
myTuple[1] = 777;

// The rest of the tuple remains unchanged
console.log(myTuple); // Output will be: [1, 777, 3]
