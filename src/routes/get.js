const { fs } = require('../imports.js');
const fileNames = fs.readdirSync('src/get');
files = {};
for(let i = 0; i < fileNames.length; i++) {
    files[fileNames[i].split(".")[0]] = require(`../get/${fileNames[i]}`);
}
console.log(`Get request files founed: ${fileNames}`);
module.exports = files