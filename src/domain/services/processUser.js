function processUser(getUser, notify, userId) {
  const user = getUser(userId);

  if (!user.email) {
    throw new Error("User has no email");
  }

  notify(`User ${user.name} processed`);

  return {
    id: user.id,
    name: user.name.toUpperCase(),
    email: user.email
  };
}

module.exports = processUser;
