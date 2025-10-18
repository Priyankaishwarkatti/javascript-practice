(function () {
    const userInput = document.querySelector('#userInput')
    const result = document.querySelector('.result')
    const submitBtn = document.querySelector('.submit-btn')
    const newGameBtn = document.querySelector('.new-btn')
    const form = document.querySelector('form')
    const guessRemains = document.querySelector('.guess')
    const allGuesses = document.querySelector('.allGuesses')

    let resultArray = []
    let guessCount = 10

    let randomNum = Math.round(Math.random() * 100)
    console.log(randomNum);
    guessRemains.innerText = `You have ${guessCount} guesses remaining.`

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const userInputValue = parseInt(userInput.value)
        guessRemains.innerText = `You have ${guessCount - 1} guesses remaining.`
        guessCount--

        if (userInputValue < randomNum) {
            result.innerText = `${userInputValue} is too Low!`


        } else if (userInputValue > randomNum) {
            result.innerText = `${userInputValue} is too High!`

        } else if (userInputValue === randomNum) {
            result.innerText = `You got it in ${resultArray.length + 1} guesses! The number was ${randomNum}.`
            newGameBtn.disabled = false
            submitBtn.disabled = true
            userInput.disabled = true

        } 

        resultArray.push(userInputValue)
        allGuesses.innerText = `Your Guesses: ${resultArray.join(', ')}`

        if (guessCount === 0) {
            result.innerText = ` Game Over! The number was ${randomNum}.`;
            userInput.disabled = true
            submitBtn.disabled = true
            newGameBtn.disabled = false
        }

        form.reset()
    })

    newGameBtn.addEventListener('click', () => {
        resultArray = []
        guessCount = 10
        randomNum = Math.round(Math.random() * 100)
        console.log(randomNum);


        result.innerText = ''
        allGuesses.innerText = ''
        guessRemains.innerText = `You have ${guessCount} guesses remaining.`

        newGameBtn.disabled = true
        submitBtn.disabled = false
        userInput.disabled = false
        form.reset()
    })


})()