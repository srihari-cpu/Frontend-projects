const apiKey="57d062e457ffe3d28e075b06eefa1325";
const apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&q=germany';
//const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather(){
  const response=await fetch(apiUrl+`&app=${apiKey}`);
  var data=await response.json();

  console.log(data);
}

checkWeather()