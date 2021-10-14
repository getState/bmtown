import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';
import { Form, Input, LoginButton, SignupButton} from './style';
  

export default function LoginForm() {
    const cliendId = '0a0df7aa812c963d01ee';
    const callbackURL = `http://127.0.0.1:3000/auth/callback`;
    const url = `https://github.com/login/oauth/authorize?client_id=${cliendId}&redirect_url=${callbackURL}`;

    const [userId, setUserId] = useState('');

    return (
        <div>
            <Input
                type="text"
                placeholder="아이디를 입력하세요."
                onChange={(e)=>setUserId(e.target.value)}
                required
            />
            
            <LoginButton
                onClick={()=>{doLogin(userId)}}
            >
                로그인
            </LoginButton>

            <SignupButton href={url}>
                회원가입
            </SignupButton>
        </div>
    );
}

const doLogin =async  (userId) => {
    const { userInfo, token } = (await axios.get(`http://127.0.0.1:5000/user/?userId=${userId}`)).data;
     
    if (userInfo !== null) {
        console.log("로그인 성공!");
    }
    else {
        console.log("로그인 실패!");
    }
}
