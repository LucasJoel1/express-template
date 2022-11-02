const fs = require('node:fs');
const fileNames = fs.readdirSync('src/post');
const files = {};

for (const fileName of fileNames) {
    files[fileName.split('.')[0]] = require(`../post/${fileName}`);
}

console.log(`Post request files found: ${fileNames.join(', ')}`);

module.exports = files;