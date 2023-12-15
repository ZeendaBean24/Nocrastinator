import styled from "styled-components";

export const ColorOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ThemeLabel = styled.label`
  /* Style for the label */
  display: flex;
  align-items: center;
  margin-bottom: 5px; /* Adjust as needed */
  cursor: pointer;
  font-size: 16px; /* Adjust the font size as needed */
`;

export const ColorInput = styled.input`
  margin-right: 5px; /* Example margin */
  transition: 'color 0.3s'
`;

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