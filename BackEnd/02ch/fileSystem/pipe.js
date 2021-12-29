const fs = require('fs');

// 복사
const readStream = fs.createReadStream('readme4.txt');
const writeStream = fs.createWriteStream('writeme3.txt');
readStream.pipe(writeStream);
