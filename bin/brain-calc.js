#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hello from '../src/cli.js';
import { name } from '../src/cli.js';
hello();
console.log('What is the result of the expression?');

const generateRandomNumber = () => Math.floor(Math.random() * 100);
const generateRandomOperator = () => ['+', '-', '*'][Math.floor(Math.random() * 3)];

const calculateExpression = (num1, operator, num2) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        default:
            return null;
    }
};

let correctAnswersCount = 0;

while (correctAnswersCount < 3) {
    const num1 = generateRandomNumber();
    const num2 = generateRandomNumber();
    const operator = generateRandomOperator();

    console.log(`Question: ${num1} ${operator} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = calculateExpression(num1, operator, num2);

    if (Number(userAnswer) === correctAnswer) {
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
