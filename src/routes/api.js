const { fs } = require('../imports.js');
const fileNames = fs.readdirSync('src/api');
file = {};
for(let i = 0; i < fileNames.length; i++) {
    files[fileNames[i].split("."[0])] = require(`../api/${fileNames[i]}`);
}
console.log(`API request files founed: ${fileNames}`);
module.exports = files