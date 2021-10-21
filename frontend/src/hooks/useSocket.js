import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
const SERVER_URL = "http://localhost:5000";
export const useSocket = (respondCallback) => {
    const socketRef = useRef(null);
    
    useEffect(() => {
        if(socketRef.current === null){
            socketRef.current = io.connect(SERVER_URL, {
                transports: ['websocket'],
                upgrade: false,
                forceNew: true,
            });
            console.log(socketRef.current);
        }
        socketRef.current.on("connect", () => {
            console.log("server connected");
        })
        socketRef.current.on('disconnect', () => {
            socketRef.current.removeAllListeners();
            console.log("server disconnected");
        });

        socketRef.current.on("respondMessage", respondCallback);

        return () => {
             socketRef.current.disconnect();
        }
    }, []);
    const sendMessage = (data) => {
        socketRef.current.emit("sendMessage", data);
    }
    return [sendMessage, socketRef];
}
