import React, { useState } from 'react';
import { useChat } from '../../hooks/useChat';
import { BackButton, ChatHead, ChatInput, Container, HeadText, Message, MessageContainer } from './style';


export default function Chat(){
    const [message, setMessage] = useState("")

    const sendMessage = useChat((msg) => {
        console.log("msg받음", msg);
    })

    const submitHandler = (event) => {
        if (event.key === 'Enter'){
            console.log("enter누름");
            sendMessage({message});
        }
    }

    return (
        <Container>
            <ChatHead>
                <HeadText>Chat</HeadText>
                <BackButton>&lt;</BackButton>
            </ChatHead>
            <MessageContainer>
                <Message>

                </Message>
            </MessageContainer>
            <ChatInput 
                placeholder="Message..."
                value = {message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={submitHandler}
            />
        </Container>
    );
}

