import styled from "styled-components";

export const WeatherContainer = styled.div`
    width: 150px;
    height: 235px;
    margin: auto;
    font-size: 12px;
    margin-top: 1.25em; /* Adjusted margin in em */
    border-radius: 12px;
    background-image: linear-gradient(180deg, #130754 0%, #3b2f80 100%);
`

export const TopBar = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.825em; /* Adjusted gap in em */
    padding-top: 1.275em; /* Adjusted padding in em */
`

export const CityInput = styled.input`
    display: flex;
    width: 7.1875em; /* Adjusted width in em */
    height: 2.34375em; /* Adjusted height in em */
    background: #ebfffc;
    border: none;
    outline: none;
    border-radius: 2.5em; /* Adjusted border-radius in em */
    padding-left: 1.25em; /* Adjusted padding in em */
    color: #626262;
    font-size: 0.875em; /* Relative font size in em */
    font-weight: 400;
`

export const SearchIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.34375em; /* Adjusted width in em */
    height: 2.34375em; /* Adjusted height in em */
    background: #ebfffc;
    border-radius: 2.5em; /* Adjusted border-radius in em */
    cursor: pointer;
`

export const WeatherImage = styled.div`
    margin-top: 0.25em; /* Adjusted margin in em */
    display: flex;
    height: 4.25em; /* Adjusted height in em */
    justify-content: center;
    align-content: center;
`

export const WeatherTemp = styled.div`
    display: flex;
    justify-content: center;
    color: white;
    height: 1.075em; /* Adjusted height in em */
    font-size: 2em; /* Relative font size in em */
    font-weight: 400;
`

export const WeatherLocation = styled.div`
    display: flex;
    justify-content: center;
    color: white;
    height: 1.25em; /* Adjusted height in em */
    font-size: 0.9375em; /* Relative font size in em */
    margin-top: 0.1em;
    font-weight: 400;
`

export const DataContainer = styled.div`
    margin-top: 0.9625em; /* Adjusted margin in em */
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.6375em; /* Adjusted gap in em */
`

export const HumidityElement = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 0.9375em; /* Adjusted gap in em */
`

export const WindElement = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 0.9375em; /* Adjusted gap in em */
`

export const WeatherData = styled.div`
    font-size: 0.875em; /* Relative font size in em */
    font-weight: 400;
`

export const HumidityPercent = styled.div`

`

export const WindRate = styled.div`

`

export const WeatherText = styled.div`
    font-size: 0.875em; /* Relative font size in em */
    font-weight: 400;
`

export const WeatherIcon = styled.img`
    margin-top: 0.625em; /* Adjusted margin in em */
    width: 1.5625em; /* Adjusted width in em */
`
