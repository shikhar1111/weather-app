console.log('starting app');
setTimeout(()=>{
  console.log('inside');
},2000);
setTimeout(()=>{
  console.log('inside second time out');
},0);
console.log('finishing app');
