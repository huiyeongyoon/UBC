const timeout = setTimeout(() => {
  console.log('1.5');
}, 1500);

const interval = setInterval(() => {
  console.log('1초마다');
}, 1000);

const timeout2 = setTimeout(() => {
  console.log('4초마다');
}, 4000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearInterval(interval);
}, 3500);

const imm = setImmediate(() => {
  console.log('즉시');
});