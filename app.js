const yargs=require('yargs');
const geocode=require('./geocode/geocode.js');
// const weather=require('./weather/weather.js');
const argv=yargs
.options({
a:{
  demand:true,
  alias:'address',
  describe:'address to fetch weather for',
  string:true
}
})
.help()
.alias('help','h')
.argv;
geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
  if(errorMessage){
  console.log(errorMessage);
} else{
  console.log(`The Temperature of ${results.city} is ${results.Temperature}°C`);
}
});
// weather.getWeather(20.5937,78.9629,(errorMessage,weatherResults)=>{
//   if(errorMessage){
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(weatherResults,undefined,2));
//   }
// });
