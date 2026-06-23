const { getUser } = require("./user");

test("should return user object", () => {
  expect(getUser()).toEqual({
    id: 1,
    name: "ankit",
    role: "admin",
  });
});
