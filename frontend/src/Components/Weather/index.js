import React, {useState, useEffect} from 'react'
import { WeatherContainer, TopBar, CityInput, SearchIcon, WeatherImage, WeatherTemp, WeatherLocation, DataContainer, HumidityElement, WindElement, WeatherData, HumidityPercent, WeatherText, WeatherIcon, WindRate } from './styles'

import search_icon from '../../assets/search.png'
import clear_icon from '../../assets/clear.png'
import cloud_icon from '../../assets/cloud.png'
import drizzle_icon from '../../assets/drizzle.png'
import rain_icon from '../../assets/rain.png'
import snow_icon from '../../assets/snow.png'
import wind_icon from '../../assets/wind.png'
import humidity_icon from '../../assets/humidity.png'

function WeatherApp() {

    let api_key = "d62fe492c4fd25f79c87d04370f71889";
    const [inputVal, setInputVal] = useState("");

    const [humidityVal, setHumidityVal] = useState("");
    const [windVal, setWindVal] = useState("");
    const [temperatureVal, setTemperatureVal] = useState("");
    const [locationVal, setLocationVal] = useState("");

    const [wicon, setWicon] = useState(cloud_icon);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            fetchWeatherDataByLocation(latitude, longitude);
        }, (error) => {
            console.error("Error getting location: ", error);
        });
    }, []);

    const fetchWeatherDataByLocation = async (lat, lon) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=Metric&appid=${api_key}`;
        let response = await fetch(url);
        let data = await response.json();

        setHumidityVal(Math.floor(data.main.humidity));
        setWindVal(Math.floor(data.wind.speed));
        setTemperatureVal(Math.floor(data.main.temp));
        setLocationVal(data.name);

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n") {
            setWicon(clear_icon);
        }

        else if (data.weather[0].icon==="02d" || data.weather[0].icon==="02n") {
            setWicon(cloud_icon);
        }

        else if (data.weather[0].icon==="03d" || data.weather[0].icon==="03n") {
            setWicon(drizzle_icon);
        }

        else if (data.weather[0].icon==="04d" || data.weather[0].icon==="04n") {
            setWicon(drizzle_icon);
        }

        else if (data.weather[0].icon==="09d" || data.weather[0].icon==="09n") {
            setWicon(rain_icon);
        }

        else if (data.weather[0].icon==="10d" || data.weather[0].icon==="10n") {
            setWicon(rain_icon);
        }

        else if (data.weather[0].icon==="13d" || data.weather[0].icon==="13n") {
            setWicon(snow_icon);
        }

        else {
            setWicon(clear_icon);
        }
    };

    const handleSearch = event => {
        setInputVal(event.target.value)
    }

    const Search = async () => {
        // alert(inputVal)

        if(inputVal==="") {
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();

        setHumidityVal(Math.floor(data.main.humidity));
        setWindVal(Math.floor(data.wind.speed));
        setTemperatureVal(Math.floor(data.main.temp));
        setLocationVal(data.name);

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n") {
            setWicon(clear_icon);
        }

        else if (data.weather[0].icon==="02d" || data.weather[0].icon==="02n") {
            setWicon(cloud_icon);
        }

        else if (data.weather[0].icon==="03d" || data.weather[0].icon==="03n") {
            setWicon(drizzle_icon);
        }

        else if (data.weather[0].icon==="04d" || data.weather[0].icon==="04n") {
            setWicon(drizzle_icon);
        }

        else if (data.weather[0].icon==="09d" || data.weather[0].icon==="09n") {
            setWicon(rain_icon);
        }

        else if (data.weather[0].icon==="10d" || data.weather[0].icon==="10n") {
            setWicon(rain_icon);
        }

        else if (data.weather[0].icon==="13d" || data.weather[0].icon==="13n") {
            setWicon(snow_icon);
        }

        else {
            setWicon(clear_icon);
        }
    }

  return (
    <WeatherContainer>
        <TopBar>
            <CityInput type="text" value={inputVal} onChange={handleSearch}/>
            <SearchIcon onClick={() => {Search()}}>
                <img src={search_icon} alt="" />
            </SearchIcon>
        </TopBar>
        <WeatherImage>
            <img src={wicon} alt="" />
        </WeatherImage>
        <WeatherTemp>
            {temperatureVal} ºC
        </WeatherTemp>
        <WeatherLocation>
            {locationVal}
        </WeatherLocation>
        <DataContainer>
            <HumidityElement>
                <WeatherIcon src={humidity_icon} alt=""/>
                <WeatherData>
                    <HumidityPercent>{humidityVal} %</HumidityPercent>
                    <WeatherText>Humidity</WeatherText>
                </WeatherData>
            </HumidityElement>
            <WindElement>
                <WeatherIcon src={wind_icon} alt=""/>
                <WeatherData>
                    <WindRate>{windVal} km/h</WindRate>
                    <WeatherText>Wind Speed</WeatherText>
                </WeatherData>
            </WindElement>
        </DataContainer>
    </WeatherContainer>
  )
}

export default WeatherApp