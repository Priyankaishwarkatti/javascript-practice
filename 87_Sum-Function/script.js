function sum(...num){
    // return num 
    let number = 0
    for (let i of num ){
        number += i
    }
    console.log(number);
}

sum(1, 2, 3, 4)