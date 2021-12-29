const path = require('path'); // 리눅스에 실행시 / \ 구별이 안되서 구별 하려고 사용한다
const express = require('express'); // 1익스프레스 가져오기
const morgan = require('morgan'); // 로그 정보 가져오기 위하여 사용
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();  // 2익스프레스 호출

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public'))); // 정적파일 접근 가능하게 사용
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
  name: 'session-cookie',
}));

app.set('port', 3000); // 3 키 벨류 형태로 데이터를 저장 

app.get('/', (req, res) => { // 6 주소 라우터 콜백
  // res.send('Hello, Express!');
  // throw new Error('에러롤 미들웨어에서');
  res.sendFile(path.join(__dirname, 'index.html')); // 파일경로 + 파일이름
});
app.use((err, req, res, next) => {
  console.error(err);
  res.send(err.message);
});

const port = app.get('port'); // 3 포트번호 담기 (set에 저장되어 있는 데이터를 불러 올 수 있다)
app.listen(port, ()=> { // 5 서버 실행
  console.log(port, '번에서 서버 실행중!');
});