const fs = require('node:fs');
const fileNames = fs.readdirSync('src/api');
const files = {};

for (const fileName of fileNames) {
    files[fileName.split('.'[0])] = require(`../api/${fileName}`);
}

console.log(`API request files found: ${fileNames}`);
module.exports = files;