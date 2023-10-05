import readlineSync from 'readline-sync';

export const findRandom = () => Math.floor(Math.random() * 100);

export const intro = (phrase) => console.log(phrase);

export const playGame = (questionGenerator, answerChecker, phrase) => {
  const name = greetings();
  intro(phrase);

  let correctAnswersCount = 0;
  const maxAttempts = 3;

  while (correctAnswersCount < maxAttempts) {
    const number = questionGenerator();
    const question = `${number}`;
    console.log('Question:', question);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = answerChecker(number);

    if (answer.toLowerCase() !== correctAnswer.toLowerCase()) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    } else {
      console.log('Correct!');
      correctAnswersCount += 1;
    }
  }

  if (correctAnswersCount === maxAttempts) {
    console.log(`Congratulations, ${name}!`);
  }
};