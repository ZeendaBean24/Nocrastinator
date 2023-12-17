import React from 'react';
import { ColorOptionsContainer } from './styles';

function BackgroundColorPicker({ setSelectedColor, toggleTheme }) {
  const themes = ['light', 'dark']; // Define available themes

  return (
    <div>
      {/* <ColorHeading>Select Theme:</ColorHeading> */}
      <ColorOptionsContainer>
        <button onClick={toggleTheme}>Toggle Theme</button> {/* Theme toggle button */}
      </ColorOptionsContainer>
    </div>
  );
}

export default BackgroundColorPicker;