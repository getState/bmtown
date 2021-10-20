import React from "react";
import styled from "styled-components";
import TownMain from "../components/TownMain";
import SideContainer from "../components/SideContainer";
import { useSocket } from "../hooks/useSocket";
import { useRecoilState } from "recoil";
import { chatList } from "../store/chat";
import { otherLocations } from "../store/locations";
const Div = styled.div`
  display: flex;
  flex-direction: row;
`
const Town = () => {
  const [messageList, setMessageList] = useRecoilState(chatList);
  const [otherLocation,setOtherLocation] = useRecoilState(otherLocations);
  const sendSocket = useSocket((msg) => {
    if (msg.type === "msg") {
      setMessageList(messageList => messageList.concat(msg));
    }
    else if (msg.type === "move") {
      setOtherLocation(otherLocation=> otherLocation.set(msg.nickname, msg));
    }
  })

  return (
    <Div>
      <SideContainer sendSocket={sendSocket}/>
      <TownMain sendSocket={sendSocket}/>
    </Div>
  );
};

export default Town;
