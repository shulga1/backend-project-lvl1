import readlineSync from 'readline-sync';

const roundsCount = 3;

const runEngineGame = (description, genQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ', {
    defaultInput: 'Anonymous',
  });

  console.log(`Hello, ${userName}!`);

  console.log(description);

  for (let round = 0; round < roundsCount; round += 1) {
    const data = genQuestionAnswer();
    const { question, correctAnswer } = data;

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runEngineGame;
