import readlineSync from 'readline-sync';
import greet from './cli.js';

const engineGame = (description, game) => {
  const userName = greet();

  console.log(description);

  for (let index = 0; index < 3; index += 1) {
    const getData = game();
    const { question, correctAnswer } = getData;

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
