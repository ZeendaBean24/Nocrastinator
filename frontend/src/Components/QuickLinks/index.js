import React from 'react';
import { LinksContainer, ClickableText, LinkItem, DropdownContent, LogoImage } from './styles';

const QuickLinks = ({ links }) => {
  return (
    <div>
      <LinksContainer>
        <ClickableText>Links</ClickableText>
        <DropdownContent>
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