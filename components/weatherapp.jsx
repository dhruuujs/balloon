import React,{useEffect, useState} from 'react'
import sun from "../src/assets/sun.svg"
import rain from '../src/assets/rain.svg'
import cloudy from '../src/assets/cloudy.svg'
import humidityImg from '../src/assets/humidity.svg'
import windImg from '../src/assets/wind.svg'
import presssureImg from '../src/assets/pressure.svg'



function WeatherApp(){
    const [city,setCity] = useState("");
    const [countryCode,setCountryCode] = useState("IN")
    const [weatherData,setWeatherData] = useState(false);
    const [loading,setLoading] = useState(null);
    const [error,setError] = useState("No error");

    const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';
    const api_key = "0c3f86866602c021b5df2e8ada1c1b12"


    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();


{/*
    const fetchWeather = async()=>{
    const apiurl = `${BASE_URL}?q=${city},${countryCode}&appid=${API_KEY}`

        //setLoading(true)
        //setError("No error")
    try{
        const response = await fetch(apiurl)
        const data = await response.json();
        setWeatherData({
            temp: data.main.temp,
            humidity: data.main.humidity,
            wind:data.main.wind.speed
        });

    }catch(err){
        setError(err.message)
        }
    }
*/}


const appIcons={
    "01d": sun,
    "01n": sun,
    "02d": cloudy,
    "02n": cloudy,
    "03n": cloudy,
    "03d": cloudy,
    "04d": rain,
    "04n": rain,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": cloudy,
    "13d": cloudy,//snow
    "13n": cloudy,//snow
}


   const search = async (city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`
         try{
            const response = await fetch(url);
            const data = await response.json();
            const icon = appIcons[data.weather[0].icon] || clear_icon
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                desc: data.weather[0].main,
                tempCelsius: data.main.temp,
                location: data.name,
                pressure: data.main.pressure,
                feels_like:data.main.feels_like,
                icon: icon
            });
            console.log(data);
        }catch(err){
            setError(err);
        }
    }



useEffect(()=>{
    search("New York");
},[])


let formatTime=()=>{ 
    if(hrs>12 && hs<11){
        return "PM" 
    }else{ 
        return "AM";} 
}
    return(
        <>
        <section className="h-[10vh] w-screen bg-[#222] flex place-content-around">
         <div className=" ml-4">
            <h2 className="font-[Lato] mt-4 text-3xl font-black">Balloon</h2>
        </div>

        <div>              
        <input type="text" 
            id="searchCityBar"
            placeholder="Enter city name" 
            onChange={(e)=>{setCity(e.target.value)}}
            className="mt-6 h-8 w-2xs outline-0"/>
        
        <button id="searchBtn"
        className="bg-amber-400 h-8 w-auto rounded-r-sm" 
        onClick={void(0)} 
        disabled={loading}>
            {loading ? "Fetching" : "Get Weather"}
        </button>
        </div>
        </section>
    
    
<div className="m-auto">    
  <section id="weatherCard" className="h-[545px] w-[1026px] p-6 rounded-[30px] mt-10">
        <div className="currentTime overflow-hidden">
            <h2 className="mt-2 ml-5 font-[Lato] font-bold text-[1.5em] text-gray-950">Current Weather at 
                <span className="font-bold"> {weatherData.location}</span>
            </h2>
            <h3 className="ml-5 text-gray-950 font-[Lato] font-medium text-xl">{hrs+":"+min}{formatTime}</h3>
        </div>

        <div className="weatherInfo font-[Montserrat] mt-15 ml-10 text-gray-950 flex">
            <img src={weatherData.icon}
            className="h-32 w-32 mt-3"/>
            <h1 className="font-extrabold ml-3 mt-7 text-8xl">{Math.ceil(weatherData.tempCelsius)}</h1>
        
        <div className="flex flex-col">
            <h2 className="font-extrabold mt-6 ml-4 text-6xl">{weatherData.desc}</h2>
            <h2 className="text-3xl ml-4 font-semibold">Feels like {Math.floor(weatherData.feels_like)}°</h2>
        </div>
        </div>
   
    <div className="extraInfo ml-5 mt-30 flex justify-evenly">
        <div className="humidityBox">
            <img src={humidityImg}/>
            <span className="font-medium text-2xl text-[#111111]">{weatherData.humidity}%</span>
            <br/>
            <span className="text-[#111111] font-bold">Humidity</span>
        </div>

        <div className="humidityBox">
            <img src={windImg}/>
            <span className="font-medium text-2xl text-[#111111]">{weatherData.windSpeed}km/hr</span>
            <br/>
            <span className="text-[#111111] font-bold">Wind Speed</span>
        
        </div>
        
        <div className="humidityBox">
            <img src={presssureImg} className="h-11 mt-0.5"/>
            <span className="font-medium text-2xl text-[#111111]">{weatherData.pressure} mm/bar</span>
            <br/>
            <span className="text-[#111111] font-bold">Pressure</span>
        </div>
    </div>       
    </section>
 </div>
</>
    )
}

export default WeatherApp;
