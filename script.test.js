const { greetUser, addNums } = require("./script");

test("takes user name and prints it", () => {
  expect(greetUser("Sam")).toBe("Hello Sam");
});
