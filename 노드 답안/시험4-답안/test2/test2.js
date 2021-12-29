//1. 현재 경로에 readmeMany.txt 파일을 (내용은 안녕하세요!) fs모듈(readFile)로 읽어서, 콘솔에 출력한다!
const fs = require('fs').promises
fs.readFile('./readmeMany.txt')
  .then(data => {
    console.log("readmeMany:", data.toString())
  })
//2. readme 라는 이름의 함수로 만들고 (파라메터는 number), 콘솔에 차례대로 number, readmeMany.txt를 fs 모듈로 읽은 data를 출력하게 한다! 그리고 다음과 같이 4번까지 호출한다.
//console.log('시작')
//readme(1)
//readme(2)
//readme(3)
//readme(4)
//console.log('끝')
const readme = async (number) => {
  const data = await fs.readFile('./readmeMany.txt')
  console.log(`${number}: ${data.toString()}`)
}
console.log('시작')
readme(1)
readme(2)
readme(3)
readme(4)
console.log('끝')
//3. 2번에서 만든 코드를 4번 실행해 결과를 확인한다.
