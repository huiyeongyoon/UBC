const fs = require('fs')
//1. readmeStream.txt (내용은 "저는 chunk로 조각 조각 나누어져 전달 되요! 조각! 조각!")를 
//   스트림으로 16길이로 읽어드리게 만들고, 변하지 않는 상수 readStream에 담는다. 
const readStream = fs.createReadStream('./readmeStream.txt', 
{ highWaterMark: 16 })

//2. 이름이 data인 빈 배열을 만든다.
const data = []

//3. readStream의 'data' 이벤트 리스너를 만들고, 콜백함수에서 
//   파라메터 chunk를 배열 data에 추가하고, 출력한다. 
//   ("data :", 청크, 청크 길이 순으로 출력되게 함) 
readStream.on('data', (chunk) => {
  console.log("data:", chunk, chunk.length)
  data.push(chunk) 
})

//4. readStream의 'end' 이벤트 리스너를 만들고, 콜백함수에서 
//   chunk가 담긴 data 배열을 합치고, 문자열로 바꾼 결과를 출력한다. 
//   ("end: ", 문자열로 변환된 chunk 합친 결과 순으로 출력)
readStream.on('end', () => {
  const result = Buffer.concat(data)
  console.log("end:", result.toString()) 
})

//5. readStream의 'error' 이벤트 리스너를 만들고, 오류를 출력한다.
readStream.on('error', (err) => {
  console.error(err)
})