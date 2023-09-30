import readlineSync from 'readline-sync';
import { greetings } from './cli.js';

export const findRandom = () => Math.floor(Math.random() * 100);

export const intro = (phrase) => console.log(phrase);

export const playGame = (questionGenerator, answerChecker, phrase) => {
  const name = greetings();
  intro(phrase);

  let correct = true;

  for (let i = 0; i < 3; i++) {
    const number = questionGenerator(); 
    const question = `Question: ${number}`;
    const answer = readlineSync.question(`${question}\nYour answer: `);
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