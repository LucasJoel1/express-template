const fs = require('node:fs');
const fileNames = fs.readdirSync('src/get');
const files = {};

for (const fileName of fileNames) {
    files[fileName.split('.')[0]] = require(`../get/${fileName}`);
}

console.log(`Get request files found: ${fileNames.join(', ')}`);

module.exports = files;