import React from 'react';
import LoginForm from '../LoginForm';
//import logo from '../../../public/logo.png';
import { Container, LogoImg, LogoLink } from './style';


export default function LoginContainer(){
    return (
        <Container>
            <LogoLink to="/">
                <LogoImg src="logo.png" />
            </LogoLink>
            <LoginForm></LoginForm>
        </Container>
    );
}

