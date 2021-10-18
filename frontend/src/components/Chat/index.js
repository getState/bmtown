import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useChat } from '../../hooks/useChat';
import { userAtom } from '../../store/user';
import { BackButton, ChatHead, ChatInput, Container, HeadText, Message, MessageContainer } from './style';


export default function Chat() {
    const user = useRecoilValue(userAtom);
    const [message, setMessage] = useState("")
    const [messageList, setMessageList] = useState([]);


    const sendMessage = useChat((msg) => {
        console.log("msg받음", msg);
        setMessageList([...messageList,msg])
    })

    const submitHandler = (event) => {
        if (event.key === 'Enter'){
            console.log("enter누름");
            console.log(user);
            sendMessage({user ,message, type: "msg"});
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

