const { greetUser, addNums, reverse, arrSum } = require("./script");

test("takes user name and prints it", () => {
  expect(greetUser("Sam")).toBe("Hello Sam");
});

test("takes a string and reverses it", () => {
  expect(reverse("tame")).toBe("emat");
});

test("adds numbers in array", () => {
  expect(arrSum([1, 2, 3])).toBe(6);
});
