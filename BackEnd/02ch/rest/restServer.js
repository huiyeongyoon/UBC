const http = require('http');
const fs = require('fs').promises

const users = {};

const server = http.createServer(async (req, res) => {

  try {
    // 읽어오기
    if (req.method === 'GET') {
      // req.url '/user/129312341'.splite 
      if (req.url === '/') {
        const data = await fs.readFile('./restFront.html');
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        return res.end(data);
      } else if (req.url === '/about') {
        const data = await fs.readFile('./about.html');
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        return res.end(data);
      } else if (req.url === '/users') {
        res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'})
        return res.end(JSON.stringify(users));
      }
      try {
        const data = await fs.readFile(`./${req.url}`);
        return res.end(data);
      } catch (error) {
        console.error(error);
      }
    } 
    // 입력
    if (req.method === 'POST') {
      if (req.url === '/user') {
        let body = '';

        req.on('data', (data) => {
          body += data; 
        })
        return req.on('end', ()=> {
          console.log('POST 본문(body)', body);
          const { name } = JSON.parse(body);
          const id = Date.now();
          users[id] = name; // string 일 떄는 이런식만 가능
          // user.id key값이 id
          // user[id] id라는 문자열 변수를 받아온다
          console.log(users);
          res.writeHead(201, {'Content-Type': 'text/plain; charset-utf-8'})
          res.end('ok')
        })
      }
    }
    // 수정 (전체)  patch의 경우 한개만 수정할때 사용 한다
    if (req.method === 'PUT') {
      if (req.url.startsWith('/user/')) {
        const key = req.url.split('/')[2]
        let body = '';
        req.on('data', (data) => {
          body += data;
        })
        return req.on('end', ()=> {
          console.log('put 본문', body);
          users[key] = JSON.parse(body).name;
          res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})
          res.end('ok');
        })
      }
    }
    // 삭제
    if (req.method === 'DELETE') {
      if(req.url.startsWith('/user/')) {
        const key = req.url.split('/')[2];
        delete users[key];
        res.writeHead(200, { 'Content-Type' : 'text/plain; charset=utf-8'});
        return res.end('ok');
      }
    }
  } catch(error) {
    console.error(error);
    res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'})
    res.end(error.message);
  }
})

server.listen(3000);

server.on('listening', () => {
  console.log('3000번 포트에서 실행 중');
})

server.on('error', (error)=> {
  console.error(error);
})