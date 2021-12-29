/*
  1. 홀수 짝수를 판단하는 함수 checkOE 를 만든다. (파라메터는 num, 리턴 필요)
  2. 문자열 길이의 홀수 짝수를 판단하는 함수 checkStringOE를 만든다. (파라메터는 str, 리턴 필요)
  3. checkOE, checkStringOE를 내보낸다.
*/

const odd = '홀수';
const even = '짝수';

const checkOE = (num) => {
  if(num % 2){
    return odd;
  };
  return even;
};

const checkStringOE = (str) => {
  if(str.length % 2){
    return odd;
  };
  return even;
};

module.exports = {
  checkOE, 
  checkStringOE
};