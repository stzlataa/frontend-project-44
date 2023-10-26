#!/usr/bin/env node
import { playGame } from '../index.js';
import getRandomNumber from '../utils.js';

function generateProgression() {
  let hiddenValue = 0;

  const progression = [];
  const step = getRandomNumber(2, 10);
  const first = getRandomNumber(0, 100);
  const length = getRandomNumber(5, 10);

  for (let i = first; progression.length < length; i += step) {
    progression.push(i);
  }

  const randomIndex = getRandomNumber(0, length - 1);
  hiddenValue = progression[randomIndex].toString();

  progression[randomIndex] = '..';

  const question = progression.join(' ');

  return [question, hiddenValue];
}


const playProgression = () => {
  const description = 'What number is missing in the progression?';

  playGame(
    generateProgression,
    description,
  );
};

export default playProgression;
