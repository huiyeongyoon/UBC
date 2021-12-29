// exports.odd = '홀수';
// exports.even = '짝수';
// exports.func = () => {
//   return 1;
// };
// 초기화값을 무조건 적어줘야한다
// 여러개를 불러올수있다
// exports = 객체로 내보내주겠다
module.exports = 'haha';

require('./re');
console.log(require.main.children[0].exports);