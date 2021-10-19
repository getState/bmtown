import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    min-width: 200px;
    height: 100vh;
    min-height: 300px;
    padding: 5px 10px 10px 10px;
    background-color: #242544;
    
`;

export const ChatHead = styled.div`
`;

export const HeadText = styled.div`
    float: left;
    font-size: 20px;
    color: white;
    font-weight: 600;
    
`

export const BackButton = styled.button`
    float: right;
    font-size: 20px;
    color: white;
    font-weight: 600;
    background-color: #242544;
    border: none;
    cursor: pointer;
`




export const ChatInput = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #333a64;
    border-radius: 20px;
    background-color: 242544;
`

export const MessageContainer = styled.div`
    flex-grow: 1;
    overflow: scroll;
`

export const Message = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    background-color: #333a64;
`

export const MessageSender = styled.div`
    position: relative;
    width: 100%;
    height: 30px;
`

export const MessageContent = styled.div`
    position: relative;
    width: 100%;
    height: 30px;
`