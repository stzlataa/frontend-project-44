#!/usr/bin/env node
import { playGame } from '../index.js';
import getRandomNumber from '../utils.js';

function generatePrime() {
  const question = getRandomNumber(1, 10);

  const isPrime = (number) => {
    if (number <= 1) return false;
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) return false;
    }
    return true;
  };

  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
}

const playPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  playGame(generatePrime, description);
};

export default playPrime;
