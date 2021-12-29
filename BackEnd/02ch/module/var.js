const odd = '홀수입니다';
const even = '짝수입니다';



// 둘중 하나 선택 exports 사용시 module.exports 사용 불가
// exports.odd = odd;
// exports.even = even;

module.exports = {
	odd,
	even,
};