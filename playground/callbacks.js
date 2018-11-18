var getuser =(id,callback)=>{
  var user={
    id:id,
    name:'shikhar'
  };
  setTimeout(()=>{
  callback(user);
},3000);

};
getuser(31,(userobject)=>{
console.log(userobject);
});
