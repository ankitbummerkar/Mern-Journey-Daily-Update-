const { fetch } = require("./api");

describe("api", () => {
  test("api", async () => {
    await expect(fetch()).resolves.toBe("success");
  });
});
