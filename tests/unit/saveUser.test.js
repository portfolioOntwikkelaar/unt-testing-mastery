const saveUser = require("../../src/domain/services/saveUser");

describe("saveUser", () => {
  test("saves user via fileWriter dependency", async () => {
    const mockWriter = { write: jest.fn().mockResolvedValue() };
    const user = { id: 10, name: "Alice" };

    await saveUser(user, mockWriter);

    expect(mockWriter.write).toHaveBeenCalledWith(
      "./data.txt",
      JSON.stringify(user)
    );
  });
});