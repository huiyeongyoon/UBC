const http = require('http');


// 파일내에 html 
const server = http.createServer((request, response) => {
      response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8' });
      response.write('<h1>헬로우 노드! 윤희영</h1>');
      response.end('<p>헬로우 메타캠프!</p>');
    })
server.listen(3000);

// 이벤트 리스너 방식
server.on('listening', ()=> {
  console.log('포트 3000번으로 실행하고 있음!');
})

server.on('error', (error) => {
  console.error(error);
})

// 콜백 방식
// .listen(3000, () => {
//   console.log('포트 3000번으로 실행하고 있음!')
// })

