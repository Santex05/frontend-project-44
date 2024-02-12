import readlineSync from 'readline-sync';
console.log('brain-gcd');
import hello from '../src/cli.js';
import { name } from '../src/cli.js';
hello()
console.log('Find the greatest common divisor of given numbers.');

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

let correctAnswersCount = 0;

while (correctAnswersCount < 3) {
    const num1 = generateRandomNumber();
    const num2 = generateRandomNumber();

    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = getGreatestCommonDivisor(num1, num2);

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

function getGreatestCommonDivisor(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}