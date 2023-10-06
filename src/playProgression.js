#!/usr/bin/env node
import { playGame, findRandom } from './index.js';

let hiddenValue;

const generateProgression = () => {
  const progression = [];
  const step = Math.floor(findRandom() / 10);
  const first = findRandom();
  const last = first + step * (10 - 1);

  for (let i = first; i <= last; i += step) {
    progression.push(i);
  }

  const randomIndex = Math.floor(Math.random() * 10);
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
