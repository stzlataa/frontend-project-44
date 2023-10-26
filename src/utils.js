#!/usr/bin/env node
const getRandomNumber = (floor, ceil) => {
  const min = Math.ceil(floor);
  const max = Math.floor(ceil);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default getRandomNumber;
