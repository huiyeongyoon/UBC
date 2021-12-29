const buffer = Buffer.from('버퍼로 바뀔 꺼에요!')
console.log("from():", buffer)
console.log("length():", buffer.length)
console.log(buffer.toString())

const array = [ 
  Buffer.from('버퍼 하나 '), 
  Buffer.from('버퍼 둘 '),
  Buffer.from('버퍼 마지막')
]

const buffer2 = Buffer.concat(array)
console.log("concat():", buffer2.toString())
const buffer3 = Buffer.alloc(10)
console.log(buffer3)