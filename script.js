const greetUser = (userName) => {
  return `Hello ${userName}`;
};

const addNums = (a, b) => {
  return a + b;
};

const reverse = (string) => {
  return string.split("").reverse().join("");
};

module.exports = {
  greetUser,
  addNums,
  reverse,
};
