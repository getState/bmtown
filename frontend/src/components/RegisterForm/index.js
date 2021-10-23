import React from "react";
import { Button, Div, InputId, InputNick, Label, Text } from "./style";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import { fetchRegister } from "../../hooks/useRegister";
import axios from 'axios';
import { Modal } from "../Modal";


export default function RegisterForm() {
    const [accessToken, setAccessToken] = useState(undefined);
    const [userId, setUserId] = useState('');
    const [nickname, setNickname] = useState('');
    const [regSuccess, setregSuccess] = useState(false);
    const [regFail, setregFail] = useState(false);

    const searchParams = new URLSearchParams(useLocation().search);
    const code = searchParams.get("code");

    const getAccessToken = async (code) => {
        const url = process.env.REACT_APP_BE_HOST;
        const { data } = await axios.post(`${url}/auth`, { code });
        const { accessToken, userInfomation } = data;
        setAccessToken(accessToken);
    }

    useEffect(() => {
        getAccessToken(code);
    }, [])

    return (
        <Div>
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
                onClick={async () =>{
                    const result=await fetchRegister(accessToken, userId, nickname)
                    setregSuccess(result)
                    setregFail(!result)
                }}
            >
                회원가입
            </Button>

            <Modal
                message='회원가입 완료!'
                visible={regSuccess}
                callback={() => { window.location.href = "/" }}
            />
            
            <Modal
                message="이미 존재하는 id이거나 이미 회원가입된 계정입니다."
                visible={regFail}
                callback={()=>{setregFail(false)}}
            />
                  
        </Div>
    );
}