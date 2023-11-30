import React from 'react'
import './slider.css'
import { SettingsLabel } from './styles';
import ReactSlider from 'react-slider';
import SettingsContext from './SettingsContext';
import { useContext } from 'react';
import BackButton from './BackButton';

function Settings() {
  const settingsInfo = useContext(SettingsContext)
  return (
    <div style={{textAlign: 'left'}}> 
      <SettingsLabel>work minutes: {settingsInfo.workMinutes}:00</SettingsLabel>
      <ReactSlider
        className={'slider'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.workMinutes}
        onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={60}
      />
      <SettingsLabel>break minutes: {settingsInfo.breakMinutes}:00</SettingsLabel>
      <ReactSlider
        className={'slider green'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.breakMinutes}
        onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={60}
      />
      <div style={{textAlign:'center', marginTop:'20px'}}>
        <BackButton onClick={() => settingsInfo.setShowSettings(false)}/>
      </div>
    </div>
  );
}

export default Settings;