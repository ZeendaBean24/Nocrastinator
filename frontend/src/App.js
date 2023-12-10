import './App.css';
import React, { useState, useEffect } from 'react';
import Clock from './Components/Clock';
import WeatherApp from './Components/Weather';
import Timer from './Components/PomodoroTimer';
import Settings from './Components/PomodoroTimer/SettingsPage/settings';
import SettingsContext from './Components/PomodoroTimer/SettingsPage/SettingsContext';
import Greeting from './Components/Greeting';
import QuickLinks from './Components/QuickLinks';
import fetchBackgroundImage from './Components/BackgroundImage';
import QuoteDisplay from './Components/Quotes';
import DailyWord from './Components/DailyWord';

// Weather app: responsive auto skip, auto detect
// Pomodoro timer: bugs fixes, alert the user
// Greeting: update using state
// Naming best practices
// How to overflow text into side divs
// FIX LOGO PROBLEM
// Use different account for backend api keys for different one: openweatherapi, unsplash, apininjas
// limit to 24 hours 

function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  // Sample links data
  const links = [
    { name: 'Google', url: 'https://www.google.com' },
    { name: 'Facebook', url: 'https://www.facebook.com' },
    { name: 'Hockey', url: 'https://www.nhl.com'}
      // Add more links as needed
  ];

  const [backgroundImageUrl, setBackgroundImageUrl] = useState('');

  useEffect(() => {
    async function fetchImage() {
      const imageUrl = await fetchBackgroundImage();
      setBackgroundImageUrl(imageUrl);
    }
      fetchImage();
    }, []);

  const backgroundStyle = {
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: 'cover', // This ensures the image covers the entire element
      backgroundPosition: 'center', // This centers the image in the element
      backgroundRepeat: 'no-repeat', // This prevents the image from repeating
      minHeight: '100vh', // Ensure it covers the whole viewport height
      minWidth: '100vw', // Ensure it covers the whole viewport width
    };

  console.log(backgroundImageUrl)

  return (
    <div className='App' style={backgroundStyle}>
      <div className="container" >
        <div className="item item-1">
          {/* Pomodoro Timer */}
          <SettingsContext.Provider value={{
            showSettings,
            setShowSettings,
            workMinutes,
            breakMinutes,
            setWorkMinutes,
            setBreakMinutes,
          }}>
            {showSettings ? <Settings /> : <Timer />}
          </SettingsContext.Provider>
        </div>
        <div className="item item-2"> 
          {/* Greeting */}
          <Greeting />
          {/* Clock */}
          <Clock /> 
        </div>
        <div className='item item-3'>
          {/* Weather */}
          <WeatherApp />
        </div>
        <div className='item item-4'>
          {/* Quick Links */}
          <QuickLinks links={links} />
        </div>
        <div className='item item-5'>
          {/* Quote of the Day */}
          <QuoteDisplay />
        </div>
        <div className='item item-6'>
          {/* Word of the Day*/}
          <DailyWord />
        </div>
      </div>
    </div>
  )
}

export default App;
