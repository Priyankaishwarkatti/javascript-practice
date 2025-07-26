function convertTemp() {
  const input = parseFloat(document.getElementById('tempInput').value);
  const unit = document.getElementById('unitInput').value;
  const resultDiv = document.getElementById('result');

  if (isNaN(input)) {
    resultDiv.textContent = 'Please enter a valid number.';
    return;
  }

  let celsius, fahrenheit, kelvin;

  if (unit === 'C') {
    celsius = input;
    fahrenheit = (input * 9/5) + 32;
    kelvin = input + 273.15;
  } else if (unit === 'F') {
    fahrenheit = input;
    celsius = (input - 32) * 5/9;
    kelvin = celsius + 273.15;
  } else if (unit === 'K') {
    kelvin = input;
    celsius = input - 273.15;
    fahrenheit = (celsius * 9/5) + 32;
  }

  resultDiv.innerHTML = `
    🌡️ Celsius: ${celsius.toFixed(2)} °C<br>
    🌡️ Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>
    🌡️ Kelvin: ${kelvin.toFixed(2)} K
  `;
}
