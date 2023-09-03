import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

const findRandom = () => Math.floor(Math.random() * 100);

export const isEvenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correct = true;

  for (let i = 0; i < 3; i++) {
    const randomNumber = findRandom();
    const correctAnswer = isEven(randomNumber);
    const answer = readlineSync.question(`${randomNumber} `);

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
