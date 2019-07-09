const fs = require('fs');

const readStream = fs.createReadStream('./LAB.md');

readStream.on('data', data => {
  console.log(data.toString());
});
