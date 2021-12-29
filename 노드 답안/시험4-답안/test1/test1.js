// 1. 현재 경로에 readme.txt 파일을 직접 만들고, (내용은 안녕하세요!) fs모듈로 읽어서, 콘솔에 출력한다!
const fs = require('fs').promises
fs.readFile('readme.txt')
  .then(data => {
    console.log("readme.txt 파일:", data.toString())
  })

// 2. 현재 경로에 readme1.txt 파일을 직접 만들고, (내용은 안녕하세요! readme1.txt 입니다!) fs 모듈로 읽어서, 콘솔에 출력한다! 
fs.readFile('readme1.txt')
  .then(data => {
    console.log("readme1.txt 파일:", data.toString())
  })
// 3. 현재 경로에 fs 모듈로 writeme.txt 파일을 만들고, (내용은 writeme 입니다!) 만든 파일을 출력한다!
fs.writeFile('writeme.txt', 'writeme 입니다!')
// 4. 현재 경로에 fs 모듈로 writeme.txt 파일을 만들고, 내용에 현재 경로(path 모듈사용)를 집어넣고, 만든 파일을 출력한다!
const path = require('path')
fs.writeFile('writeme1.txt', path.join(__dirname))

