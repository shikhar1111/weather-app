const request =require('request');
var getWeather=(lat,lng,callback)=>{
request({
  url:`https://api.darksky.net/forecast/c8b1151ff103529500510566daacacbd/${lat},${lng}`,
  json:true
},(error,response,body)=>{
  if(error){
    callback('unable to connect to forecast service');
  } else if(response.statusCode===400){
    callback('unable to fetch');
  } else if(response.statusCode===200){
    callback(undefined,{
      temperature:body.currently.temperature,
      apparentTemperature:body.currently.apparentTemperature
    });
}
});
};
module.exports.getWeather=getWeather;
