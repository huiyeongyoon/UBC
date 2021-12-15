const crypto = require('crypto');

console.log('base64', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('hex', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));

// sha512 = 알고리즘, 높을수록 좋다
// update = 암호를 쓰면 변화를 해준다
// hex, base64 = 암호화를 해놓은걸 인코딩작업
// base64가 더 짧아서 더 선호함
// 어떤 길이가 들어가더라도 base64는 길이가 똑같다