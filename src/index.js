import readlineSync from 'readline-sync';
import { greetings } from './cli.js';

export const findRandom = () => Math.floor(Math.random() * 100);

export const intro = (phrase) => console.log(phrase);

export const playGame = (questionGenerator, answerChecker, phrase) => {
  const name = greetings();
  intro(phrase);

  let correctAnswers = 0; // Используем счетчик правильных ответов
  const maxAttempts = 3; // Максимальное количество попыток

  for (let i = 0; i < maxAttempts; i += 1) {
    const number = questionGenerator();
    const question = `${number}`;
    console.log('Question:', question);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = answerChecker(number);

    if (answer.toLowerCase() !== correctAnswer.toLowerCase()) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break; // Завершаем игру после первого неправильного ответа
    } else {
      console.log('Correct!');
      correctAnswers += 1; // Увеличиваем счетчик правильных ответов
    }
  }

  if (correctAnswers === maxAttempts) {
    console.log(`Congratulations, ${name}! You've answered all questions correctly.`);
  }
};
