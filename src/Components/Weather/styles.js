import styled from "styled-components";

export const WeatherContainer = styled.div`
    width: 225px;
    height: 400px;
    /* width: 300px;
    height: 600px; */
    margin: auto;
    margin-top: 20px;
    border-radius: 12px;
    background-image: linear-gradient(180deg, #130754 0%, #3b2f80 100%);
`

export const TopBar = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    padding-top: 30px;
`

export const CityInput = styled.input`
    display: flex;
    width: 110px;
    height: 39px;
    background: #ebfffc;
    border: none;
    outline: none;
    border-radius: 40px;
    padding-left: 20px;
    color: #626262;
    font-size: 12px;
    font-weight: 400;
`

export const SearchIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 39px;
    height: 39px;
    background: #ebfffc;
    border-radius: 40px;
    cursor: pointer;
`
export const WeatherImage = styled.div`
    margin-top: 15px;
    display: flex;
    height: 100px;
    justify-content: center;
    align-content: center;
`

export const WeatherTemp = styled.div`
    display: flex;
    justify-content: center;
    color: white;
    height: 35px;
    font-size: 30px;
    font-weight: 400;
`

export const WeatherLocation = styled.div`
    display: flex;
    justify-content: center;
    color: white;
    height: 25px;
    font-size: 25px;
    font-weight: 400;
`

export const DataContainer = styled.div`
    margin-top: 25px;
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
`

export const HumidityElement = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 15px;
`

export const WindElement = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 15px;
`

export const WeatherData = styled.div`
    font-size: 15px;
    font-weight: 400;
`

export const HumidityPercent = styled.div`

`

export const WindRate = styled.div`

`

export const WeatherText = styled.div`
    font-size: 15px;
    font-weight: 400;
`

export const WeatherIcon = styled.img`
    margin-top: 10px;
    width: 25px;
`