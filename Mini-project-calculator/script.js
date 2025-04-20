
// Mini Project: Simple Console-Based Calculator

let num1 = +prompt('Enter the First Number:')
let operator = prompt('Enter the Operator (+, -, *, /, %):')
let num2 = +prompt('Enter the Second Number:')

function calc(num1, operator, num2) {
  let result = 0
  switch (operator) {
    case '+':
      result = num1 + num2
      console.log(`${num1} + ${num2} = ${result}`)
      break

    case '-':
      result = num1 - num2
      console.log(`${num1} - ${num2} = ${result}`)
      break

    case '*':
      result = num1 * num2
      console.log(`${num1} * ${num2} = ${result}`)
      break
    case '/':
      if (num2 === 0) {
        console.log('cant divide by 0')
      } else {
        result = num1 / num2
        console.log(`${num1} / ${num2} = ${result}`)
      }
      break
    case '%':
      result = num1 % num2
      console.log(`${num1} % ${num2} = ${result}`)
      break
    default:
      console.log('Enter valid Number')
  }
}

calc(num1, operator, num2)






