import { playGame, findRandom } from './index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const findExpression = (a = findRandom(), b = findRandom(), operator = getRandomOperator()) => {
  return `${a} ${operator} ${b}`;
};

const calculateExpression = (expression) => {
  const [a, operator, b] = expression.split(' ');
  
  switch (operator) {
    case '+':
      return parseInt(a, 10) + parseInt(b, 10);
    case '-':
      return parseInt(a, 10) - parseInt(b, 10);
    case '*':
      return parseInt(a, 10) * parseInt(b, 10);
  }
};

export const calcMe = () => {
  const start = 'What is the result of the expression?';
  playGame(() => findExpression(), calculateExpression, start); 
};