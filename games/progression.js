import getRandomNumber from '../src/utilits.js';
import engineGame from '../src/index.js';

const description = 'What number is missing in the progression?';

const progression = () => {
  const startNum = getRandomNumber(20);
  const sizeStep = getRandomNumber(10);
  const countSteps = 10;

  const arthmProgression = [startNum];

  for (let step = 0; step < countSteps; step += 1) {
    arthmProgression.push(arthmProgression[step] + sizeStep);
  }

  const getFieldHidenNumber = getRandomNumber(10);

  const correctAnswer = String(arthmProgression[getFieldHidenNumber]);
  const hideField = '..';
  arthmProgression[getFieldHidenNumber] = hideField;

  const question = arthmProgression.join(' ');

  return { question, correctAnswer };
};

const game = () => engineGame(description, progression);

export default game;
