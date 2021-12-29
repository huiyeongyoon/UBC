const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers.cookie);
  res.writeHead(200, {'Set-cookie': 'mycookie=test'})
  res.end('cookie example');

})

server.listen(3000);

server.on('listening', () => {
  console.log('3천번 포트에서 쿠키 서버 실행 중');
})

server.on('error', err => {
  console.error(err);
})
