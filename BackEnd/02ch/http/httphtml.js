const http = require('http');
const fs = require('fs').promises; // 문서 가져올때 사용하는거

// html문서를 불러오기
const server = http.createServer(async (req, res) => {
  try {
    throw new Error('');
    const data = await fs.readFile('./index.html');
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(data);
  } catch (err) {
    console.error(err);
    res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(`<p>${err.message}</p>`)
  }
})

server.listen(3000);

server.on('listening', ()=> {
  console.log('서버 3000번 실행 하고 있음');
})

