function maskPassword() {
    const passwordInput = document.getElementById("password").value.trim();

    if (!passwordInput){
        document.getElementById("message").innerText = "Please Enter the Password!"
        return;
    }

    const password = "*".repeat(passwordInput.length)
    document.getElementById("message").innerText = `Masked Password: ${password} (Length: ${passwordInput.length} Characters only)`
}