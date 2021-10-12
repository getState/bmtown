import React from 'react';

import { Form, Input, LoginButton, SignupButton} from './style';
  

export default function LoginForm(){
    return (
        <Form>
            <Input
                type="text"
                placeholder="아이디를 입력하세요."
            />
            
            <LoginButton>
                로그인
            </LoginButton>

            <SignupButton>
                회원가입
            </SignupButton>
        </Form>
    );
}