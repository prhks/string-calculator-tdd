const { add } = require("../src/stringCalculator");

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the number itself for a single number input", () => {
  expect(add("1")).toBe(1);
});

test("returns the sum of two numbers separated by comma", () => {
  expect(add("1,5")).toBe(6);
});

test("handles newlines as delimiters between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("supports custom delimiters specified at the beginning of the string", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("throws an error for negative numbers with the negative numbers listed", () => {
  expect(() => add("1,-2,3,-4")).toThrow(
    "negative numbers not allowed: -2, -4"
  );
});
