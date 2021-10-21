import React, { useState } from "react";
import styled from "styled-components";
import TownMain from "../components/TownMain";
import SideContainer from "../components/SideContainer";
import { useSocket } from "../hooks/useSocket";
import { useRecoilState } from "recoil";
import { chatList } from "../store/chat";
import { otherLocations } from "../store/locations";
import Videos, {VideoList} from "../components/VideoList";
const Div = styled.div`
  display: flex;
  flex-direction: row;
`
const Town = () => {
  const [videoShow, setVideoShow] = useState(false);
  const [messageList, setMessageList] = useRecoilState(chatList);
  const [otherLocation,setOtherLocation] = useRecoilState(otherLocations);
  const [sendSocket, socketRef] = useSocket((msg) => {
    if (msg.type === "msg") {
      setMessageList(messageList => messageList.concat(msg));
    }
    else if (msg.type === "move") {
      setOtherLocation(otherLocation=> otherLocation.set(msg.nickname, msg));
    }
  })

  return (
    <Div>
      <SideContainer sendSocket={sendSocket} setVideoShow={setVideoShow}/>
      <TownMain videoShow={videoShow} sendSocket={sendSocket} socketRef={socketRef}/>
    </Div>
  );
};

export default Town;
