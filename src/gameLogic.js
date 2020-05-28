import readlineSync from 'readline-sync';
import askNameUser from './cli.js';

import { getRandomNumber, isEven } from './functions.js';

const gameEvenOrOdd = () => {
  const nameUser = askNameUser();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let index = 0; index < 3; index += 1) {
    const number = getRandomNumber();
    const correctAnswer = isEven(number);

    const answer = readlineSync.question(`Question: ${number}\nYour answer: `);

    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${nameUser}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${nameUser}!`);
};

export default gameEvenOrOdd;
