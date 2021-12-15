const timeout = setTimeout(() => {
  console.log('1초후 실행 타이머');
}, 1000);
clearTimeout(timeout);

const interval = setInterval(() => {
  console.log('1초 반복 타이머');
}, 1000);
clearInterval(interval);

const imm = setImmediate(() => {
  console.log('즉시실행');
});

// 바로 실행 취소됨
clearImmediate(imm);
