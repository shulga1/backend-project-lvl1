import getRandomNumber from '../utilits.js';
import runEngineGame from '../index.js';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = (firstElement, progressionStep, progressLength) => {
  const progression = [];

  for (let index = 0; index < progressLength; index += 1) {
    const currentElemement = firstElement + index * progressionStep;
    progression.push(currentElemement);
  }

  return progression;
};

const getGameData = () => {
  const firstElement = getRandomNumber(1, 20);
  const progressionStep = getRandomNumber(1, 10);

  return getProgression(firstElement, progressionStep, progressionLength);
};

const genQuestionAnswer = () => {
  const progression = getGameData();
  const hiddenElemntIndex = getRandomNumber(1, progressionLength) - 1;

  const correctAnswer = String(progression[hiddenElemntIndex]);
  const hideField = '..';
  progression[hiddenElemntIndex] = hideField;

  const question = progression.join(' ');

  return { question, correctAnswer };
};

const runGame = () => runEngineGame(description, genQuestionAnswer);

export default runGame;
