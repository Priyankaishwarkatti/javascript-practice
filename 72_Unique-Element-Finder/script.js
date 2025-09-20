let numbers = [1, 2, 2, 3, 4, 4, 5];

// Method 1: Using Set
let unique1 = [...new Set(numbers)];

// Method 2: Using filter
let unique2 = numbers.filter((val, i, arr) => arr.indexOf(val) === i);

console.log("Unique (Set):", unique1);
console.log("Unique (filter):", unique2);
