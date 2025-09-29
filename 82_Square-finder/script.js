let num = parseInt(prompt("Enter the number:")) 

// let num = 4
let square = (num) => {
let result = document.querySelector('#square')
result.innerText = `Square of ${num} = ${num * num}`
}

square(num)