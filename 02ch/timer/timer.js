setTimeout(() => {
  console.log('1초후 실행 타이머');
}, 1000);

setInterval(() => {
  console.log('1초 반복 타이머');
}, 1000);

setImmediate(() => {
  console.log('즉시실행');
});