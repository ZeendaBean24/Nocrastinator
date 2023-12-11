import React from 'react'

function SVGNoiseFilter() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'none' }}>
            <defs>
                <filter id="grainyNoise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="10" result="noise" />
                    <feComposite in="SourceGraphic" in2="noise" operator="in" />
                </filter>
            </defs>
        </svg>
    );
}

export default SVGNoiseFilter;