import { playGame, findRandom } from './index.js';

function findGCD(numbers) {
  const [a, b] = numbers.split(' ').map(Number);

  if (b === 0) {
    return a.toString();
  }
  return findGCD(`${b} ${a % b}`);
}

const findNumbers = (a = findRandom(), b = findRandom()) => `${a} ${b}`;

export const gameGCD = () => {
  const start = 'Find the greatest common divisor of given numbers.';

  playGame(findNumbers, findGCD, start);
};
