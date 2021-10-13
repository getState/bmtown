import React from 'react';

import { Form, Input, LoginButton, SignupButton} from './style';
  

export default function LoginForm() {
    const cliendId = '0a0df7aa812c963d01ee';
    const callbackURL = `http://127.0.0.1:3000/auth/callback`;
    const url = `https://github.com/login/oauth/authorize?client_id=${cliendId}&redirect_url=${callbackURL}`;

    return (
        <Form>
            <Input
                type="text"
                placeholder="아이디를 입력하세요."
                required
            />
            
            <LoginButton>
                로그인
            </LoginButton>

            <SignupButton href={url}>
                회원가입
            </SignupButton>
        </Form>
    );
}