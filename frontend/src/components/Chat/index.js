import React, { useState } from 'react';
import { useRecoilValue} from 'recoil';
import { userAtom } from '../../store/user';
import { chatList } from '../../store/chat';
import { BackButton, ChatHead, ChatInput, Container, HeadText, MessageContainer } from './style';
import { MessageDetail } from '../ChatMessage';

export default function Chat(props) {
    const user = useRecoilValue(userAtom);
    const messageList = useRecoilValue(chatList);
    const [message, setMessage] = useState("")
    const setSelectedBar = props.setSelectedBar;
    const sendMessage = props.sendMessage;
    
    

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
                <BackButton onClick={() => setSelectedBar("notSelected")}>&lt;</BackButton>
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