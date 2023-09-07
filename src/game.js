import readlineSync from 'readline-sync';

export const findRandom = () => Math.floor(Math.random() * 100);

export const playGame = (name, questionGenerator, answerChecker, greetings) => {
  greetings();
  
  let correct = true;

  for (let i = 0; i < 3; i++) {
    const question = questionGenerator(findRandom);
    const correctAnswer = answerChecker(question);
    const answer = readlineSync.question(`${question}\nYour answer: `);

    if (answer.toLowerCase() !== (correctAnswer ? 'yes' : 'no')) {
      console.log(`'${answer}' is the wrong answer ;(. Correct answer was '${correctAnswer ? 'yes' : 'no'}'. \nLet's try again, ${name}!`);
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