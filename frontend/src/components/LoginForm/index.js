import React from 'react';

import { Form, Input, LoginButton, SignupButton} from './style';
  

export default function LoginForm(){
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

            <SignupButton to="/register">
                회원가입
            </SignupButton>
        </Form>
    );
}