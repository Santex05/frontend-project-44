import readlineSync from 'readline-sync';
let name;
const hello = () => {
console.log('brain-games');
name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
};
export {name};
export default hello;