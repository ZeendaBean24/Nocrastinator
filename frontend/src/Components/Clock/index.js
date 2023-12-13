import React, { useState } from 'react'
import {
    LightClockContainer,
    LightClockText,
    DarkClockContainer,
    DarkClockText,
  } from './styles';

function Clock( theme ) {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(updateTime, 1000);

    return (
    <>
      {theme === 'light' ? (
        <LightClockContainer>
          <LightClockText>{currentTime}</LightClockText>
        </LightClockContainer>
      ) : (
        <DarkClockContainer>
          <DarkClockText>{currentTime}</DarkClockText>
        </DarkClockContainer>
      )}
    </>
  )
}

export default Clock