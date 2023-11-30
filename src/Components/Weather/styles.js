import styled from "styled-components";

export const WeatherContainer = styled.div`
    width: 607px;
    height: 829px;
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
    gap: 14px;
    padding-top: 60px;
`

export const CityInput = styled.input`
    display: flex;
    width: 362px;
    height: 78px;
    background: #ebfffc;
    border: none;
    outline: none;
    border-radius: 40px;
    padding-left: 40px;
    color: #626262;
    font-size: 20px;
    font-weight: 400;
`

export const SearchIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 78px;
    height: 78px;
    background: #ebfffc;
    border-radius: 40px;
    cursor: pointer;
`
export const WeatherImage = styled.div`
    margin-top: 29px;
    display: flex;
    justify-content: center;
`

export const WeatherTemp = styled.div`
    display: flex;
    justify-content: center;
    color: white;
    font-size: 120px;
    font-weight: 400;
`

export const WeatherLocation = styled.div`
    display: flex;
    justify-content: center;
    color: white;
    font-size: 60px;
    font-weight: 400;
`

export const DataContainer = styled.div`
    margin-top: 50px;
    color: white;
    display: flex;
    justify-content: center;
`

export const WeatherElement = styled.div`
    margin: auto;
    display: flex;
    align-items: flex-start;
    gap: 12px;
`

export const WeatherData = styled.div`
    font-size: 34px;
    font-weight: 400;
`

export const HumidityPercent = styled.div`

`

export const WindRate = styled.div`

`

export const WeatherText = styled.div`
    font-size: 20px;
    font-weight: 400;
`

export const WeatherIcon = styled.img`
    margin-top: 10px;
`