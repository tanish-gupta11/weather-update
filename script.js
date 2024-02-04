const apiKey = "8db0294bea0fabbb20103491523b4b5b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=lucknow";

const searchBtn = document.querySelector(".search button");
const searchBox = document.querySelector(".search input");

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    var data = await response.json;
    
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/Hr";
};
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});