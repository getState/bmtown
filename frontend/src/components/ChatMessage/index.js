import React, { useState } from 'react';
import { Message, MessageContent, MessageSender } from './style';

export function MessageDetail({nickname, message}) {
    return (
        <Message>
            <MessageSender>
                {nickname}
            </MessageSender>
            <MessageContent>
                {message}
            </MessageContent>
        </Message>
    )
}