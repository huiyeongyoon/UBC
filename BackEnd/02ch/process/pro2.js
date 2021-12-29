let i = 0;

setInterval(() => {
  if(i === 5){
    console.log('끝');
    process.exit();
  }
  i += 1;
  console.log(i);
}, 1000);