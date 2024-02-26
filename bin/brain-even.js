#!/usr/bin/env node
import readlineSync from 'readline-sync';
// eslint-disable-next-line import/no-named-as-default
import hello, { name } from '../src/cli.js';

hello();

let counter = 0;
let win = false;
// eslint-disable-next-line import/prefer-default-export
export const isEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const random = Math.floor(Math.random() * 100);

  console.log(`Question: ${random}`);
  const answer = readlineSync.question('Your answer: ');
  if (random % 2 === 0 && answer === 'yes') {
    console.log('Correct!');
    counter += 1;
  }
  if (random % 2 === 0 && answer === 'no') {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.Let's try again, ${name}!`);
    return;
  }
  if (random % 2 === 1 && answer === 'no') {
    console.log('Correct!');
    counter += 1;
  }
  if (random % 2 === 1 && answer === 'yes') {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.Let's try again, ${name}!`);

    return;
  }

  if (counter > 0 && counter < 3) {
    isEven();
    if (win === true) {
      console.log(`Congratulations, ${name}!`);
    }

    if (counter === 3) {
      win = true;
    }
  }
};
isEven();
