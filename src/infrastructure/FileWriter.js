class FileWriter {
  async write(path, data) {
    const fs = require("fs/promises");
    return fs.writeFile(path, data);
  }
}
module.exports = FileWriter;