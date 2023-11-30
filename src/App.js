import './App.css';
import React from 'react';
import Clock from './Components/Clock';
import WeatherApp from './Components/Weather';

function App() {
  return (
    <div className='App'>
      <main>
        {/* Clock */}
        <Clock />
        {/* Weather */}
        <WeatherApp />
      </main>
    </div>
  )
}

export default App;
