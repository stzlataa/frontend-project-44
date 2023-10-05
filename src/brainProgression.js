import { playGame, findRandom } from './index.js';

const generateProgression = () => {
  const progression = [];
  const step = Math.floor(findRandom() / 10);
  const first = findRandom();
  const last = first + step * (10 - 1);

  for (let i = first; i <= last; i += step) {
    progression.push(i);
  }

  const randomIndex = Math.floor(Math.random() * 10);
  const valueOfX = progression[randomIndex];

  return [progression, randomIndex, valueOfX];
};

let hiddenValue;

const hideRandomElement = (arr = generateProgression()) => {
  const modifiedArr = [...arr[0]];
  hiddenValue = arr[2];
  modifiedArr[arr[1]] = '..';
  return [modifiedArr.join(' '), arr[2]];
};

const findValue = () => hiddenValue.toString();

export const gameProgression = () => {
  const start = 'What number is missing in the progression?';

  playGame(
    () => {
      const progressionData = generateProgression();
      return hideRandomElement(progressionData)[0];
    },
    findValue,
    start,
  );
};
