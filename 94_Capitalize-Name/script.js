const userInput = prompt("Enter Your Name: ")

function capitalizeName(userName) {

    const splitName = userName.split("")

    const sliceName = splitName.slice(1, splitName.length)

    const capitalName = splitName[0].toUpperCase() + sliceName.join("")
    console.log(capitalName);

}

capitalizeName(userInput)