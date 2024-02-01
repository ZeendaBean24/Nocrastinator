import styled, { css } from 'styled-components';

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 8px 8px 16px #d9d9d9, -8px -8px 16px #ffffff;
  z-index: 1;
  transition: all 1s ease-out;
  transform: translateY(0);
  opacity: 0;
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
  &:hover ${DropdownContent} {
    display: block;
    transform: translateY(10px);
    opacity: 1;
  }
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
  color: #333;
  cursor: pointer;
  &:hover {
    color: #007bff;
    text-decoration: underline;

    ~ ${DropdownContent} {
      display: block;
      transform: translateY(10px);
      opacity: 1;
    }
  }
`;

export const LogoImage = styled.img`
  height: 20px;
  width: auto;
  margin-right: 10px;
`;