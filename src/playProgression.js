#!/usr/bin/env node
import { playGame } from './index.js';
import { getRandomNumber } from './utils.js';

let hiddenValue;

const generateProgression = () => {
  const progression = [];
  const step = getRandomNumber(2, 10);
  const first = getRandomNumber(0, 101);
  const length = getRandomNumber(5, 11);

  for (let i = first; progression.length < length; i += step) {
    progression.push(i);
  }

  const randomIndex = getRandomNumber(0, length);
  hiddenValue = progression[randomIndex];

  progression[randomIndex] = '..';

  return progression.join(' ');
};

const findValue = (value) => value;

const playProgression = () => {
  const start = 'What number is missing in the progression?';

  playGame(
    () => generateProgression(),
    () => findValue(hiddenValue),
    start,
  );
};

export default playProgression;
