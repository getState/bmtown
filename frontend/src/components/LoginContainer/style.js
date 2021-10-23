import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 720px;
    height: 100vh;
    background-image: url("/bg.png");
`

export const LogoLink = styled(Link)`
    display: block;
    width: 500px;
    text-align: center;
`

export const LogoImg = styled.img`

`
