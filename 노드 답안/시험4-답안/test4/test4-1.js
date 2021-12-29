// 현재 경로에 readmeMany.txt 파일을 콜백 함수를 사용하여 
// 1번, 2번, 3번, 4번 순서대로 출력해본다.

const fs = require('fs')
fs.readFile('./readmeMany.txt',(err, data) => {
  console.log('1번', data.toString())
  fs.readFile('./readmeMany.txt',(err, data) => {
    console.log('2번', data.toString())
    fs.readFile('./readmeMany.txt',(err, data) => {
      console.log('3번', data.toString())
      fs.readFile('./readmeMany.txt',(err, data) => {
        console.log('4번', data.toString())
      })
    })
  })
})

