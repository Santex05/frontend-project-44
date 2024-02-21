import readlineSync from 'readline-sync';

let name;
let random;
const hello = () => {
    console.log('Welcome to the Brain Games!');
    name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
};
const getGreatestCommonDivisor = (num1, num2) => {
    const smallest = num1 - num2 > 0 ? num2 : num1;
    const arr = [];
    for (let i = 1; i <= smallest; i += 1) {
        if (num1 % i === 0 && num2 % i === 0) {
            arr.push(i);
        }
    }
    return arr[arr.length - 1];
};
getGreatestCommonDivisor(40, 62);
const getRandomInt = (min = 1, max = 100) => Math.floor(min + Math.random() * (max + 1 - min));
export { name };
export default hello;
export { random, getRandomInt, getGreatestCommonDivisor };
