import React from 'react';
import { Route } from 'react-router';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';
import { Container, LogoImg, LogoLink } from './style';

export default function LoginContainer(){
    return (
        <Container>
            <LogoLink to="/">
                <LogoImg src="/logo.png" />
            </LogoLink>
            <Route exact path="/" component={LoginForm}></Route>
            <Route exact path="/auth/callback" component={RegisterForm}></Route>
        </Container>
    );
}

