function countVowels(str) {
    let count = 0
    const vowels = 'aeiou'

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i].toLowerCase() === vowels[j]) {
                count++
            }
        }
    }

    console.log(`The count of Vowels Present in ${str} is ${count}`);
}

countVowels("Nikhil sarode")
