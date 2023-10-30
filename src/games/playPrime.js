import { playGame } from '../index.js';
import getRandomNumber from '../utils.js';

const limit = 10;

function generateRound() {
  const question = getRandomNumber(1, limit);

  const isPrime = (number) => {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;

	const divisorLimit = i * i;

    for (let i = 5; divisorLimit <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
    }

    return true;
  };

  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
}

const playPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  playGame(generateRound, description);
};

export default playPrime;