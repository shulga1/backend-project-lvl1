import getRandomNumber from '../src/utilits.js';
import engineGame from '../src/index.js';

const getGreatestCommonDivisor = (firstNum, secondNum) => {
  const minNum = Math.min(firstNum, secondNum);
  const maxNum = Math.max(firstNum, secondNum);

  if (maxNum % minNum === 0) {
    return minNum;
  }
  return getGreatestCommonDivisor(maxNum % minNum, minNum);
};

const description = 'Find the greatest common divisor of given numbers.';

const gsd = () => {
  const firstNum = getRandomNumber(1000);
  const secondNum = getRandomNumber(1000);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = String(getGreatestCommonDivisor(firstNum, secondNum));

  if (correctAnswer === '1') {
    return gsd();
  }

  return { question, correctAnswer };
};

const runGame = () => engineGame(description, gsd);

export default runGame;
