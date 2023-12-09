import React, { useState, useEffect } from 'react';
import { QuoteContainer, QuoteText, AuthorText, CategoryText } from './styles';

const QuoteDisplay = () => {
    const [quoteData, setQuoteData] = useState({ quote: '', author: '', category: '' });
    const [error, setError] = useState('');


    fetch('/api/quote')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => setQuoteData(data))
        .catch(error => {
            console.error('Error fetching the quote:', error);
            setError(error.message);
        });

    if (error) {
        return <div>Error loading quote: {error}</div>;
    }

    return (
        <QuoteContainer>
            <QuoteText>"{quoteData.quote}"</QuoteText>
            <AuthorText>- {quoteData.author}</AuthorText>
            <CategoryText>Quote of the day about: {quoteData.category}</CategoryText>
        </QuoteContainer>
    );
};

export default QuoteDisplay;