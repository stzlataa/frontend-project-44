#!/usr/bin/env node
import { playGame } from '../index.js';
import getRandomNumber from '../utils.js';

const operators = ['+', '-', '*'];

const getRandomOperator = () => operators[getRandomNumber(0, operators.length - 1)];

const calculateCalc = (expression) => {
  const [a, operator, b] = expression.split(' ');
  const numA = parseInt(a, 10);
  const numB = parseInt(b, 10);

  switch (operator) {
    case '+':
      return numA + numB;
    case '-':
      return numA - numB;
    case '*':
      return numA * numB;
    default:
      return false;
  }
};

const generateCalc = () => {
  const a = getRandomNumber(1, 10);
  const b = getRandomNumber(1, 10);
  const operator = getRandomOperator();
  const expression = `${a} ${operator} ${b}`;
  const correctAnswer = calculateCalc(expression).toString();
  return [expression, correctAnswer];
};

const playCalc = () => {
  const description = 'What is the result of the expression?';

  playGame(generateCalc, description);
};

export default playCalc;
