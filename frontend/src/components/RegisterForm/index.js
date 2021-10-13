import React from "react";
import { Button, Form, InputId, InputNick, Label, Text } from "./style";


export default function RegisterForm(){
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

