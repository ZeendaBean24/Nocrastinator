import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import PlayButton from './PlayButton/PlayerButton';
import PauseButton from './PlayButton/PauseButton';
import SettingsButton from './PlayButton/SettingButton';
import { useContext, useState, useEffect, useRef } from 'react';
import SettingsContext from './SettingsPage/SettingsContext';

const red = '#f54e4e';
const green = '#4aec8c';

function Timer() {
  const settingsInfo = useContext(SettingsContext);

  const[isPaused, setIsPaused] = useState(true);
  const[mode, setMode] = useState('work'); // work/break/null
  const[secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function initTimer() {
    setSecondsLeft(settingsInfo.workMinutes * 60);
  }

  function switchMode() {
    const nextMode = modeRef.current === 'work' ? 'break' : 'work';
    const nextSeconds = (nextMode === 'work' ? settingsInfo.breakMinutes : settingsInfo.workMinutes) * 60;
    
    setMode(nextMode);
    modeRef.current = nextMode;

    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;
  }

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    initTimer();

    const interval = setInterval(() =>  {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds = mode === 'work' 
  ? settingsInfo.breakMinutes * 60 
  : settingsInfo.workMinutes * 60;

  const percentage = Math.round(secondsLeft / totalSeconds * 100);

  const minutes = Math.floor(secondsLeft / 60); // 44.8 -> 44
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = '0' + seconds;

  return (
    <div> 
        <CircularProgressbar 
            value={percentage} 
            text={minutes + ':' + seconds} 
            styles={buildStyles({
            textColor: '#fff', 
            pathColor: mode === 'work' ? green : red,
            tailColor: 'rgba(255, 255, 255, .2)',
        })} />  
        <div style={{marginTop:'20px'}}>
            {isPaused 
            ? <PlayButton onClick={() => {setIsPaused(false); isPausedRef.current = false; }}/> 
            : <PauseButton onClick={() => {setIsPaused(true); isPausedRef.current = true; }}/>}
        </div>
        <div style={{marginTop:'20px'}}>
            <SettingsButton onClick={() => settingsInfo.setShowSettings(true)}/>
        </div>
    </div>
  )
}

export default Timer;