import React from 'react';
import { ColorOptionsContainer, ColorOption, ColorHeading } from './styles';

function BackgroundColorPicker({ setSelectedColor }) {
  const colorOptions = ['lightblue', 'lightpink', 'lightgreen', 'lightyellow'];

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <ColorHeading>Select Background Color:</ColorHeading>
      <ColorOptionsContainer>
        {colorOptions.map((color, index) => (
          <ColorOption
            key={index}
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(color)}
          ></ColorOption>
        ))}
      </ColorOptionsContainer>
    </div>
  );
}

export default BackgroundColorPicker;
