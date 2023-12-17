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
  box-shadow:
  -10px -10px 15px rgba(255,255,255,0.5),
  10px 10px 15px rgba(70,70,70,0.12);
  position: absolute;
  border-radius: 50%;
  border: 8px solid #ececec;
  outline: none;
`

export const DarkColorOptionsButton = styled.button`
  cursor: pointer;
  height: 100px;
  width: 100px;
  box-shadow:
  -10px -10px 15px rgba(255,255,255,0.5),
  10px 10px 15px rgba(70,70,70,0.12),
  inset -10px -10px 10px rgba(255,255,255,0.5),
  inset 10px 10px 10px rgba(70,70,70,0.12);
  position: absolute;
  border-radius: 50%;
  border: 8px solid #ececec;
  outline: none;
`

export const LightPowerSVG = styled.svg`
  fill: none;
`

export const DarkPowerSVG = styled.svg`
  fill: none;
`



// export const ColorOption = styled.div`
//   width: 40px;
//   height: 40px;
//   margin: 10px 8px;
//   cursor: pointer;
// `;

// export const ColorHeading = styled.h2`
//     margin: 0;
//     text-align: center;
// `

// Additional styling can be added here as needed