const fs = require('fs');

const readStream = fs.createReadStream('./test.txt');
const writeStream = fs.createWriteStream('./copy.txt');

readStream.pipe(writeStream);
