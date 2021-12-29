const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key : 'value'
    }
  }
}

console.time('전체 시간');

console.log('콘솔 하나입니다.');

console.log(string, number, boolean);

console.error('에러메시지');

// 테이블 처럼 보여줌
console.table([
  {name: '제로', birth: 1994, favorite: '치킨'},
  {name: '네로', birth: 1991},
  ])

// 객체 로깅
console.dir(obj, {colors: true, depth: 2});
console.dir(obj, {colors: false, depth: 1});

console.timeEnd('전체 시간');

//호출 스택 함수 안에서 사용
function b() {
  console.trace('위치 추적');
}

function a() {
  b();
}
a()