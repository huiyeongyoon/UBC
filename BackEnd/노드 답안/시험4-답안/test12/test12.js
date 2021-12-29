// 1. fs watch로 target.txt  변경 감시 만들기
// 2. 콜백함수에서, eventType, filename을 콘솔에 출력하기

const { watch }= require('fs')
watch('./target.txt', (eventType, filename) => {
  console.log(eventType, filename)
})
