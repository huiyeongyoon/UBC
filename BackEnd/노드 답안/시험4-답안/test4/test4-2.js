// 현재 경로에 readmeMany.txt 파일을 프라미스를 사용하여 
// 1번, 2번, 3번, 4번 순서대로 출력해본다.

const fs_pm = require('fs').promises
fs_pm.readFile('./readmeMany.txt')
  .then(data => {
    console.log('1번', data.toString())
    return data.toString()
  })
  .then(data => {
    console.log('2번', data)
    return data
  })
  .then(data => {
    console.log('3번', data)
    return data
  })
  .then(data => {
    console.log('4번', data)
  })