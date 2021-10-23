import styled, {keyframes} from "styled-components";

const slideAnimation = keyframes`
    from{
        transform: translateX(-200%);
    }
    to{
        transform: translateX(0);
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    width: 200px;
    min-width: 100px;
    height: 100vh;
    min-height: 300px;
    padding: 5px 10px 10px 10px;
    background-color: rgb(40, 45, 78);
    animation: ${slideAnimation} 1s;

    
`;

export const ChatHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 5px;
`;

export const HeadText = styled.div`
    float: left;
    font-size: 16px;
    color: white;
    font-weight: 600;
    
`

export const BackButton = styled.button`
    float: right;
    font-size: 20px;
    color: white;
    font-weight: 600;
    background-color: rgb(40, 45, 78);
    border: none;
    cursor: pointer;
`




export const ChatInput = styled.input`
    width: 100%;
    padding: 5px 10px;
    border: 2px solid rgba(202,216,255,.6);
    border-radius: 20px;
    background-color: rgb(40, 45, 78);
    color: #fff;
    font-size: 16px;
`

export const MessageContainer = styled.div`
    flex-grow: 1;
    overflow-y: auto;
`
