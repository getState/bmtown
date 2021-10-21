import React, {useState} from "react";
import { useRecoilState } from "recoil";
import { useSocket } from "../../hooks/useSocket";
import { chatList } from "../../store/chat";
import Chat from "../Chat";
import SideBar from "../SideBar";

export default function SideContainer(props) {
    const [selectedBar, setSelectedBar] = useState("notSelected");
    const setVideoShow = props.setVideoShow;
    const sendMessage = props.sendSocket;
    return (
        <>
            <SideBar setVideoShow={setVideoShow} setSelectedBar={setSelectedBar}/>
            {(selectedBar === "chat" && <Chat sendMessage={sendMessage} setSelectedBar={setSelectedBar}/>)}
        </>
    );




}