// 2. big.txt를 스트림 방식으로 읽어서 readStream 상수에 담고, 
//    big2.txt에 스트림 방식으로 쓰고 writeStream 상수에 담아서 
//    big.txt내용을 big2.txt에 전달한다. 
//    (첫줄에 프로세스 메모리 정보를 출력하고, 
//     readStream 'end' 이벤트 리스너를 만들고, 
//     프로세스 메모리 정보를 출력한다. )   
const fs = require('fs')

console.log('before:', process.memoryUsage().rss)

const readStream = fs.createReadStream('./big.txt')
const writeStream = fs.createWriteStream('./big3.txt')
readStream.pipe(writeStream)
readStream.on('end', () => {
  console.log('stream:', process.memoryUsage().rss)
})