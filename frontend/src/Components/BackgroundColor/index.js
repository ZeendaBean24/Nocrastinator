import React from 'react';
import { ColorOptionsContainer , LightColorOptionsButton, DarkColorOptionsButton, LightPowerSVG, DarkPowerSVG} from './styles';

function BackgroundColorPicker({ toggleTheme, theme }) {

  return (
    <>
      {theme === 'light' ? (
        <ColorOptionsContainer>
          <LightColorOptionsButton onClick={toggleTheme}>
            <LightPowerSVG
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
              >
                <path
                  d="M12 3V12M18.3611 5.64001C19.6195 6.8988 20.4764 8.50246 20.8234 10.2482C21.1704 11.994 20.992 13.8034 20.3107 15.4478C19.6295 17.0921 18.4759 18.4976 16.9959 19.4864C15.5159 20.4752 13.776 21.0029 11.9961 21.0029C10.2162 21.0029 8.47625 20.4752 6.99627 19.4864C5.51629 18.4976 4.36274 17.0921 3.68146 15.4478C3.00019 13.8034 2.82179 11.994 3.16882 10.2482C3.51584 8.50246 4.37272 6.8988 5.6311 5.64001"
                  stroke="midnightblue"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </LightPowerSVG>
          </LightColorOptionsButton> 
        </ColorOptionsContainer>
      ) : (
        <ColorOptionsContainer>
          <DarkColorOptionsButton onClick={toggleTheme}>
            <DarkPowerSVG
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
            >
              <path
                d="M12 3V12M18.3611 5.64001C19.6195 6.8988 20.4764 8.50246 20.8234 10.2482C21.1704 11.994 20.992 13.8034 20.3107 15.4478C19.6295 17.0921 18.4759 18.4976 16.9959 19.4864C15.5159 20.4752 13.776 21.0029 11.9961 21.0029C10.2162 21.0029 8.47625 20.4752 6.99627 19.4864C5.51629 18.4976 4.36274 17.0921 3.68146 15.4478C3.00019 13.8034 2.82179 11.994 3.16882 10.2482C3.51584 8.50246 4.37272 6.8988 5.6311 5.64001"
                stroke="#15e38a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </DarkPowerSVG>
          </DarkColorOptionsButton> 
        </ColorOptionsContainer>
      )}
    </>
  );
}

export default BackgroundColorPicker;