import styled from 'styled-components';

export const LightContainer = styled.div`
    padding-top: 20px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    width: 800px;
    background-color: powderblue;
    text-align: center;
    border-radius: 60px;
    box-shadow: 
        30px 30px 30px -10px rgba(0, 0, 0, 0.15),
        inset 15px 15px 10px rgba(255, 255, 255, 0.75),
        -15px -15px 35px rgba(255, 255, 255, 0.55),
        inset -1px -1px 10px rgba(0, 0, 0, 0.2);
`;

export const LightTitle = styled.h1`
    font-size: 20px;
    color: midnightblue;
    text-shadow: 1px 1px 2px #fff, -1px -1px 2px #666;
    display: inline;
`;

export const LightInfoContainer = styled.div`
    font-size: 15px;
    background-color: powderblue; // Same color as the Container for smooth transition
    box-shadow:
        inset 4px 4px 8px rgba(0, 0, 0, 0.25), // Darker shadow for depth
        inset -4px -4px 8px rgba(255, 255, 255, 0.7); // Lighter shadow for raised effect
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 40px;
    margin-top: 7px;
    margin-bottom: 10px;
    margin-left: 30px;
    margin-right: 30px;
`;

export const LightDefinition = styled.p`
    margin-bottom: 5px; // Add some space between the definition and the example
`;

export const LightExample = styled.p`
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

export const LightPartOfSpeech = styled.span`
    font-style: italic;
    color: #888;
    margin-left: 5px;
`;

export const DarkContainer = styled.div`
    padding-top: 13px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    width: 800px;
    background-color: midnightblue;
    text-align: center;
    border-radius: 60px;
    box-shadow: 
        15px 25px 20px rgba(0, 0, 0, 0.2), /* Outer shadow */
        -10px -10px 20px rgba(255, 255, 255, 0.1); /* Inner shadow */
        margin: 0 auto; /* Center the container horizontally */
`;

export const DarkTitle = styled.h1`
    font-size: 20px;
    color: powderblue;
    text-shadow: 1px 1px 2px #fff, -1px -1px 2px #666;
    display: inline;
`;

export const DarkInfoContainer = styled.div`
    font-size: 15px;
    background-color: midnightblue;
    box-shadow:
        inset 0px 0px 8px rgba(0, 0, 0, 0.5), /* Darker shadow for depth */
        inset 0px 0px 8px rgba(255, 255, 255, 0.3), /* Lighter shadow for raised effect */
        0px 0px 0px 1px rgba(0, 0, 0, 0.3), /* Border shadow for engraved effect */
        0px 0px 8px rgba(0, 0, 0, 0.1); /* Additional outer shadow for depth */
    padding: 5px;
    border-radius: 40px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 7px;
    margin-bottom: 10px;
    margin-left: 30px;
    margin-right: 30px;
`;

export const DarkDefinition = styled.p`
    margin-bottom: 5px; // Add some space between the definition and the example
`;

export const DarkExample = styled.p`
    font-style: italic;
    color: #d3d3d3;
    quotes: "“" "”";
    &:before {
        content: open-quote;
    }
    &:after {
        content: close-quote;
    }
    margin-top: 5px; // Provide separation if needed
`;

export const DarkPartOfSpeech = styled.span`
    font-style: italic;
    text-shadow: 1px 1px 2px #fff, -1px -1px 2px #666;
    color: #d3d3d3;
    margin-left: 5px;
`;
