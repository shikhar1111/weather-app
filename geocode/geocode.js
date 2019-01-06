const request=require('request');
var geocodeAddress=((address,callback)=>{
  var apiKey='4385ac591d5d559bb83d54f040417abd';
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

});
module.exports.geocodeAddress=geocodeAddress;
//c8b1151ff103529500510566daacacbd
