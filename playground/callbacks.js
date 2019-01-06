var getuser =(id,callback)=>{
  var user={
    id:id,
    name:'Vikram'
  };
  setTimeout(()=>{
  callbacks(user);
},3000);

};
getuser(31,(userobject)=>{
console.log(userobject);
});
