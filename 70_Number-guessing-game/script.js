let randomNum = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;

while (guess !== randomNum) {
  guess = Number(prompt("Guess a number between 1 and 100:"));
  attempts++;
  if (guess < randomNum) console.log("Too low!");
  else if (guess > randomNum) console.log("Too high!");
  else console.log(`Correct! You guessed it in ${attempts} attempts.`);
}
