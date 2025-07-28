function generateMessage() {
    const userName = document.getElementById("userName").value.trim();
    const userAge = document.getElementById("userAge").value.trim();

    if (!userName || !userAge){
        document.getElementById("message").innerText = "Please Enter valid Name and Age!"
        return;
    }

    const message = `Happy ${userAge}th Birthday ${userName}! 🎉`;
    document.getElementById("message").innerText = message
}