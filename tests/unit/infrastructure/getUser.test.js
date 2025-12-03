// 1. Eerst: mock importeren
jest.mock("axios");

// 2. Dan: imports
const axios = require("axios");
const getUser = require("../../../src/infrastructure/external/getUser");

describe("getUser", () => {
  test("fetches user via API", async () => {
    // 3. Mock behaviour instellen
    axios.get.mockResolvedValue({ data: { id: 1, name: "Alice" } });

    const result = await getUser(1);

    expect(axios.get).toHaveBeenCalledWith("https://example.com/users/1");
    expect(result).toEqual({ id: 1, name: "Alice" });
  });
});
