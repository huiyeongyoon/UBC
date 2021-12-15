const path = require('path');
const string = __filename;

console.log('path.sep', path.sep);
// 경로 구분자
console.log('path.delimiter', path.delimiter);
console.log(path.dirname(string));
console.log(path.extname(string));
console.log(path.basename(string));
console.log(path.basename(string, path.extname(string)));

console.log(path.parse(string));
console.log(path.format({
  dir: 'C:\\users\\zerocho',
  name: 'path',
  ext: '.js'
}));

console.log(path.normalize('C:\\users\\\\zerocho\\\path.js'));
// 잘못된 경로를 고쳐서 제대로 된경로로 바꿔줌
console.log(path.isAbsolute('C:\\'));
// 윈도우는 절대경로할때 드라이브부터 시작
console.log(path.isAbsolute('./home'));
// 상대경로로 시작해서 false
console.log(path.relative('C:\\users\\zerocho\\path.js', 'C:\\'));
// 두개를 비교하는것
// 상위로 몇번을 올라가야하는지 알려주는 것

console.log(path.join(__dirname, '..', '..', '/users', '.', 'zerocho'));
// 경로를 합치는것
// ..이랑 같이 합쳐줌 -> ..까지 dir에서 인식
// 자동으로 변환해줌
// 상대경로로 인식
console.log(path.resolve(__dirname, '..', '/users', '.', 'zerocho'));
// /를 만나면 절대경로로 인식
// 앞에 경로를 무시함