import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    min-width: 300px;
    padding: 5px;
    overflow-x: auto;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

export const VideoContainer = styled.video`
    width: 140px;
    height: 100px;
    border-radius: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-left: 10px;
`

export const MyVideo = styled.video`
    width: 140px;
    height: 100px;
    border: 2px solid #cedd7c;
    border-radius: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

