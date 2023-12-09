import React from 'react'
import { GreetingContainer } from './styles';

function Greeting() {
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
    <GreetingContainer>
        Good {timeOfDay}!
    </GreetingContainer>
  )
}

export default Greeting