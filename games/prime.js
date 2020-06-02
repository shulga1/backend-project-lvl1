import getRandomNumber from '../src/utilits.js';
import engineGame from '../src/index.js';

const isPrime = (num) => {
  if (num < 2) {
    return 'no';
  }

  const iter = (div) => {
    if (div === num) {
      return 'yes';
    }
    if (num % div === 0) {
      return 'no';
    }

    return iter(div + 1);
  };

  return iter(2);
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = () => {
  const question = getRandomNumber();
  const correctAnswer = isPrime(question);
  return { question, correctAnswer };
};

const game = () => engineGame(description, prime);

export default game;
