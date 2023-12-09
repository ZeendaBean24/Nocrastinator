import React, { useState, useEffect } from 'react';
import { QuoteContainer, QuoteText, AuthorText, CategoryText } from './styles';

const QuoteDisplay = () => {
    const [quoteData, setQuoteData] = useState({ quote: '', author: '', category: '' });

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await fetch('/api/quote');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setQuoteData(data);
            } catch (error) {
                console.error('Error fetching the quote:', error);
            }
        };

        fetchQuote();
    }, []);

    return (
        <QuoteContainer>
            <QuoteText>"{quoteData.quote}"</QuoteText>
            <AuthorText>- {quoteData.author}</AuthorText>
            <CategoryText>Quote of the day about: {quoteData.category}</CategoryText>
        </QuoteContainer>
    );
};

export default QuoteDisplay;