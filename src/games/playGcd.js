#!/usr/bin/env node
import { playGame } from '../index.js';
import getRandomNumber from '../utils.js';

const generateGcd = () => {
  const findGCD = (a, b) => (b === 0 ? a : findGCD(b, a % b));

  const a = getRandomNumber(1, 10);
  const b = getRandomNumber(1, 10);

  const question = `${a} ${b}`;
  const correctAnswer = findGCD(a, b).toString();

  return [question, correctAnswer];
};

const playGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';

  playGame(generateGcd, description);
};

export default playGcd;
