import React, { useState, useEffect } from 'react';
import { QuoteContainer, QuoteText, AuthorText, CategoryText } from './styles';

const QuoteDisplay = () => {
    const [quoteData, setQuoteData] = useState({ quote: '', author: '', category: '' });
    const [error, setError] = useState('');

    useEffect(() => {
        const today = new Date().toLocaleDateString();
        const storedQuoteData = localStorage.getItem('quoteData');
        const storedDate = localStorage.getItem('quoteDate');

        const apiUrl = `${process.env.REACT_APP_DEPLOYMENT_URL}/quote`;

        if (storedQuoteData && storedDate === today) {
            // Use the stored quote if it was fetched today
            setQuoteData(JSON.parse(storedQuoteData));
        } else {
            // Fetch a new quote and update localStorage
            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Error: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    setQuoteData(data);
                    localStorage.setItem('quoteData', JSON.stringify(data));
                    localStorage.setItem('quoteDate', today);
                })
                .catch(error => {
                    console.error('Error fetching the quote:', error);
                    setError(error.message);
                });
        }
    }, []);

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
