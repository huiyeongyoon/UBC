//1. EventEmitter 객체를 변수 myEvent에 담는다.
const EventEmitter = require('events')
const myEvent = new EventEmitter()
//2. event1 이벤트 리스너를 만들고, 콜백 함수에서는 "이벤트 1 발생!"을 출력한다.
myEvent.on('event1', () => {
  console.log("이벤트 1 발생!")
} )
//3. event2 이벤트 리스너를 만들고, 콜백 함수에서는 "이벤트 2 발생!"을 출력한다.
myEvent.on('event2', () => {
  console.log("이벤트 2 발생!")
} )
//4. event3 한번만 발생하는 이벤트 리스너를 만들고, 콜백 함수에서는 "이벤트 3 발생!"을 출력한다.
myEvent.once('event3', () => {
  console.log("이벤트 3 발생!")
} )
//5. event2 이벤트 리스너를 추가적으로 만들고, 콜백 함수에서는 "이벤트 2 추가 발생!"을 출력한다.
myEvent.on('event2', () => {
  console.log("이벤트 2 추가 발생!")
} )
//6. emit으로 event1, event2, event3을 두번씩 발생시킨다.
myEvent.emit('event1')
myEvent.emit('event1')
myEvent.emit('event2')
myEvent.emit('event2')
myEvent.emit('event3')
myEvent.emit('event3')
//7. event2 이벤트 리스너 개수를 출력한다.
myEvent.listenerCount('event2')
//8. event2 이벤트 리스너를 삭제하고, event2 이벤트를 발생시킨다.
myEvent.removeAllListeners('event2')
myEvent.emit('event2')
//9. 이름이 listener인 함수를 만들어서, "나는 이벤트 리스너 함수야!" 를 출력하게 한다.
const listener = () => {
  console.log("나는 이벤트 리스너 함수야!")
}
//10. event4 이벤트 리스너를 추가하고, 콜백함수로 listener를 사용한다.
myEvent.on('event4', listener)
//11. event4 이벤트를 발생시킨다.
myEvent.emit('event4')

