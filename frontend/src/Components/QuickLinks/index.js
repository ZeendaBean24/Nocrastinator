import React from 'react';
import { LightLinksContainer, DarkLinksContainer, LightClickableText, DarkClickableText, LightLinkItem, DarkLinkItem, LightDropdownContent, DarkDropdownContent, LogoImage } from './styles';

const QuickLinks = ({ links , theme}) => {
  return (
    <>
      {theme === 'light' ? (
          <LightLinksContainer>
          <LightClickableText>Links</LightClickableText>
          <LightDropdownContent>
            {links.map(link => (
              <LightLinkItem href={link.url} key={link.url} target="_blank" rel="noopener noreferrer">
                <LogoImage src={`https://logo.clearbit.com/${link.url}`} alt={`${link.name} Logo`} />
                {link.name}
              </LightLinkItem>
            ))}
          </LightDropdownContent>
        </LightLinksContainer>
      ) : (
        <DarkLinksContainer>
        <DarkClickableText>Links</DarkClickableText>
        <DarkDropdownContent>
          {links.map(link => (
            <DarkLinkItem href={link.url} key={link.url} target="_blank" rel="noopener noreferrer">
              <LogoImage src={`https://logo.clearbit.com/${link.url}`} alt={`${link.name} Logo`} />
              {link.name}
            </DarkLinkItem>
          ))}
        </DarkDropdownContent>
      </DarkLinksContainer>
      )}
    </>
  );
};

export default QuickLinks;