const express = require('express');
const app = express();
const indexRouter = require('./routes');
const userRouter = require('./routes/user');

app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(3000, () => {
  console.log('3000번 포트에서 서버 실행중 ');
})