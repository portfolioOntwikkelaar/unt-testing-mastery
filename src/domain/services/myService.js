function myService(dependency) {
  // De dependency is iets dat binnen de test gemockt wordt
  return dependency();
}

module.exports = myService;