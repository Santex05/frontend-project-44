import readlineSync from 'readline-sync';
import hello from '../src/cli.js';
import { name } from '../src/cli.js';
hello()

let counter = 0;
let win = false;
export const isEven = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no"')
    let random = Math.floor(Math.random() * 100);

    console.log(random)
    console.log(`Question: ${random}`);
    const answer = readlineSync.question(`Your answer: `)
    console.log(answer)
    if (random % 2 == 0 && answer === "yes") {
        console.log(`Correct!`)
        counter += 1
    }
    if (random % 2 == 0 && answer === "no") {
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.Let's try again, ${name}!`);
        return
    }
    if (random % 2 == 1 && answer === "no") {
        console.log(`Correct!`)
        counter += 1
    }
    if (random % 2 == 1 && answer === "yes") {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.Let's try again, ${name}!`)
        return
    }
    console.log(counter)
    if (counter > 0 && counter < 3) {
        isEven();
    }
    if (counter === 3) {
        win = true
    }
};

if (win === true) {
    console.log(`Congratulations, ${name}!`);
}
isEven();