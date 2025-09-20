let nums = [10, 25, 30, 47, 52];

let sum = nums.reduce((a, b) => a + b, 0);
let avg = sum / nums.length;
let max = Math.max(...nums);
let min = Math.min(...nums);
let even = nums.filter(n => n % 2 === 0);
let odd = nums.filter(n => n % 2 !== 0);

console.log(`Sum: ${sum}, Avg: ${avg}, Max: ${max}, Min: ${min}`);
console.log("Even numbers:", even);
console.log("Odd numbers:", odd);
