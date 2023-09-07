import { playGame, findRandom } from './game.js';
import { greetings } from './greetings.js';

const isEven = (number) => number % 2 === 0;

export const isEvenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  playGame(name, findRandom, (question) => isEven(question()), greetings);
};