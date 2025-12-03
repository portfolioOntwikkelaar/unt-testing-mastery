const processUser = require("../../../src/domain/services/processUser");
const userFactory = require("../../helpers/factories/userFactory");

describe("processUser", () => {
  test("processes user and triggers notification", () => {
    const fakeUser = userFactory({ name: "Alice" });

    const getUser = jest.fn().mockReturnValue(fakeUser);
    const notify = jest.fn();

    const result = processUser(getUser, notify, 1);

    expect(getUser).toHaveBeenCalledWith(1);
    expect(notify).toHaveBeenCalledWith("User Alice processed");

    expect(result).toEqual({
      id: 1,
      name: "ALICE",
      email: fakeUser.email
    });
  });

  test("throws error if user has no email", () => {
    const fakeUser = userFactory({ email: null });

    const getUser = jest.fn().mockReturnValue(fakeUser);
    const notify = jest.fn();

    expect(() => processUser(getUser, notify, 1))
      .toThrow("User has no email");
  });
});
