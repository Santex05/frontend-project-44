#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hello, { name, getGreatestCommonDivisor } from '../src/cli.js';

hello();
console.log('Find the greatest common divisor of given numbers.');

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

let correctAnswersCount = 0;

while (correctAnswersCount < 3) {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();

  console.log(`Question: ${num1} ${num2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = getGreatestCommonDivisor(num1, num2);

  if (+userAnswer === correctAnswer) {
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
