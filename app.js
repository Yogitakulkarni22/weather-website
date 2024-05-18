// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '763074c72amsh88fa8345d8b36fap11904djsn595444c1cc67',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

let weather_icon=document.querySelector("#weather_icon");
let temp=document.querySelector("#temp");
const getWeather=(city)=>{
cityname.innerHTML=city.toUpperCase();
 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	 .then(response=>response.json())
	 .then(response=>
		{console.log(response)
	
	temp.innerHTML=response.temp+'°C'
	feels_like.innerHTML=response.feels_like+'°' 
	humidity.innerHTML=response.humidity+'%'
	wind_speed.innerHTML=response.wind_speed
	sunrise.innerHTML=response.sunrise
	sunset.innerHTML=response.sunset

	let temperature = parseInt(response.temp); 

	if (temperature >= 0 && temperature <= 15) {
		weather_icon.src = "snow1.png";
	} else if (temperature > 15 && temperature <= 27) {
		weather_icon.src = "rain.png";
	} else if (temperature > 27 && temperature <= 35) {
		weather_icon.src = "cloud.png";
	} else if (temperature > 35 && temperature <= 50) {
		weather_icon.src = "sun1.webp";
	} else {
		weather_icon.src = ""; 
	}
})
     .catch (err=>console.error(err)); 
	 
}
submit.addEventListener("click",(e)=>
{
	e.preventDefault();
	getWeather(entercity.value)
})