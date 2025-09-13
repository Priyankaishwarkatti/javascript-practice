let sentence = "I am Priyanka"

const vowels = "aeiou"

let count = 0

let splitWords = sentence.split(' ').length
let splitChar = sentence.split('').length
console.log(`Number of Words in the Sentence: ${splitWords}`);
console.log(`Number of Characters in the Sentence: ${splitChar}`);

for (i = 0; i < vowels.length; i++){
    for (j = 0; j < sentence.toLowerCase().length; j++){
        if (vowels[i] === sentence[j].toLowerCase()) {
            count++;
        }
    }
}
console.log(`Number of Vowels: ${count}`);