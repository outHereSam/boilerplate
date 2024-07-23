const { greetUser, addNums, reverse } = require("./script");

test("takes user name and prints it", () => {
  expect(greetUser("Sam")).toBe("Hello Sam");
});

test("takes a string and reverses it", () => {
  expect(reverse("tame")).toBe("emat");
});
