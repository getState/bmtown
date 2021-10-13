import React from "react";
import { Button, Form, InputId, InputNick, Label, Text } from "./style";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from "react";


export default function RegisterForm() {
    const [accessToken, setAccessToken] = useState(undefined);

    const searchParams = new URLSearchParams(useLocation().search);
    const code = searchParams.get("code");

    const getAccessToken = async (code) => {
        const { data } = await axios.post("http://127.0.0.1:5000/auth", { code });
        const { accessToken, userInfomation } = data;
        setAccessToken(accessToken);
        console.log(accessToken);
    }


    useEffect(() => {
        getAccessToken(code);
    },[])

    return (
        <Form>
            <Label>
                <Text>
                    아이디
                </Text>
                <InputId
                    type="text"
                    placeholder="아이디를 입력하세요."
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
                    required
                >
                </InputNick>
            </Label>
            <Button>
                회원가입
            </Button>
        </Form>

    );
}

