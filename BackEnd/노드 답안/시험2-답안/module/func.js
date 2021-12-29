/* 
  1. var.js에서 만든 모듈로 내보낸 객체를 불러와서 구조 분해할당을 한다. (odd, even)
  2. 홀수,짝수를 판단하는 checkOddOrEven 함수를 만든다. (파라메터는 num으로 설정)
  3. checkOddOrEven 함수를 모듈로 만들어서 내보낸다.
*/ 

const { odd, even } = require('./var')

const checkOddOrEven = (num) => {
  if(num % 2) {
    return odd
  }
  return even
}

module.exports = checkOddOrEven