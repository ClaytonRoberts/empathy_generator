//find a random whole number

export const randNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
