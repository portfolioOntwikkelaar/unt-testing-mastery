function userFactory(overrides = {}) {
  return {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    ...overrides
  };
}

module.exports = userFactory;
