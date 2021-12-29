  // 1. fs.readdir를 사용해서 folder 내용 확인하기 then에서 결과값 출력 ("폴더내용 확인", dir) 
  //    fs.unlink로 newdata.txt 파일 지우기 (fs.unlink 리턴)
const fs = require('fs').promises
fs.readdir('./folder')
  .then(dir => {
    console.log('폴더 내용 확인', dir)
    return fs.unlink('./folder/newfile.txt')
  })
  // 2. 1번 다음 then에서 '파일 삭제 성공' 메시지 출력 fs.rmdir로 folder 지우기
  .then(()=> {
    console.log('파일 삭제 성공!') 
    return fs.rmdir('./folder')
  })
  .catch(err => {
    if(err.code === 'ENOENT') {
      console.log('파일 없음!')
      return fs.rmdir('./folder')
    }
    console.log(err)
  })
  // 3. 2번 다음 then에서 '폴더 삭제 성공' 메시지 출력
  .then(()=> console.log('폴더 삭제 성공!'))
  // 4. catch로 error 잡기 
  .catch((err) => {
    console.error(err)
  })

