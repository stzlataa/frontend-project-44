import { playGame, findRandom } from './index.js';

const findNumbers = (a = findRandom(), b = findRandom()) => {
  return `${a} ${b}`;
};

function findGCD(numbers) {
  const [a, b] = numbers.split(' ').map(Number);

  if (b === 0) {
    return a;
  }
  return findGCD(b + ' ' + (a % b));
}

export const gameGCD = () => {
  const start = 'Find the greatest common divisor of given numbers.';
  
  playGame(findNumbers, findGCD, start);
};