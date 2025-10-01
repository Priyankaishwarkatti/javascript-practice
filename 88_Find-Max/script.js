const arr = [2, 4, 5, 7, 80, 9, 78]

function maxNum(){
    let num = Math.max(...arr)
    document.querySelector(".max1").innerText = `The Largest Number is: ${num}`
}

maxNum(...arr)