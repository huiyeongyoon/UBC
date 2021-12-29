// 1. big.txt를 동기식으로 읽어서 상수 data1에 담고, 
//    data1을 동기식으로 big1.txt에 쓴다. 
//    (첫줄과 마지막에 프로세스 메모리 정보를 출력한다.)
const fs = require('fs')
console.log('before:', process.memoryUsage().rss)

const data1 = fs.readFileSync('./big.txt')
fs.writeFileSync('./big2.txt', data1)
console.log('buffer:', process.memoryUsage().rss)
