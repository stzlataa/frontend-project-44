import readlineSync from 'readline-sync';
import { greetings } from './cli.js';

export const findRandom = () => Math.floor(Math.random() * 100);

export const intro = (phrase) => console.log(phrase);

export const playGame = (questionGenerator, answerChecker, phrase) => {
  const name = greetings();
  intro(phrase);

  let correct = true;

  for (let i = 0; i < 3; i += 1) {
    const number = questionGenerator();
    const question = `${number}`;
    console.log('Question:', question);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = answerChecker(number);

    if (answer.toLowerCase() !== correctAnswer.toLowerCase()) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      correct = false;
	  break;
    } else {
      console.log('Correct!');
    }
  }

  if (correct) {
    console.log(`Congratulations, ${name}!`);
  }
};
