const myService = require("../../src/domain/services/myService");

test("should return OK from dependency", () => {
  
  const dependency = jest.fn().mockReturnValue("OK");

  const result = myService(dependency);

  expect(result).toBe("OK");
});