import readlineSync from 'readline-sync';
console.log('brain-calc');
import hello from '../src/cli.js';
import { name } from '../src/cli.js';
import  {getRandomInt} from '../src/cli.js';
hello()
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
console.log(rule);

let r;
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
let j = []
  const num1 = getRandomInt(100);
  if (num1 != 0){
    j.push(num1)
  }else{
    j.push(getRandomInt(100))
  }
  const correctAnswer = isPrime(num1);
  console.log(`Question: ${num1}`)
  r = readlineSync.question("Your answer: ");
  if (r === correctAnswer) {
    console.log("Correct!");
    counter += 1;
  } else {
    console.log(`${r} is wrong answer ;(, Correct answer: ${correctAnswer}`);
    return 
  }
  console.log(counter);
  if (counter > 0 && counter < 3) {
    getPrimeGame();
  }
};
getPrimeGame();
if (counter === 3) {
  console.log(`Congratulations, ${name}!`);
}
export default getPrimeGame;