let rollADice = function(num = 6){
    return Math.floor(Math.random() * num) + 1
}
console.log(rollADice(9));