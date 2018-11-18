const request=require('request');

request({
  url:'http://api.openweathermap.org/data/2.5/weather?q=',
  apiKey:'ce48c48752b4a98bb4f7ce86b749954d',
  json:true
},(error,response,body)=>{
  console.log(JSON.stringify(body,undefined,2));
});
