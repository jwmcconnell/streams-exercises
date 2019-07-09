const fs = require('fs');

const writeStream = fs.createWriteStream('./test.txt');

writeStream.write('Hello there');
