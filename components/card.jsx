//const [] = useState()



    const description = weather.weather[0].main || "Unknown";
    const tempCelsius = Math.floor(weather.main.temp) || "Unknown"; 
    const humidity = weather.main.humidity  || "Unknown";
    const feels_like = weather.main.feels_like;
    const windSpeed = weather.wind.speed; 

