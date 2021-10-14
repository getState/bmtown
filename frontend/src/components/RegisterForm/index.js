import React from "react";
import { Button, Form, InputId, InputNick, Label, Text } from "./style";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from "react";


export default function RegisterForm() {
    const [accessToken, setAccessToken] = useState(undefined);
    const [userId, setUserId] = useState('');
    const [nickname, setNickname] = useState('');

    const searchParams = new URLSearchParams(useLocation().search);
    const code = searchParams.get("code");

    const getAccessToken = async (code) => {
        const { data } = await axios.post("http://127.0.0.1:5000/auth", { code });
        const { accessToken, userInfomation } = data;
        setAccessToken(accessToken);
    }
    useEffect(() => {
        getAccessToken(code);
    }, [])

    return (
        <div>
            <Label>
                <Text>
                    아이디
                </Text>
                <InputId
                    type="text"
                    placeholder="아이디를 입력하세요."
                    onChange={(e) => setUserId(e.target.value)}
                    required
                >
                </InputId>
            </Label>
            <Label>
                <Text>
                    닉네임
                </Text>
                <InputNick
                    type="text"
                    placeholder="타운에서 사용될 닉네임을 입력하세요"
                    onChange={(e) => setNickname(e.target.value)}
                    required
                >
                </InputNick>
            </Label>
            <Button
                onClick={() => doRegister(accessToken, userId, nickname)}
            >
                회원가입
            </Button>
        </div>
    );
}



const doRegister = async (accessToken, userId, nickname) => {
    const { result } = (await axios.post("http://127.0.0.1:5000/user", { accessToken, userId, nickname })).data;
    console.log(result);
    if (result) {
        window.location.href = "/";
    }
    else {
        alert("이미 존재하는 id이거나 이미 회원가입된 계정입니다.");
    }
}