import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
const SERVER_URL = "http://localhost:5000";


export const useChat = (respondCallback) => {
    const socketRef = useRef(null);
    
    useEffect(() => {
        if(socketRef.current == null){
            socketRef.current = io.connect(SERVER_URL, {
                transports: ['websocket'],
                upgrade: false,
                forceNew: true,
            });
        }
        socketRef.current.on("connect", () => {
            console.log("server connected");
        })
        socketRef.current.on("respondMessage", respondCallback);
    }, []);
    const sendMessage = (data) => {
        socketRef.current.emit("sendMessage", data);
    }
    return sendMessage;
}

