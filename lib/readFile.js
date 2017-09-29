const fs = require('fs');

module.exports = readFile;

function readFile(filePath){
  return fs.readFileSync(filePath, 'utf8');
}
