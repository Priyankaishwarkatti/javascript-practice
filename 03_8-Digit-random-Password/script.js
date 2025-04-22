function randomPassword(length){
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    let password = ''
    for(let i = 0; i < length; i++){
        let randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }
    return password
}

let newPassword = randomPassword(8)

console.log(`The random 8 - digit Password is: ${newPassword}`);