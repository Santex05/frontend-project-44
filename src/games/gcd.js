import readlineSync from 'readline-sync';
import hello, { name } from '../cli.js';

hello();
const getGcd = (num1, num2) => {
  while (num2 !== 0) {
    const temp = num2;
    // eslint-disable-next-line no-param-reassign
    num2 = num1 % num2;
    // eslint-disable-next-line no-param-reassign
    num1 = temp;
  }
  return num1;
};
const playGcdGame = () => {
  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswersCount = 0;
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const number1 = Math.floor(Math.random() * 100) + 1;
    const number2 = Math.floor(Math.random() * 100) + 1;

    console.log(`Question: ${number1} ${number2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = getGcd(number1, number2).toString();

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      // eslint-disable-next-line no-unused-vars
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
export default playGcdGame;
