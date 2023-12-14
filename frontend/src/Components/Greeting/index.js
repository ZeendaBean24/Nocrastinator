import React from 'react'
import {LightGreetingText, DarkGreetingText} from './styles';

function Greeting( {theme} ) {
  let timeOfDay;
  const date = new Date();
  const hours = date.getHours();
  
  if (hours < 12) {
    timeOfDay = 'morning';
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon';
  } else {
    timeOfDay = 'evening';
  }

  return (
    <>
    {theme === 'light' ? (
        <LightGreetingText> Good {timeOfDay}! </LightGreetingText>
    ) : (
        <DarkGreetingText> Good {timeOfDay}! </DarkGreetingText>
    )}
  </>
  )
}

export default Greeting;