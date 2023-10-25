import { playGame } from './index.js';
import { getRandomNumber } from './utils.js';

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

const playPrime = () => {
  const start = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  playGame(() => getRandomNumber(1, 10), isPrime, start);
};

export default playPrime;
