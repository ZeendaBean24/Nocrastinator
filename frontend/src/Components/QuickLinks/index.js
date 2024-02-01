import React, { useState } from 'react';
import { LinksContainer, ClickableText, LinkItem, DropdownContent, LogoImage } from './styles';

const QuickLinks = ({ links }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <LinksContainer>
        <ClickableText onClick={toggleDropdown}>Quick Links</ClickableText>
        <DropdownContent isOpen={dropdownOpen}>
          {links.map(link => (
            <LinkItem href={link.url} key={link.url} target="_blank" rel="noopener noreferrer">
              <LogoImage src={`https://logo.clearbit.com/${link.url}`} alt={`${link.name} Logo`} />
              {link.name}
            </LinkItem>
          ))}
        </DropdownContent>
      </LinksContainer>
    </div>
  );
};

export default QuickLinks;