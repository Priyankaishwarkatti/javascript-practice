let userInput = +prompt('Enter the Number')

function primeNumber(userInput){
    let isPrime = true
if (userInput <= 1 ){
    isPrime = false
} else {
    for(i = 2; i < userInput; i++ ){
        if(userInput % i === 0){
            isPrime = false
            break
        }
    }
}
}