import getRandomNumber from '../utilits.js';
import runEngineGame from '../index.js';

const getGreatestCommonDivisor = (firstNum, secondNum) => {
  if (secondNum === 0) {
    return firstNum;
  }

  return getGreatestCommonDivisor(secondNum, firstNum % secondNum);
};

const description = 'Find the greatest common divisor of given numbers.';

const genQuestionAnswer = () => {
  const firstNum = getRandomNumber(0, 1000);
  const secondNum = getRandomNumber(0, 1000);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = String(getGreatestCommonDivisor(firstNum, secondNum));

  if (correctAnswer === '1') {
    return genQuestionAnswer();
  }

  return { question, correctAnswer };
};

const runGame = () => runEngineGame(description, genQuestionAnswer);

export default runGame;
