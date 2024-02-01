import styled, { css } from 'styled-components';

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 8px 8px 16px #d9d9d9, -8px -8px 16px #ffffff;
  z-index: 1;
  transition: all 0.3s ease-out;
`;

export const LinkItem = styled.a`
  display: block;
  color: #333;
  padding: 10px 0;
  text-decoration: none;
  &:hover {
    color: #007bff;
  }
`;

export const ClickableText = styled.div`
  text-align: center;
  cursor: pointer;
  font-size: 2rem; /* Adjust the font size as needed */
  padding: 5px; /* Add padding to the text for better appearance */
  background-color: midnightblue; /* Text color is midnight blue */
  background-clip: text;
  color: midnightblue;
  text-shadow: 2px 3px 6px 
            rgba(0, 0, 0, 0.5),  
            -2px -2px 0 
            rgba(255, 255, 255, 0.8); 
`;

export const LogoImage = styled.img`
  height: 20px;
  width: auto;
  margin-right: 10px;
`;

export const LinksContainer = styled.div`
  background-color: powderblue;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  position: relative;
  box-shadow: 
        30px 30px 30px -10px rgba(0, 0, 0, 0.15),
        inset 15px 15px 10px rgba(255, 255, 255, 0.75),
        -15px -15px 35px rgba(255, 255, 255, 0.55),
        inset -1px -1px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-out;
  &:hover {
    ${DropdownContent} {
      display: block;
      transform: translateY(10px);
      opacity: 1;
    }

    ${ClickableText} {
      transform: scale(1.05); // Enlarges the text when LinksContainer is hovered
    }
  }
`;
