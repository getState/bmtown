import React from "react";
import styled from "styled-components";
import Chat from "../components/Chat";
import TownMain from "../components/TownMain";

const Div = styled.div`
  display: flex;
  flex-direction: row;
`
const Town = () => {
  return (
    <Div>
      <Chat/>
      <TownMain/>
    </Div>
  );
};

export default Town;
