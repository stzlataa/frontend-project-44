import { playGame } from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question.toString(), correctAnswer];
};

const playEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(generateRound, description);
};

export default playEven;
