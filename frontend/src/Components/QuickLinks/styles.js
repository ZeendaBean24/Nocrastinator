import styled from 'styled-components';

export const LinksContainer = styled.div`
  background-color: #f0f0f0; // Example background color
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const LinkItem = styled.a`
  display: block;
  color: #333; // Example text color
  padding: 10px 0;
  text-decoration: none;
  &:hover {
    color: #007bff; // Change color on hover
  }
`;

export const DropdownButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const DropdownContent = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

export const LogoImage = styled.img`
  height: 20px; // Adjust size as needed
  width: auto;
  margin-right: 10px;
`;