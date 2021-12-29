const fs = require('fs')
console.log(fs.readFileSync('./readmeMany.txt').toString())

const readme = (number) => {
  const data = fs.readFileSync('./readmeMany.txt')
  console.log(`${number}: ${data.toString()}`)
}
console.log('시작')
readme(1)
readme(2)
readme(3)
readme(4)
console.log('끝')
