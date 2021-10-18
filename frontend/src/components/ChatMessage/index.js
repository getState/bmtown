import React, { useState } from 'react';
import { MessageContent, MessageSender } from './style';
import { Message } from '../Chat/style';

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