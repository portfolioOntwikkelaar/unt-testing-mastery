async function saveUser(user, fileWriter) {
  await fileWriter.write("./data.txt", JSON.stringify(user));
  return true;
}
module.exports = saveUser;