class UserBuilder {
  constructor() {
    this.data = {
      id: 1,
      name: "Test User",
      age: 25
    };
  }

  withName(name) {
    this.data.name = name;
    return this;
  }

  withAge(age) {
    this.data.age = age;
    return this;
  }

  build() {
    return { ...this.data };
  }
}

module.exports = UserBuilder;