import { playGame, findRandom } from './index.js';

const isEven = (number) => number % 2 === 0 ? 'yes' : 'no';

export const isEvenGame = () => {
	const start = 'Answer "yes" if the number is even, otherwise answer "no".';

	playGame(findRandom, isEven, start);
};