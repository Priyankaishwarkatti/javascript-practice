const num1 = parseInt(prompt("Enter First Number:"))
const num2 = parseInt(prompt("Enter Second Number:"))
const operator = prompt("Enter Operator (+, -, *, /, %):")

    function simpleCalc() {
        let total = 0
        if (operator === "+") {
            total = num1 + num2
            document.querySelector(".result").innerText = `The Addition of ${num1} and ${num2} is: ${total}`
        } else if (operator === "-") {
            total = num1 - num2
            document.querySelector(".result").innerText = `The Subtraction of ${num1} and ${num2} is: ${total}`
        } else if (operator === "*") {
            total = num1 * num2
            document.querySelector(".result").innerText = `The Multiplication of ${num1} and ${num2} is: ${total}`
        } else if (operator === "/") {
            total = num1 / num2
            document.querySelector(".result").innerText = `The Division of ${num1} and ${num2} is: ${total}`
        } else if (operator === "%") {
            total = num1 % num2
            document.querySelector(".result").innerText = `The Remainder of ${num1} and ${num2} is: ${total}`
        } else {
            document.querySelector(".result").innerText = `Enter the right Numbers!!!`
            
        }

    }

    simpleCalc()