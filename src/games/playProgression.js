import { playGame } from '../index.js';
import getRandomNumber from '../utils.js';

function generateRound() {
  const progression = generateProgression();
  const randomIndex = getRandomNumber(0, progression.length - 1);
  const hiddenValue = progression[randomIndex];

  progression[randomIndex] = '..';

  const question = progression.join(' ');
  const correctAnswer = hiddenValue.toString();

  return [question, correctAnswer];
}

function generateProgression() {
  const progression = [];
  const step = getRandomNumber(2, 10);
  const first = getRandomNumber(0, 100);
  const length = getRandomNumber(5, 10);

  for (let i = first; progression.length < length; i += step) {
    progression.push(i);
  }

  return progression;
}

const playProgression = () => {
  const description = 'What number is missing in the progression?';

  playGame(generateRound, description);
};

export default playProgression;

