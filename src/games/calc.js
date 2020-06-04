import getRandomNumber from '../utilits.js';
import engineGame from '../index.js';

const description = 'What is the result of the expression?';

const calculator = () => {
  const operators = ['-', '*', '+'];

  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();
  const getOperator = operators[getRandomNumber(2)];

  let correctAnswer = 0;

  switch (getOperator) {
    case '-':
      correctAnswer = firstNum - secondNum;
      break;

    case '*':
      correctAnswer = firstNum * secondNum;
      break;

    default:
      correctAnswer = firstNum + secondNum;
  }

  correctAnswer = String(correctAnswer);

  const question = `${firstNum} ${getOperator} ${secondNum}`;

  return { question, correctAnswer };
};

const runGame = () => engineGame(description, calculator);

export default runGame;
