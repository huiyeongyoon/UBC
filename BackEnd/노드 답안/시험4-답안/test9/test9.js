  //1. fs.access와 fs.constant를 이용해서 ./folder에 권한을 확인해본다.
const fs = require('fs').promises
const constants = require('fs').constants

fs.access('./folder', constants.F_OK | constants.W_OK | constants.R_OK)
  //2. 폴더가 이미 있다면, Promise.reject로 '이미 폴더 있음' reject하기  
  .then(() => {
    return Promise.reject('이미 폴더 있음')
  })
  //3. catch에서, err.code가 ENOENT일 때, 폴더 만들어서 반환하기, 2번 상황 reject는 바로 다음 catch로 넘기기
  .catch((err) => {
    if (err.code === 'ENOENT') {
      console.log('폴더 없음')
      return fs.mkdir('./folder')
    }
    return Promise.reject(err)
  })
  //4. 3번 ENOENT 상황일때, 다음 then에 fs.open으로 파일 열기 (/folder/file.js, w) 반환하기
  .then(()=> {
    console.log('폴더 만들기 성공')
    return fs.open('./folder/file.txt', 'w')
  })
  //5. 4번에서 반환 받은 결과 fd 출력하기 "빈 파일 만들기 성공, (fd)". 그리고 file.js를 newfile.js로 이름 변환하기
  .then((result)=> {
    const { fd } = result
    console.log('빈 파일 만들기 성공', fd)
    require('fs').write(fd, '잘써지나요?', ()=>{})
    return fs.rename('./folder/file.txt', './folder/newfile.txt')
  })
  //6. 다음 then으로 넘어가면 "이름 바꾸기 성공!" 출력하기
  .then(()=> {
    console.log('이름 바꾸기 성공!')
    return fs.open('./folder/newfile.txt', 'r')
  })
  //7. 마지막 catch에는 전체 오류 잡는 "에러: (err)" 출력하기
  .catch((err) => {
    console.log("에러:", err)
  })


