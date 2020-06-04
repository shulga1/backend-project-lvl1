import getRandomNumber from '../utilits.js';
import engineGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const even = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const runGame = () => engineGame(description, even);

export default runGame;
