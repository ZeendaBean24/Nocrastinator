import styled from "styled-components";

const neumorphicShadow = `
  box-shadow: 
    8px 8px 15px #a7aad1, // Darker shadow on one side
    -8px -8px 15px #ffffff; // Lighter shadow on the opposite side
`;

const textShadow = `
  text-shadow:
    1px 1px 2px #003366, // Black shadow for depth
    0 0 1em #003366, // Soft glow for 3D effect
    0 0 0.2em #003366; // Sharp line to enhance 3D effect
`;

export const WeatherContainer = styled.div`
    width: 9.375rem;
    height: 14.6875rem;
    font-size: 12px;
    margin-top: 1.25em;
    border-radius: 12px;
    background: #e0e5ec; // Light blueish-grey for neumorphic background
    ${neumorphicShadow}
`;

export const TopBar = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.825em;
    padding-top: 1.275em;
`;

export const CityInput = styled.input`
    display: flex;
    width: 7.1875em;
    height: 2.34375em;
    background: #e0e5ec;
    border: none;
    outline: none;
    border-radius: 2.5em;
    padding-left: 1.25em;
    color: #003366; // Midnight blue color
    font-size: 0.875em;
    font-weight: 400;
    ${textShadow}
    ${neumorphicShadow}
`;

export const SearchIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.34375em;
    height: 2.34375em;
    background: #e0e5ec;
    border-radius: 2.5em;
    cursor: pointer;
    ${neumorphicShadow}
`;

export const WeatherImage = styled.div`
    margin-top: 0.25em;
    display: flex;
    height: 4.25em;
    justify-content: center;
    align-content: center;
`;

export const WeatherTemp = styled.div`
    display: flex;
    justify-content: center;
    color: #003366; // Midnight blue color
    height: 1.075em;
    font-size: 2em;
    font-weight: 400;
    ${textShadow}
`;

export const WeatherLocation = styled.div`
    display: flex;
    justify-content: center;
    color: #003366; // Midnight blue color
    height: 1.25em;
    font-size: 0.9375em;
    margin-top: 0.1em;
    font-weight: 400;
    ${textShadow}
`;

export const DataContainer = styled.div`
    margin-top: 0.9625em;
    color: #003366; // Midnight blue color
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.6375em;
    ${textShadow}
`;

export const HumidityElement = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 0.9375em;
`;

export const WindElement = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 0.9375em;
`;

export const WeatherData = styled.div`
    font-size: 0.875em;
    font-weight: 400;
    color: #003366; // Midnight blue color
    ${textShadow}
`;

export const HumidityPercent = styled.div`
    // Additional styling if needed
`;

export const WindRate = styled.div`
    // Additional styling if needed
`;

export const WeatherText = styled.div`
    font-size: 0.875em;
    font-weight: 400;
    color: #003366; // Midnight blue color
    ${textShadow}
`;

export const WeatherIcon = styled.img`
    margin-top: 0.625em;
    width: 1.5625em;
    // Add neumorphic effect if the icon needs it
`;
