//1. writemeStream.txt 파일에 스트림 형태로 쓰는 것을 만들고, 
//   writeStream이라는 상수에 담는다.
const fs = require('fs')
const writeStream = fs.createWriteStream('./writeStream.txt')

//2. writeStream에 'finish' 이벤트 리스너를 만들고, 
//   "파일 쓰기 완료"를 출력한다.
writeStream.on('finish', () => {
  console.log('파일 쓰기 완료!')
})

//3. writeStream으로 "첫번째 스트림 입니다. \n" 문자열을 쓴다.
writeStream.write('첫번째 스트림 입니다. \n')

//4. writeStream으로 "두번째 스트림 입니다." 문자열을 쓴다.
writeStream.write('두번째 스트림 입니다.')

//5. writeStream을 끝낸다.
writeStream.end()

//6. readStream.txt 내용을 writeStream.txt에 스트림과 파이프로 보내본다! 
const readStream = fs.createReadStream('./readStream.txt')
const writeStrem1 = fs.createWriteStream('./writeStream1.txt')
readStream.pipe(writeStrem1)
