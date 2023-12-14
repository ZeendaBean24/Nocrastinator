import styled from "styled-components";

// Light theme styles
export const LightClockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 10vh;
  border-radius: 50px;
  background-color: powderblue;
  position: relative;
  box-shadow: 30px 30px 30px -10px rgba(0, 0, 0, 0.15),
      inset 15px 15px 10px rgba(255, 255, 255, 0.75),
      -15px -15px 35px rgba(255, 255, 255, 0.55),
      inset -1px -1px 10px rgba(0, 0, 0, 0.2);
`;

export const LightClockText = styled.h1`
  font-size: 3rem; /* Adjust the font size as needed */
  color: midnightblue; /* Text color is midnight blue */
  text-align: center; /* Center-align the text horizontally */
  padding: 20px; /* Add padding to the text for better appearance */
  border-radius: 50px;
  position: relative; /* Enable positioning */
  text-shadow: 2px 3px 6px 
            rgba(0, 0, 0, 0.5),  
            -2px -2px 0 
            rgba(255, 255, 255, 0.8); 
`;

// Dark theme styles with a larger gleam at the top left corner
export const DarkClockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 10vh;
  border-radius: 50px;
  background-color: midnightblue;
  position: relative;
  box-shadow:
    15px 25px 20px rgba(0, 0, 0, 0.2), /* Outer shadow */
    -10px -10px 20px rgba(255, 255, 255, 0.1); /* Inner shadow */

  &:before {
    content: '';
    position: absolute;
    top: -20px; /* Adjust the top position to make the gleam larger */
    left: -20px; /* Adjust the left position to make the gleam larger */
    right: 5px;
    bottom: 5px;
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.05), rgba(255, 255, 255, 0.05));
    border-radius: 50px;
    z-index: -1;
  }
`;

export const DarkClockText = styled.h1`
  font-size: 3rem; /* Adjust the font size as needed */
  color: powderblue; /* Text color is midnight blue */
  text-align: center; /* Center-align the text horizontally */
  padding: 20px; /* Add padding to the text for better appearance */
  border-radius: 50px;
  position: relative; /* Enable positioning */
  text-shadow: 3px 5px 3px 
            rgba(0, 0, 0, 0.5),  
            -2px -2px 6px
            rgba(255, 255, 255, 0.8)
`;