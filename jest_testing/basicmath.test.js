const { add, subtract, divide } = require("./basicmath");

describe("basic math", () => {
  test("add", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("subtract", () => {
    expect(subtract(10, 3)).toBe(7);
  });

  test("divide", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("divide by zero", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });
});
