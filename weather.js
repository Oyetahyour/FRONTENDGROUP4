var inputCity = document.querySelector("#city")
var getWeatherbtn = document.getElementById("getWeather")
var cityNameOutput = document.querySelector('#cityNameOutput')
var description = document.querySelector('#description')
var temperature = document.querySelector('#temperature')
var wind = document.querySelector('#wind')
apik = "1f7a3c47f0571485613606a5a9284580"
function convertion(val)
{
    return (val - 273).toFixed(2)
}

getWeatherbtn.addEventListener('click', function()
{
  fetch('https://api.openweathermap.org/api_keys'+inputCity.value+'&appid='+apik)
  .then(res => res.json())


  .then(data => 
  {
    var nameval = data['name']
    var weatherDesc = data['weather']['0']['description']
    var temperatureVal = data['main']['temp'];
    var wndspd = data['wind']['speed'];

    cityNameOutput.innerHTML=`Weather of <span>${nameval}<span>`
    temperature.innerHTML = `Temperature: <span>${ convertion(temperatureVal)} C</span>`
    description.innerHTML = `Sky Conditions: <span>${weatherDesc}<span>`
    wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`

  })
  .catch(err => alert('You entered Wrong city name'))
})