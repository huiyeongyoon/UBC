console.log(this) // 빈객체
console.log(this === module.exports) // this 는 module.exports 다


// global
function a() {
    console.log(this === global);
}
a()