// var asyncAdd=(a,b)=>{
//   return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     if(typeof a==='number' && typeof b==='number'){
//       resolve(a+b);
//     } else {
//       reject('sorry');
//     }
//   },1500);
//   });
// };
// asyncAdd(4,5).then((res)=>{
//   console.log('result',res);
//   return asyncAdd(res,'33');
// }).then((res)=>{
//   console.log('should be 45',res);
// }).catch((errorMessage)=>{
//   console.log(errorMessage);
// });
var somePromise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
  resolve('hey it worked');
  reject('unable to fulfill promise');
},2000);
});
somePromise.then((message)=>{
  console.log('success',message);
},(errorMessage)=>{
  console.log('error:',errorMessage);
});
