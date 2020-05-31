import readlineSync from 'readline-sync';
import greeting from './cli.js';

const engineGame = (description, funct) => {
  const userName = greeting();

  console.log(description);

  for (let index = 0; index < 3; index += 1) {
    const data = funct();
    const { question, correctAnswer } = data;

    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default engineGame;
