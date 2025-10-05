const vowels = 'aeiou'

const userInput = 'Priyanka'.toLowerCase()
let count = 0


for (let i = 0; i < vowels.length; i++) {
    for (let j = 0; j < userInput.length; j++) {
        if (vowels[i] === userInput[j]) {
            count++
        }
    }
}
console.log("Vowels: " + count);