let hour = 0
let min = 0
let second = 0

let clock = setInterval(() => {
    console.log(`seconds: ${second++}`);
    if (second === 61) {
        clearInterval(clock)
        min++


        // if (min === 61) {
        //     hour++
        // }

    }

    if (second === 61) {
        setInterval(() => {
            console.log(`Minutes: ${min}`);
        }, 60000)
    }



}, 100)