const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data); // 바이너리 데이터
  console.log(data.toString()); // 파일 읽기
})