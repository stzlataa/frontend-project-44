#!/usr/bin/env node
import { playGame } from '../index.js';
import getRandomNumber from '../utils.js';

const generateEven = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

  return [question.toString(), correctAnswer];
};

const playEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  playGame(generateEven, description);
};

export default playEven;
