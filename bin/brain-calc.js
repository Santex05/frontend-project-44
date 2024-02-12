import readlineSync from 'readline-sync';
console.log('brain-calc');
import hello from '../src/cli.js';
import { name } from '../src/cli.js';
hello()
console.log('What is the result of the expression?');

const generateRandomNumber = () => Math.floor(Math.random() * 100);
const generateRandomOperator = () => ['+', '-', '*'][Math.floor(Math.random() * 3)];

let correctAnswersCount = 0;

while (correctAnswersCount < 3) {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const operator = generateRandomOperator();

  console.log(`Question: ${num1} ${operator} ${num2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = eval(`${num1} ${operator} ${num2}`);

  if (userAnswer === String(correctAnswer)) {
    console.log('Correct!');
    correctAnswersCount += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}

if (correctAnswersCount === 3) {
  console.log(`Congratulations, ${name}!`);
}