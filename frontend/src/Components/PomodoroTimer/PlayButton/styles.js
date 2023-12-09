import styled from "styled-components";

export const PlayerButton = styled.button`
    background-color: transparent;
    color: rgba(255, 255, 255, 0.8);    
    border: 0;
    cursor: pointer;
    width: 100px;
`;

export const PlayerContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

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






