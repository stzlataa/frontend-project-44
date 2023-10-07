import { playGame, getRandomNumber } from './index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const findExpression = (a = getRandomNumber(1, 10), b = getRandomNumber(1, 10), operator = getRandomOperator()) => `${a} ${operator} ${b}`;

const calculateExpression = (expression) => {
  const [a, operator, b] = expression.split(' ');

  switch (operator) {
    case '+':
      return (parseInt(a, 10) + parseInt(b, 10));
    case '-':
      return (parseInt(a, 10) - parseInt(b, 10));
    case '*':
      return (parseInt(a, 10) * parseInt(b, 10));
    default:
      return false;
  }
};

const playCalc = () => {
  const start = 'What is the result of the expression?';
  playGame(findExpression, calculateExpression, start);
};

export default playCalc;
