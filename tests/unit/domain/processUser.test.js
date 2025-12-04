const processUser = require("../../../src/domain/services/processUser");
const userFactory = require("../../helpers/factories/userFactory");

describe("processUser", () => {
  test("processes user and triggers notification", () => {
    const fakeUser = {
    id: 1,
    name: "Alice",
    email: "alice@example.com"   
  };

    const getUser = jest.fn().mockReturnValue(fakeUser);
    const notify = jest.fn();

    const result = processUser(getUser, notify, 1);

    expect(getUser).toHaveBeenCalledWith(1);
    expect(notify).toHaveBeenCalledWith("User Alice processed");

    expect(result).toEqual({
      id: 1,
      name: "ALICE",
      email: "alice@example.com"
    });
  });

  test("throws error if user has no email", () => {
    const fakeUser = {
    id: 1,
    name: "Alice",
    email: null  
  };

    const getUser = jest.fn().mockReturnValue(fakeUser);

  expect(() => processUser(getUser, jest.fn(), 1))
    .toThrow("User has no email");
});
});
