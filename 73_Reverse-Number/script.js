let count = 0
let direction = 1

let countdown = setInterval(() => {
    count = count + direction
    console.log(count);
    
    if (count >= 10){
        direction = -1
        // console.log(count);
    }

    if (count === 0 && direction === -1){
        clearInterval(countdown)
    }

}, 500)