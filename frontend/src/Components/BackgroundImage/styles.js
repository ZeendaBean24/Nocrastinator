import React from 'react'

function SVGNoiseFilter() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
            <defs>
                <filter id="grainyNoise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise"/>
                    <feColorMatrix in="noise" type="matrix"
                        values="1 0 0 0 0
                                0 1 0 0 0
                                0 0 1 0 0
                                0 0 0 30 -15" result="darkerNoise"/>
                    <feBlend in="SourceGraphic" in2="darkerNoise" mode="multiply"/>
                </filter>
            </defs>
        </svg>
    );
}

export default SVGNoiseFilter;