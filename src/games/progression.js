import getRandomNumber from '../utilits.js';
import runEngineGame from '../index.js';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = () => {
  const startNum = getRandomNumber(0, 20);
  const progressionStep = getRandomNumber(1, 10);

  const progression = [startNum];

  for (let index = 0; index < progressionLength; index += 1) {
    progression.push(progression[index] + progressionStep);
  }
  return progression;
};

const genQuestionAnswer = () => {
  const progression = getProgression();
  const hiddenElemntIndex = getRandomNumber(0, 10);

  const correctAnswer = String(progression[hiddenElemntIndex]);
  const hideField = '..';
  progression[hiddenElemntIndex] = hideField;

  const question = progression.join(' ');

  return { question, correctAnswer };
};

const runGame = () => runEngineGame(description, genQuestionAnswer);

export default runGame;
