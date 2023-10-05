import { playGame, findRandom } from './index.js';

const isPrime = (number) => {
  let isPrimeNum = true;
  if (number <= 1) {
    isPrimeNum = false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      isPrimeNum = false;
      break;
    }
  }

  return isPrimeNum ? 'yes' : 'no';
};

export const primeGame = () => {
  const start = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  playGame(() => Math.floor(findRandom() / 10), isPrime, start);
};
