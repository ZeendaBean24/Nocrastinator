import './App.css';
import React from 'react';
import Clock from './Components/Clock';
import WeatherApp from './Components/Weather';
import { useState } from 'react';
import Timer from './Components/PomodoroTimer';
import Settings from './Components/PomodoroTimer/SettingsPage/settings';
import SettingsContext from './Components/PomodoroTimer/SettingsPage/SettingsContext';

function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  
  return (
    <div className='App'>
      <main>
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
        {/* Clock */}
        <Clock />
        {/* Weather */}
        <WeatherApp />
      </main>
    </div>
  )
}

export default App;
