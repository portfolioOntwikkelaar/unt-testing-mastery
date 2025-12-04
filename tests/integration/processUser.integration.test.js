jest.mock("axios");
const axios = require("axios");

const processUser = require("../../src/domain/services/processUser");
const getUser = require("../../src/infrastructure/external/getUser");

describe("Integration: processUser + getUser", () => {
  test("should fetch user and process it together", async () => {
    axios.get.mockResolvedValue({
      data: { id: 1, name: "Alice", email: "alice@example.com" }
    });

    const result = await processUser(
      getUser, // echte infra service
      jest.fn(), // notify
      1
    );

    expect(result).toEqual({
      id: 1,
      name: "ALICE",
      email: "alice@example.com"
    });
  });
});
