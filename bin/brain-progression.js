import readlineSync from 'readline-sync';
import hello from '../src/cli.js';
import { name } from '../src/cli.js';
const generateProgression = (start, step, length) => {
  const progression = [];
  let current = start;
  let i = 0;
  while (i < length) {
    progression.push(current);
    current += step;
    i += 1;
  }
  return progression;
};

const playBrainProgression = () => {
    hello()

  console.log('What number is missing in the progression?');

  let i = 0;
  while (i < 3) {
    const start = Math.floor(Math.random() * 10) + 1;
    const step = Math.floor(Math.random() * 5) + 1;
    const length = Math.floor(Math.random() * 5) + 5;
    const progression = generateProgression(start, step, length);
    const hiddenIndex = Math.floor(Math.random() * length);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';

    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default playBrainProgression;
playBrainProgression()