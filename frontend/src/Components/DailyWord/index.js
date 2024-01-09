import React, { useState, useEffect } from 'react';
import { Container, Title, Word } from './styles.js'; // Import styled components

function DailyWord() {
    const [word, setWord] = useState('');

    useEffect(() => {
        const apiUrl = `http://localhost:3001/wordOfTheDay`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.word) {
                    setWord(data.word);
                }
            })
            .catch(error => console.error('Error fetching word of the day:', error));
    }, []);

    return (
        <Container>
            <Title>Word of the Day</Title>
            <Word>{word}</Word>
        </Container>
    );
}

export default DailyWord;
