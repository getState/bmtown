import React, { useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { userAtom } from '../../store/user';
import { chatList } from '../../store/chat';
import { BackButton, ChatHead, ChatInput, Container, HeadText, MessageContainer } from './style';
import { useSocket } from '../../hooks/useSocket';
import { MessageDetail } from '../ChatMessage';

export default function Chat() {
    const user = useRecoilValue(userAtom);
    const [messageList,setMessageList] = useRecoilState(chatList);
    const [message, setMessage] = useState("")
    
    
    const sendMessage = useSocket((msg) => {
        if(msg.type==="msg")
            setMessageList(messageList => messageList.concat(msg));
    })
    

    const submitHandler = (event) => {
        if (event.key === 'Enter'){
            sendMessage({ user, message, type: "msg" });
            setMessage("");
        }
    }

    return (
        <Container>
            <ChatHead>
                <HeadText>Chat</HeadText>
                <BackButton>&lt;</BackButton>
            </ChatHead>

            <MessageContainer>
                {messageList.map((message, index) => (
                    <MessageDetail
                        key={index}
                        nickname={message.user.nickname}
                        message={message.message}
                    />
                ))
                }
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