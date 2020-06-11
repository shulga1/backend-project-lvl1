import getRandomNumber from '../utilits.js';
import runEngineGame from '../index.js';

const description = 'What is the result of the expression?';

const operators = ['-', '*', '+'];

const getCorrectAnswer = (firstNum, secondNum, operator) => {
  switch (operator) {
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    case '+':
      return firstNum + secondNum;
    default:
      throw new Error(`an unidentified operator: '${operator}'!`);
  }
};

const genQuestionAnswer = () => {
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const correctAnswer = String(getCorrectAnswer(firstNum, secondNum, operator));

  const question = `${firstNum} ${operator} ${secondNum}`;

  return { question, correctAnswer };
};

const runGame = () => runEngineGame(description, genQuestionAnswer);

export default runGame;
