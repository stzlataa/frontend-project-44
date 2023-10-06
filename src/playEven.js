import { playGame, findRandom } from './index.js';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const playEven = () => {
  const start = 'Answer "yes" if the number is even, otherwise answer "no".';

  playGame(findRandom, isEven, start);
};

export default playEven;
