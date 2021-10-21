import React,{ useState } from 'react';
import { useHistory } from 'react-router';
import {useRecoilState} from 'recoil';
import { fetchLogin } from "../../hooks/useLogin";
import { Div, Input, LoginButton, SignupButton} from './style';
import { Modal } from '../Modal';
import { userAtom } from '../../store/user';
  

export default function LoginForm() {
    const cliendId = process.env.REACT_APP_CLIENT_ID;
    const callbackURL = process.env.REACT_APP_CALL_BACK;
    const url = `https://github.com/login/oauth/authorize?client_id=${cliendId}&redirect_url=${callbackURL}`;

    const history = useHistory();
    
    const [userId, setUserId] = useState('');
    const [loginFail, setLoginFail] = useState(false);
    const [user, setUser] = useRecoilState(userAtom);

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
                    const result=await fetchLogin(userId,setUser, history)
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

