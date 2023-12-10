import styled from 'styled-components';

export const QuoteContainer = styled.div`
    padding: 20px;
    margin: 20px;
    border-radius: 50px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    text-align: center;
    background-color: #f0f0f0;
    max-width: 300px;
    margin: auto;
`;

export const QuoteText = styled.p`
    font-style: italic;
    font-size: 1rem;
    color: #333;
`;

export const AuthorText = styled.p`
    font-weight: bold;
    font-size: 0.8;
    margin-top: 10px;
    color: #555;
`;

export const CategoryText = styled.p`
    margin-top: 15px;
    font-size: 0.7rem;
    color: #888;
`;