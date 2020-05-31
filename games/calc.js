import getRandomNumber from '../src/utilits.js';
import engineGame from '../index.js';

const description = 'What is the result of the expression?';

const calculator = () => {
  const coll = ['-', '+', '*'];

  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();
  const getOperator = coll[getRandomNumber(2)];

  let correctAnswer = 0;

  if (getOperator === '-') {
    correctAnswer = firstNum - secondNum;
  }

  if (getOperator === '+') {
    correctAnswer = firstNum + secondNum;
  }

  if (getOperator === '*') {
    correctAnswer = firstNum * secondNum;
  }

  correctAnswer = String(correctAnswer);

  const question = `${firstNum} ${getOperator} ${secondNum}`;

  return { question, correctAnswer };
};

const game = () => engineGame(description, calculator);

export default game;
