import styled from "styled-components";

export const ColorOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const LightColorOptionsButton = styled.button`
  cursor: pointer;
  height: 100px;
  width: 100px;
  background-color: #f0f0f0;
  border-radius: 50%;
  border: none;
  outline: none;
  position: relative;
  transition: all 0.3s ease-in-out;
  box-shadow:
    -10px -10px 20px rgba(255, 255, 255, 0.7),
    10px 10px 20px rgba(0, 0, 0, 0.2),
    inset -5px -5px 10px rgba(255, 255, 255, 0.7),
    inset 5px 5px 10px rgba(0, 0, 0, 0.2);

  /* &:hover {
    transform: translateY(-5px);
  } */
`;

export const DarkColorOptionsButton = styled.button`
  cursor: pointer;
  height: 100px;
  width: 100px;
  background-color: #f0f0f0;
  color: #fff; /* Set text color to white */
  border-radius: 50%;
  border: none;
  outline: none;
  position: relative;
  transition: all 0.3s ease-in-out;
  box-shadow:
    -10px -10px 20px rgba(80, 80, 80, 0.7),
    10px 10px 20px rgba(0, 0, 0, 0.2),
    inset -5px -5px 10px rgba(80, 80, 80, 0.7),
    inset 5px 5px 10px rgba(0, 0, 0, 0.2);

  /* &:hover {
    transform: translateY(-5px);
  } */
`;

export const LightPowerSVG = styled.svg`
  fill: none;
`;

export const DarkPowerSVG = styled.svg`
  fill: none;
  filter: drop-shadow(
          0 0 3.5px rgba(21,227,138, 0.8)
          ); 
`;