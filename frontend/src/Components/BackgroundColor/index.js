import React from 'react';
import { ColorOptionsContainer, ThemeLabel, ColorInput } from './styles';

function BackgroundColorPicker({ theme, setTheme }) {
  const handleThemeChange = (theme) => {
    setTheme(theme);
  };

  return (
    <ColorOptionsContainer>
      <ThemeLabel>
        <ColorInput
          type="radio"
          value="light"
          checked={theme === 'light'}
          onChange={() => handleThemeChange('light')}
        />
        Light Mode
      </ThemeLabel>
      <ThemeLabel>
        <ColorInput
          type="radio"
          value="dark"
          checked={theme === 'dark'}
          onChange={() => handleThemeChange('dark')}
        />
        Dark Mode
      </ThemeLabel>
    </ColorOptionsContainer>
  );
}

export default BackgroundColorPicker;
