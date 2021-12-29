// 1. fs.copyFile로 readme.txt, writeme.txt로 복사하기 
// 2. then으로 "복사완료" 출력하기
// 3. catch로 오류잡고, err 출력하기
// 4. 복사할 파일이 없을 때, 복사할 파일 생성(readme.txt, 내용은 "복사할 파일입니다. wirteme.txt에 쓰도록 하겠습니다.")하고, 
//    writeme.txt 복사하기 (여러번 실행해서 처리해도 됨!)

const fs = require('fs').promises
fs.copyFile('readme.txt', 'writeme.txt')
  .then(() => {
      console.log("복사완료")
  })
  .catch(err => {
    console.error(err)
    if(err.code === "ENOENT") {
      fs.writeFile('readme.txt', '복사할 파일입니다. writeme.txt에 쓰도록 하겠습니다.')
    }
  })