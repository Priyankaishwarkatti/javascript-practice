const userNum = 5
function randomNo () {
let randomNum = Math.floor(Math.random() * 10) + 1
console.log(randomNum);
    if (userNum === randomNum) {
        console.log('Right Number!!!');
    } else {
        console.log("Wrong Number!!");
    }
}