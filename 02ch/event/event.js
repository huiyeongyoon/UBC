const eventEmitter = require('events');
const myEvent = new eventEmitter()

// on , add 2가지로 만들 수 있다
myEvent.on('event1', () => {
  console.log('event1 발생!');
})
// 매 emit 실행시마다 실행된다
myEvent.emit('event1');
myEvent.emit('event1');


// once: 이벤트를 한번만 실행할때 사용
myEvent.once('event2', ()=> {
  console.log('event2 발생!');
});
myEvent.emit('event2');
myEvent.emit('event2');


myEvent.on('event3', ()=> {
  console.log('event3 발생!');
})

myEvent.on('event3', () => {
  console.log('event3 추가발생!');
})

myEvent.emit('event3');

const listener = () => {
  console.log('event4 발생');
}

myEvent.on('event4', listener);
myEvent.emit('event4');
// listener 값 삭제
myEvent.removeListener('event4', listener);
myEvent.emit('event4');

myEvent.removeAllListeners('event3');
console.log('event3');

myEvent.on('evnet4', listener);
console.log('event4');

myEvent.off('event4');
console.log('event4');

