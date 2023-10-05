import readlineSync from 'readline-sync';
import { greetings } from './cli.js';

export const findRandom = () => Math.floor(Math.random() * 100);

export const intro = (phrase) => console.log(phrase);

export const playGame = (questionGenerator, answerChecker, phrase) => {
  const name = greetings();
  intro(phrase);

  let correctAnswers = 0; // Счетчик правильных ответов
  let incorrectAnswers = 0; // Счетчик неправильных ответов

  while (correctAnswers < 3 && incorrectAnswers < 1) {
    const number = questionGenerator();
    const question = `${number}`;
    console.log('Question:', question);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = answerChecker(number);

    if (answer.toLowerCase() !== correctAnswer.toLowerCase()) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      incorrectAnswers += 1;
    } else {
      console.log('Correct!');
      correctAnswers += 1;
    }
  }

    console.log(`Congratulations, ${name}!`);
};
