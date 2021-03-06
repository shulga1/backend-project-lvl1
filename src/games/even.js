import getRandomNumber from '../utilits.js';
import runEngineGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const genQuestionAnswer = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question: String(question), correctAnswer };
};

const runGame = () => runEngineGame(description, genQuestionAnswer);

export default runGame;
