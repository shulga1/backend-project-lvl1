import getRandomNumber from '../utilits.js';
import engineGame from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  const iter = (div) => {
    if (div === num) {
      return true;
    }
    if (num % div === 0) {
      return false;
    }

    return iter(div + 1);
  };

  return iter(2);
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = () => {
  const question = getRandomNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const runGame = () => engineGame(description, prime);

export default runGame;
