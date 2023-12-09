import React, { useState } from 'react'
import { ClockContainer, ClockText } from './styles';

function Clock() {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(updateTime, 1000);

    return (
    <ClockContainer>
        <ClockText> {currentTime} </ClockText>
    </ClockContainer>
  )
}

export default Clock