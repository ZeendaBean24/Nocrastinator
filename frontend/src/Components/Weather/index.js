import React, {useState, useEffect} from 'react'
import { WeatherContainer, TopBar, CityInput, SearchIcon, WeatherImage, WeatherTemp, WeatherLocation, DataContainer, HumidityElement, WindElement, WeatherData, HumidityPercent, WeatherText, WeatherIcon, WindRate } from './styles'

import search_icon from '../../assets/search.png'
import clear_icon from '../../assets/clear.png'
import cloud_icon from '../../assets/cloud.png'
import drizzle_icon from '../../assets/drizzle.png'
import rain_icon from '../../assets/rain.png'
import snow_icon from '../../assets/snow.png'

function WeatherApp( {theme} ) {

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
    <WeatherContainer theme={theme}>
        <TopBar>
            <CityInput type="text" value={inputVal} onChange={handleSearch}/>
            <SearchIcon onClick={() => {Search()}}>
                <img src={search_icon} alt="" style={{ width: "0.8em", height: "0.8em" }}/>
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
                <WeatherIcon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path d="M15.0066 3.25608C16.8483 2.85737 19.1331 2.8773 22.2423 3.65268C22.7781 3.78629 23.1038 4.32791 22.9699 4.86241C22.836 5.39691 22.2931 5.7219 21.7573 5.58829C18.8666 4.86742 16.9015 4.88747 15.4308 5.20587C13.9555 5.52524 12.895 6.15867 11.7715 6.84363L11.6874 6.89494C10.6044 7.55565 9.40515 8.28729 7.82073 8.55069C6.17734 8.82388 4.23602 8.58235 1.62883 7.54187C1.11607 7.33724 0.866674 6.75667 1.0718 6.24513C1.27692 5.73359 1.85889 5.48479 2.37165 5.68943C4.76435 6.6443 6.32295 6.77699 7.492 6.58265C8.67888 6.38535 9.58373 5.83916 10.7286 5.14119C11.855 4.45445 13.1694 3.6538 15.0066 3.25608Z" fill="#003366"></path> <path d="M22.2423 7.64302C19.1331 6.86765 16.8483 6.84772 15.0066 7.24642C13.1694 7.64415 11.855 8.44479 10.7286 9.13153C9.58373 9.8295 8.67888 10.3757 7.492 10.573C6.32295 10.7673 4.76435 10.6346 2.37165 9.67977C1.85889 9.47514 1.27692 9.72393 1.0718 10.2355C0.866674 10.747 1.11607 11.3276 1.62883 11.5322C4.23602 12.5727 6.17734 12.8142 7.82073 12.541C9.40515 12.2776 10.6044 11.546 11.6874 10.8853L11.7715 10.834C12.895 10.149 13.9555 9.51558 15.4308 9.19621C16.9015 8.87781 18.8666 8.85777 21.7573 9.57863C22.2931 9.71224 22.836 9.38726 22.9699 8.85275C23.1038 8.31825 22.7781 7.77663 22.2423 7.64302Z" fill="#003366"></path> 
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9998 10.0266C18.6526 10.0266 18.3633 10.2059 18.1614 10.4772C18.0905 10.573 17.9266 10.7972 17.7089 11.111C17.4193 11.5283 17.0317 12.1082 16.6424 12.7555C16.255 13.3996 15.8553 14.128 15.5495 14.8397C15.2567 15.5213 14.9989 16.2614 14.9999 17.0117C15.0006 17.2223 15.0258 17.4339 15.0604 17.6412C15.1182 17.9872 15.2356 18.4636 15.4804 18.9521C15.7272 19.4446 16.1131 19.9674 16.7107 20.3648C17.3146 20.7664 18.0748 21 18.9998 21C19.9248 21 20.685 20.7664 21.2888 20.3648C21.8864 19.9674 22.2724 19.4446 22.5192 18.9522C22.764 18.4636 22.8815 17.9872 22.9393 17.6413C22.974 17.4337 22.9995 17.2215 22.9998 17.0107C23.0001 16.2604 22.743 15.5214 22.4501 14.8397C22.1444 14.128 21.7447 13.3996 21.3573 12.7555C20.968 12.1082 20.5803 11.5283 20.2907 11.111C20.073 10.7972 19.909 10.573 19.8382 10.4772C19.6363 10.2059 19.3469 10.0266 18.9998 10.0266ZM20.6119 15.6257C20.3552 15.0281 20.0049 14.3848 19.6423 13.782C19.4218 13.4154 19.2007 13.0702 18.9998 12.7674C18.7989 13.0702 18.5778 13.4154 18.3573 13.782C17.9948 14.3848 17.6445 15.0281 17.3878 15.6257L17.3732 15.6595C17.1965 16.0704 16.9877 16.5562 17.0001 17.0101C17.0121 17.3691 17.1088 17.7397 17.2693 18.0599C17.3974 18.3157 17.574 18.5411 17.8201 18.7048C18.06 18.8643 18.4248 19.0048 18.9998 19.0048C19.5748 19.0048 19.9396 18.8643 20.1795 18.7048C20.4256 18.5411 20.6022 18.3156 20.7304 18.0599C20.8909 17.7397 20.9876 17.3691 20.9996 17.01C21.0121 16.5563 20.8032 16.0705 20.6265 15.6597L20.6119 15.6257Z" fill="#003366"></path> 
                        <path d="M14.1296 11.5308C14.8899 11.2847 15.4728 12.076 15.1153 12.7892C14.952 13.1151 14.7683 13.3924 14.4031 13.5214C13.426 13.8666 12.6166 14.3527 11.7715 14.8679L11.6874 14.9192C10.6044 15.5799 9.40516 16.3115 7.82074 16.5749C6.17735 16.8481 4.23604 16.6066 1.62884 15.5661C1.11608 15.3615 0.866688 14.7809 1.07181 14.2694C1.27694 13.7578 1.8589 13.509 2.37167 13.7137C4.76436 14.6685 6.32297 14.8012 7.49201 14.6069C8.67889 14.4096 9.58374 13.8634 10.7286 13.1654C11.8166 12.5021 12.9363 11.9171 14.1296 11.5308Z" fill="#003366"></path> 
                    </g>
                </WeatherIcon>
                <WeatherData>
                    <HumidityPercent>{humidityVal} %</HumidityPercent>
                    <WeatherText>Humidity</WeatherText>
                </WeatherData>
            </HumidityElement>
            <WindElement>
                <WeatherIcon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 5.5C6.25 3.70508 7.70507 2.25 9.5 2.25C11.2949 2.25 12.75 3.70507 12.75 5.5C12.75 7.29493 11.2949 8.75 9.5 8.75H3C2.58579 8.75 2.25 8.41421 2.25 8C2.25 7.58579 2.58579 7.25 3 7.25H9.5C10.4665 7.25 11.25 6.4665 11.25 5.5C11.25 4.5335 10.4665 3.75 9.5 3.75C8.5335 3.75 7.75 4.5335 7.75 5.5V5.85714C7.75 6.27136 7.41421 6.60714 7 6.60714C6.58579 6.60714 6.25 6.27136 6.25 5.85714V5.5ZM14.25 7.5C14.25 5.15279 16.1528 3.25 18.5 3.25C20.8472 3.25 22.75 5.15279 22.75 7.5C22.75 9.84721 20.8472 11.75 18.5 11.75H2C1.58579 11.75 1.25 11.4142 1.25 11C1.25 10.5858 1.58579 10.25 2 10.25H18.5C20.0188 10.25 21.25 9.01878 21.25 7.5C21.25 5.98122 20.0188 4.75 18.5 4.75C16.9812 4.75 15.75 5.98122 15.75 7.5V8C15.75 8.41421 15.4142 8.75 15 8.75C14.5858 8.75 14.25 8.41421 14.25 8V7.5ZM3.25 14C3.25 13.5858 3.58579 13.25 4 13.25H18.5C20.8472 13.25 22.75 15.1528 22.75 17.5C22.75 19.8472 20.8472 21.75 18.5 21.75C16.1528 21.75 14.25 19.8472 14.25 17.5V17C14.25 16.5858 14.5858 16.25 15 16.25C15.4142 16.25 15.75 16.5858 15.75 17V17.5C15.75 19.0188 16.9812 20.25 18.5 20.25C20.0188 20.25 21.25 19.0188 21.25 17.5C21.25 15.9812 20.0188 14.75 18.5 14.75H4C3.58579 14.75 3.25 14.4142 3.25 14Z" fill="#003366"></path> 
                    </g>
                </WeatherIcon>
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