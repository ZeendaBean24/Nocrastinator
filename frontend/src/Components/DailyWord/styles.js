import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    background-color: #f0f0f0;
    text-align: center;
    border-radius: 10px;
    box-shadow: 
        8px 8px 15px #bebebe,
        -8px -8px 15px #ffffff;
`;

export const Title = styled.h1`
    font-size: 20px;
    color: #666;
    text-shadow: 1px 1px 2px #fff, -1px -1px 2px #666;
    display: inline;
`;

export const Definition = styled.p`
    font-size: 15px;
    background-color: #f0f0f0;
    box-shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff;
    padding: 10px;
    border-radius: 5px;
`;

export const Example = styled.p`
    font-size: 15px;
    background-color: #f0f0f0;
    box-shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff;
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
    font-style: italic; // Italicize the example
    quotes: "“" "”";
    &:before {
        content: open-quote;
    }
    &:after {
        content: close-quote;
    }
`;

export const PartOfSpeech = styled.span`
    font-style: italic;
    color: #888;
    margin-left: 5px;
`;
