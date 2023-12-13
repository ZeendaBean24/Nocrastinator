import styled from "styled-components";

// Light theme styles
export const LightClockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  /* width: auto;
  height: 20vh; */
  border-radius: 50px;
  background-color: #E5E0FF;
  cursor: pointer;
  position: relative;
  box-shadow: 30px 30px 30px -10px rgba(0, 0, 0, 0.15),
      inset 15px 15px 10px rgba(255, 255, 255, 0.75),
      -15px -15px 35px rgba(255, 255, 255, 0.55),
      inset -1px -1px 10px rgba(0, 0, 0, 0.2);
`;

export const LightClockText = styled.h1`
  border: 2px solid burlywood;
  width: 250px;
  margin: 2vh auto 0px auto;
  border-radius: 15px;
  padding: 10px 0;
  background-color: cornsilk;
  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
  color: sandybrown;
`;

// Dark theme styles
export const DarkClockContainer = styled.div`
  width: auto;
  height: 20vh;
  text-align: center;
  background-color: midnightblue; /* Set dark theme background color */
`;

export const DarkClockText = styled.h1`
  border: 2px solid darkslategray;
  width: 250px;
  margin: 2vh auto 0px auto;
  border-radius: 15px;
  padding: 10px 0;
  background-color: #333; /* Darker background for dark theme */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6); 
  color: white; /* Text color for dark theme */
`;