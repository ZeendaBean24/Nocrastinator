import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 25px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: powderblue;
    text-align: center;
    border-radius: 60px;
    box-shadow: 
        30px 30px 30px -10px rgba(0, 0, 0, 0.15),
        inset 15px 15px 10px rgba(255, 255, 255, 0.75),
        -15px -15px 35px rgba(255, 255, 255, 0.55),
        inset -1px -1px 10px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h1`
    font-size: 20px;
    color: midnightblue;
    text-shadow: 1px 1px 2px #fff, -1px -1px 2px #666;
    display: inline;
`;

export const InfoContainer = styled.div`
    font-size: 15px;
    background-color: powderblue; // Same color as the Container for smooth transition
    box-shadow:
        inset 4px 4px 8px rgba(0, 0, 0, 0.25), // Darker shadow for depth
        inset -4px -4px 8px rgba(255, 255, 255, 0.7); // Lighter shadow for raised effect
    padding: 5px;
    border-radius: 40px;
    margin-top: 7px;
    margin-bottom: 10px;
    margin-left: 30px;
    margin-right: 30px;
`;

export const Definition = styled.p`
    margin-bottom: 5px; // Add some space between the definition and the example
`;

export const Example = styled.p`
    font-style: italic;
    color: #888;
    quotes: "“" "”";
    &:before {
        content: open-quote;
    }
    &:after {
        content: close-quote;
    }
    margin-top: 5px; // Provide separation if needed
`;

export const PartOfSpeech = styled.span`
    font-style: italic;
    color: #888;
    margin-left: 5px;
`;
