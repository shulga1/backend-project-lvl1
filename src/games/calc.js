import getRandomNumber from '../utilits.js';
import engineGame from '../index.js';

const description = 'What is the result of the expression?';

const operators = ['-', '*', '+'];

const getCorrectAnswer = (firstNum, secondNum, operator) => {
  if (operator === '-') {
    return firstNum - secondNum;
  } if (operator === '*') {
    return firstNum * secondNum;
  }

  return firstNum + secondNum;
};

const genQuestionAnswer = () => {
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();
  const getOperator = operators[getRandomNumber(0, 2)];

  const correctAnswer = String(getCorrectAnswer(firstNum, secondNum, getOperator));

  const question = `${firstNum} ${getOperator} ${secondNum}`;

  return { question, correctAnswer };
};

const runGame = () => engineGame(description, genQuestionAnswer);

export default runGame;
