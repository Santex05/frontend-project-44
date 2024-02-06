console.log("brain-even");
console.log("Welcome to the Brain Games!");
const name = prompt("May I have your name?");
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = (num) => num % 2 === 0;

const playGame = () => {
  let correctAnswers = 0;

  for (let i = 0; i < 3; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isEven(randomNumber) ? "yes" : "no";

    console.log(`Question: ${randomNumber}`);
    const userAnswer = prompt("Your answer:");

    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log("Correct!");
      correctAnswers++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

playGame();