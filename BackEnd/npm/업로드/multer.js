const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');


const upload = multer({
  storage: multer.diskStorage({
    // 함수 형태
    destination(req, file, done) {
      done(null, '../uploads/') //에러 파일저장경로
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 파일의 확장자 를 가져오는 것 
      done(null, path.basename(file.originalname, ext) + Date.now() + ext); // 현재 경로이름
    },
    limits: {fileSize: 5 * 1024 * 1024}
  })
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'multi.html'))
})

app.post('/upload', upload.single('image'), (req, res)=> {
  console.log(req.file, req.body);
  res.redirect('/');
} )

app.listen(3000, ()=> {
  console.log('3000 multer 파일 서버');
});

