import readlineSync from 'readline-sync';
import { greetings } from './cli.js';

export const findRandom = () => Math.floor(Math.random() * 100);

export const intro = (phrase) => console.log(phrase);

export const playGame = (questionGenerator, answerChecker, phrase) => {
	const name = greetings();
  	intro(phrase);
  
  	let correct = true;

  	for (let i = 0; i < 3; i++) {
    	const question = questionGenerator(); 
    	let correctAnswer = `${answerChecker(question)}`;

    	let answer = readlineSync.question(`${question}\nYour answer: `);

    	if (answer !== correctAnswer) {
      		console.log(`'${answer}' is the wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`);
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