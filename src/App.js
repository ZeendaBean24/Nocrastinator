import './App.css';
import React from 'react';
import Clock from './Components/Clock';
import WeatherApp from './Components/Weather';
import { useState } from 'react';
import Timer from './Components/PomodoroTimer';
import Settings from './Components/PomodoroTimer/SettingsPage/settings';
import SettingsContext from './Components/PomodoroTimer/SettingsPage/SettingsContext';
import Greeting from './Components/Greeting';
import QuickLinks from './Components/QuickLinks';

// Weather app: responsive auto skip, auto detect
// Pomodoro timer: bugs fixes, alert the user
// Greeting: update using state
// Naming best practices
// How to overflow text into side divs
// *****Rename new tab to FOCUS

function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  // Sample links data
  const links = [
    { name: 'Google', url: 'https://www.google.com' },
    { name: 'Facebook', url: 'https://www.facebook.com' },
      // Add more links as needed
  ];

  return (
    <div className='App'>
      <div className="container">
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
          <QuickLinks links={links} />
        </div>
      </div>
    </div>
  )
}

export default App;
