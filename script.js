const greetUser = (userName) => {
  return `Hello ${userName}`;
};

const addNums = (a, b) => {
  return a + b;
};

const reverse = (string) => {
  return string.split("").reverse().join("");
};

const arrSum = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

module.exports = {
  greetUser,
  addNums,
  reverse,
  arrSum,
};
