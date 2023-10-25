import { playGame } from './index.js';
import getRandomNumber from './utils.js';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const playEven = () => {
  const start = 'Answer "yes" if the number is even, otherwise answer "no".';

  playGame(() => getRandomNumber(1, 100), isEven, start);
};

export default playEven;
