const {odd, even} = require('./var')

function checkOddOrEven(number) {
	if (number % 2) {
		return odd;
	} else {
		return even;
	}
}

// 1가지만 exports 할때 사용
module.exports = checkOddOrEven;