import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';
import { Div, Input, LoginButton, SignupButton} from './style';
import { Modal } from '../Modal';
  

export default function LoginForm() {
    const cliendId = '0a0df7aa812c963d01ee';
    const callbackURL = `http://127.0.0.1:3000/auth/callback`;
    const url = `https://github.com/login/oauth/authorize?client_id=${cliendId}&redirect_url=${callbackURL}`;

    const [userId, setUserId] = useState('');
    const [loginFail, setLoginFail] = useState(false);

    return (
        <Div>
            <Input
                type="text"
                placeholder="아이디를 입력하세요."
                onChange={(e)=>setUserId(e.target.value)}
                required
            />
            
            <LoginButton
                onClick={async () => {
                    const result=await doLogin(userId)
                    setLoginFail(!result)
                }}
            >
                로그인
            </LoginButton>

            <SignupButton href={url}>
                회원가입
            </SignupButton>

            <Modal
                message="존재하지 않는 ID입니다."
                visible={loginFail}
                callback={() => { setLoginFail(false) }}
            />
            
        </Div>
    );
}

const doLogin =async  (userId) => {
    const { userInfo, token } = (await axios.get(`http://127.0.0.1:5000/user/?userId=${userId}`)).data;
     
    if (userInfo !== null) {
        window.location.href = "/town";
        return true;
    }
    else {
        return false;
    }
}
