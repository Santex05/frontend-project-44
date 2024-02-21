#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hello from '../src/cli.js';
import { name } from '../src/cli.js';
import { getRandomInt } from '../src/cli.js';
hello();
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
console.log(rule);

let sad;
let counter = 0;
const isPrime = (num) => {
    for (let a = 2; a < num; a += 1) {
        if (num % a === 0) {
            return 'no';
        }
    }
    return 'yes';
};
const getPrimeGame = () => {
    let j = [];
    const num1 = getRandomInt(1, 3);
    if (num1 != 1) {
        j.push(num1);
    } else {
        j.push(getRandomInt(100));
    }
    const correctAnswer = isPrime(num1);
    console.log(`Question: ${num1}`);
    r = readlineSync.question('Your answer: ');
    if (r === correctAnswer) {
        console.log('Correct!');
        counter += 1;
    } else {
        console.log(`${sad} is wrong answer  Correct answer: ${correctAnswer}`);
        return;
    }
    if (counter > 0 && counter < 3) {
        getPrimeGame();
    }
};
getPrimeGame();
if (counter === 3) {
    console.log(`Congratulations, ${name}!`);
}
export default getPrimeGame;
