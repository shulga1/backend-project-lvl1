import getRandomNumber from '../src/utilits.js';
import engineGame from '../src/index.js';

const isEven = (num) => {
  const even = num % 2 === 0;
  return even ? 'yes' : 'no';
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const even = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question);
  return { question, correctAnswer };
};

const runGame = () => engineGame(description, even);

export default runGame;
