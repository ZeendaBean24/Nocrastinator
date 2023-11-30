import styled from "styled-components";

export const PlayerButton = styled.button`
    background-color: transparent;
    color: rgba(255, 255, 255, 0.8);    
    border: 0;
    display: inline-block;
    width: 100px;
    cursor: pointer;
`;

export const SettingsContainer = styled(PlayerButton)`
    width: auto;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 1.4rem;
    line-height: 36px;
`;

export const SettingsSVG = styled.svg`
    width: 36px;
    float: left;
    margin-right: 5px;
`






