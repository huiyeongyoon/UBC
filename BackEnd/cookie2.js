const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

const parseCookie = (cookie = '') =>{
    return cookie
        .split('.')
        .map(v => v.split('='))
        .reduce((acc, [k, v]) => {
            console.log(k, v);
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});
};

const server = http.createServer(async (req, res) => {
    const cookies = parseCookie(req.headers.cookie);
    if(req.url.startsWith('/login')){
        console.log("url", req.url);
        const {query} = url.parse(req.url);
        console.log(query);
        const {name} = qs.parse(query);
        console.log(name);
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 1);

        res.writeHead(302 ,{
            Location: '/',
            'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; httpOnly;path=/`});
        res.end();
    }else if(cookies.name){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(`<h1>${cookies.name}님 안녕하세요</h1>`);
    }else{
        try{
            const data = await fs.readFile('./cookie2.html');
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(data);
        }catch(err){
            res.writeHead(500);
            res.end();
        }
    }
});

server.listen(3000, () => {
    console.log('3000번 포트에서 대기중입니다');
});