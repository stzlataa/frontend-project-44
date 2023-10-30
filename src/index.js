import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const greet = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

const name = greet();

export const playGame = (generateRound, description) => {
  console.log(description);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log('Question:', question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
