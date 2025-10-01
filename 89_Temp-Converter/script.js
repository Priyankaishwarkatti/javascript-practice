let celsius = parseInt(prompt("Enter the Temperature:"))

function tempConvert() {

    if (isNaN(celsius)){
        celsius = 0
    }
    const fah = `${(celsius * 9/5) + 32}`
    document.querySelector(".temp").innerText = `${celsius}°C = ${fah}°F`

}

tempConvert()
