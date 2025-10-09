const btnIncrement = document.querySelector('.increment')
const btnDecrement = document.querySelector('.decrement')
const btnReset = document.querySelector('.reset')
const count = document.querySelector('h1')
const input = document.querySelector('.input')
const inputValue = (input.value)



btnIncrement.addEventListener('click', () => {
    const countValue = parseInt(count.innerText)
    const inputValue = parseInt(input.value)
    count.innerText = countValue + inputValue
})

btnDecrement.addEventListener('click', () => {
    const countValue = parseInt(count.innerText)
    const inputValue = parseInt(input.value)
    count.innerText = countValue - inputValue
})

btnReset.addEventListener('click', () => {
    count.innerText = 0
})



