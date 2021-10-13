import React from 'react';
import { Route } from 'react-router';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';
//import logo from '../../../public/logo.png';
import { Container, LogoImg, LogoLink } from './style';

export default function LoginContainer(){
    return (
        <Container>
            <LogoLink to="/">
                <LogoImg src="logo.png" />
            </LogoLink>
            <Route exact path="/" component={LoginForm}></Route>
            <Route exact path="/register" component={RegisterForm}></Route>
        </Container>
    );
}

