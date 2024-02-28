import React, { useState, useEffect } from 'react';
import { LightContainer, LightTitle, LightDefinition, LightExample, LightPartOfSpeech, LightInfoContainer, DarkContainer, DarkTitle, DarkDefinition, DarkExample, DarkPartOfSpeech, DarkInfoContainer  } from './styles.js';

function DailyWord( {theme} ) {
    const [wordDetails, setWordDetails] = useState({
        word: '',
        definition: '',
        example: '',
        partOfSpeech: ''
    });

    useEffect(() => {
        const apiUrl = `${process.env.REACT_APP_DEPLOYMENT_URL}/wordOfTheDay`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setWordDetails({
                    word: data.word,
                    definition: data.definition,
                    example: data.example,
                    partOfSpeech: data.partOfSpeech
                });
            })
            .catch(error => console.error('Error fetching word of the day:', error));
    }, []);

    return (
        <>
        {theme === 'light' ? (
          <LightContainer>
            <LightTitle>{wordDetails.word} <LightPartOfSpeech>({wordDetails.partOfSpeech})</LightPartOfSpeech></LightTitle>
            <LightInfoContainer>
                <LightDefinition>{wordDetails.definition}</LightDefinition>
                <LightExample>“{wordDetails.example}”</LightExample>
            </LightInfoContainer>
          </LightContainer>
        ) : (
          <DarkContainer>
            <DarkTitle>{wordDetails.word} <DarkPartOfSpeech>({wordDetails.partOfSpeech})</DarkPartOfSpeech></DarkTitle>
            <DarkInfoContainer>
                <DarkDefinition>{wordDetails.definition}</DarkDefinition>
                <DarkExample>“{wordDetails.example}”</DarkExample>
            </DarkInfoContainer>
          </DarkContainer>
        )}
      </>
      
    );
}

export default DailyWord;
