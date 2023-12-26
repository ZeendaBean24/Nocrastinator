import './App.css';
import React, { useState, useEffect } from 'react';
import Clock from './Components/Clock';
import WeatherApp from './Components/Weather';
// import Timer from './Components/PomodoroTimer';
// import Settings from './Components/PomodoroTimer/SettingsPage/settings';
// import SettingsContext from './Components/PomodoroTimer/SettingsPage/SettingsContext';
import Greeting from './Components/Greeting';
import QuickLinks from './Components/QuickLinks';
// import fetchBackgroundImage from './Components/BackgroundImage';
import BackgroundColorPicker from './Components/BackgroundColor';
import SVGNoiseFilter from './Components/BackgroundImage/styles';
import QuoteDisplay from './Components/Quotes';
import DailyWord from './Components/DailyWord';

function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Sample links data
  const links = [
    { name: 'Google', url: 'https://www.google.com' },
    { name: 'Facebook', url: 'https://www.facebook.com' },
    { name: 'Hockey', url: 'https://www.nhl.com'}
      // Add more links as needed
  ];

  // const [backgroundImageUrl, setBackgroundImageUrl] = useState('');

  // useEffect(() => {
  //   async function fetchImage() {
  //     const imageUrl = await fetchBackgroundImage();
  //     setBackgroundImageUrl(imageUrl);
  //   }
  //     fetchImage();
  //   }, []);

  // const backgroundStyle = {
  //     backgroundImage: `url(${backgroundImageUrl})`,
  //     backgroundSize: 'cover',
  //     position: 'absolute',
  //     top: 0,
  //     left: 0,
  //     width: '100%',
  //     height: '100%',
  //     zIndex: -1, // Ensure it's behind all other content
  //     filter: 'url(#grainyNoise)', // Apply the SVG filter here
  //   };

  return (
    <>
      <div>
        <SVGNoiseFilter />
      </div>
      <div className={`App ${theme}`}>
        <div className="container">
          <div className="item item-2"> 
            {/* Greeting */}
            <Greeting theme={theme}/>
            {/* Clock */}
            <Clock theme={theme}/> 
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
          <div className='item item-7'>
            {/* Toggle Switch for Light/Dark Mode */}
            <BackgroundColorPicker toggleTheme={toggleTheme} theme={theme}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
