import styled from "styled-components";


export const Form = styled.form`
    width: 500px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.input`
    width: 300px;
    height: 100px;
    border-radius: 10px;
    &:focus{
        outline: 1px solid blue;
    }
`

const ButtonCommon=(bgColor)=>`
    width: 300px;
    height: 100px;
    background-color: ${bgColor}
    border-radius: 30px;
`

export const LoginButton = styled.button`
  ${ButtonCommon("blue")}
`;

export const SignupButton = styled.a`
  ${ButtonCommon("grey")}
`;
