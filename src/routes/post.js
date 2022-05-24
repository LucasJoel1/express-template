const { fs } = require('../imports.js');
const fileNames = fs.readdirSync('src/post');
files = {};
for(let i = 0; i < fileNames.length; i++) {
    files[fileNames[i].split(".")[0]] = require(`../post/${fileNames[i]}`);
}
console.log(`Post request files founed: ${fileNames}`);
module.exports = files