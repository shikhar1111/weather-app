const request=require('request');
var geocodeAddress=(address,callback)=>{
  var apiKey='ce48c48752b4a98bb4f7ce86b749954d';
  request({
url:`http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${apiKey}`,
      json:true
  },(error,response,body)=>{
    if(error){
      callback('unable to connect to service');
    } else{
      callback(undefined,{
        Temperature: body.main.temp,
        city: body.name
      });
    }
  });

};
module.exports.geocodeAddress=geocodeAddress;
//c8b1151ff103529500510566daacacbd
