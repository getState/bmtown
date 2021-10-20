import styled from "styled-components";
import {Link} from "react-router-dom";
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 72px;
    height: 100vh;
    background-color: rgb(32, 37, 64);
    z-index:1;
`

export const HomeIcon = styled.img`
    margin-top: 10px;
    display: block;
    width: 50px;
    height: 50px;
    padding: 10px;
    color: white;
    border-radius: 16px;
    background-color: rgb(88, 130, 247);
    cursor: pointer;
`

export const IconContainer = styled.div`


`


export const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 16px;
    &:hover{
        background-color: #333a64;
    }
    cursor: pointer;
`

export const IconSvg = styled.img`
    width: 100%;
    height: 100%;
`