import { playGame, getRandomNumber } from './index.js';

function findGCD(numbers) {
  const [a, b] = numbers.split(' ').map(Number);

  if (b === 0) {
    return a;
  }
  return findGCD(`${b} ${a % b}`);
}

const findNumbers = (a = getRandomNumber(1, 10), b = getRandomNumber(1, 10)) => `${a} ${b}`;

const playGcd = () => {
  const start = 'Find the greatest common divisor of given numbers.';

  playGame(findNumbers, findGCD, start);
};

export default playGcd;
