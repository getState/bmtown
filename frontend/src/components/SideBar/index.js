import React from "react";
import { Container, HomeIcon, Icon, IconContainer, IconSvg } from "./style";

export default function SideBar(props) {
    const setSelectedBar = props.setSelectedBar;
    return (
        <Container>
            <HomeIcon src="/home.svg"/>
            <IconContainer>
                <Icon onClick={() => setSelectedBar(selected => selected === "chat" ? "notSelected" : "chat")}>
                    <IconSvg src="/chatting.svg"/>
                </Icon>
                <Icon onClick={() => setSelectedBar(selected => selected === "users" ? "notSelected" : "users")}>
                    <IconSvg src="/users.svg"/>
                </Icon>
            </IconContainer>
        </Container>
    );




}