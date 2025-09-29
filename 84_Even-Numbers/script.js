const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11]

const doubleNum = num.filter(i => {
    return i % 2 === 0 
})

console.log(num);
console.log(doubleNum);