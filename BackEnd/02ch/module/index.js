const {odd, even} = require('./var');
const checkNumber = require('./func'); // 변수 명이 틀려도 상관없음


function checkStringOddOrEven(str) {
	if (str.length % 2) {
		return odd;
	} else {
		return even;
	}
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));