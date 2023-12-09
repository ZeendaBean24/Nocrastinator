import React, { useState, useEffect } from 'react';
import fetchQuote from './fetchQuote';
import { QuoteContainer, QuoteText, AuthorText, CategoryText } from './styles';

const QuoteDisplay = () => {
    const [quote, setQuote] = useState({ quote: '', author: '', category: '' });

    useEffect(() => {
        fetchQuote()
            .then(quoteData => setQuote(quoteData))
            .catch(error => console.error('Error fetching the quote:', error));
    }, []);

    return (
        <QuoteContainer>
            <QuoteText>"{quote.quote}"</QuoteText>
            <AuthorText>- {quote.author}</AuthorText>
            <CategoryText>Quote of the day: {quote.category}</CategoryText>
        </QuoteContainer>
    );
};

export default QuoteDisplay;