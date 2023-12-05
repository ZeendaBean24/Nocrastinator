import React from 'react';
import { useState } from 'react';
import { LinksContainer, LinkItem, DropdownButton, DropdownContent } from './styles'

// Quick Links Component with Dropdown
const QuickLinks = ({ links }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <LinksContainer>
      <DropdownButton onClick={toggleDropdown}>Quick Links</DropdownButton>
      <DropdownContent isOpen={dropdownOpen}>
        {links.map(link => (
          <LinkItem href={link.url} key={link.url} target="_blank" rel="noopener noreferrer">
            {link.name}
          </LinkItem>
        ))}
      </DropdownContent>
    </LinksContainer>
  );
};

export default QuickLinks;