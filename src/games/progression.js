import getRandomNumber from '../utilits.js';
import engineGame from '../index.js';

const description = 'What number is missing in the progression?';

const genQuestionAnswer = () => {
  const startNum = getRandomNumber(0, 20);
  const sizeStep = getRandomNumber(1, 10);
  const stepsCount = 10;

  const arthmProgression = [startNum];

  for (let step = 0; step < stepsCount; step += 1) {
    arthmProgression.push(arthmProgression[step] + sizeStep);
  }

  const getFieldHidenNumber = getRandomNumber(0, 10);

  const correctAnswer = String(arthmProgression[getFieldHidenNumber]);
  const hideField = '..';
  arthmProgression[getFieldHidenNumber] = hideField;

  const question = arthmProgression.join(' ');

  return { question, correctAnswer };
};

const runGame = () => engineGame(description, genQuestionAnswer);

export default runGame;
