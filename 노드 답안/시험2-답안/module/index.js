/* 
  1. func.js에서 만든 모듈로 내보낸 함수를 불러온다. (불러온 모듈은 checkNumber 변수에 담는다) 
  2. checkNumber 함수에 숫자 5를 넣어서 프린트해본다.
  3. checkNumber 함수에 숫자 10을 넣어서 프린트해본다.
  4. var.js에서 만든 모듈로 내보낸 객체를 불러와서 구조 분해할당을 한다. (odd, even)
  5. 문자열 길이가 짝수인지 홀수인지 판단하는, checkStringOddOrEven 함수를 만들어본다. 
     (파라메터는 str로 설정, 문자열 길이는 str.length로 확인할 수 있음)
  6. checkStringOddOrEven 함수에 'hello'를 넣어서 프린트해본다.
  7. checkStringOddOrEven 함수에 'hello world!'를 넣어서 프린트해본다.
*/

const checkNumber = require('./func')
console.log(checkNumber(5))
console.log(checkNumber(10))

const {odd, even} = require('./var')
const checkStringOddOrEven = (str) => {
  if(str.length%2) {
    return odd
  }
  return even
}
console.log(checkStringOddOrEven('hello'))
console.log(checkStringOddOrEven('hello world!'))