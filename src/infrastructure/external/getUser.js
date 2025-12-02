const axios = require("axios");

async function getUser(id) {
  const response = await axios.get(`https://example.com/users/${id}`);
  return response.data;
}

module.exports = getUser;