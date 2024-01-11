import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import Popup from './popup';
import './popupindex.css'; // If you have specific styles for your popup

const rootElement = document.getElementById('popup-root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
);
