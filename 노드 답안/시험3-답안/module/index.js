/* 
  1. module.js, module-func.js를 모듈로 불러온다. 
  2. 모듈로 불러온 number, myinfo를 프린트한다.
  3. 모듈로 불러온 checkOE 함수에 number를 값으로 넣고, 프린트한다.
  4. 모듈러 불러온 checkOE 함수에 myinfo의 age를 값으로 넣고, 프린트한다.
  5. 모듈러 불러온 checkStringOE 함수에 myinfo의 name을 값으로 넣고 프린트한다.
  6. checkStringOE 함수에 'hello (myinfo name)'를 넣어서 프린트해본다.
*/

const { number, myinfo } = require('./module');
const { checkOE, checkStringOE } = require('./module-func');

console.log(number, myinfo);

console.log(checkOE(number));
console.log(checkOE(myinfo.age));
console.log(checkStringOE(myinfo.name));
console.log(checkStringOE(`Hello ${myinfo.name}`));