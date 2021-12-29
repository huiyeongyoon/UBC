const express = require('express');

const router = express.Router();
router.get('/', (req, res) => {
  res.send('Hello User!!');
})

//  :변수명 === 파라미터
router.get('/:id', (req, res) => {
  console.log(req.params.id);
  res.send(req.params.id);
})

router.get('/test', (req, res) => {
  res.send('Hello test!!');
})

module.exports = router