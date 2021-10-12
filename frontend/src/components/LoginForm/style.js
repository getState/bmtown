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
    width: 200px;
    height: 50px;
    margin-bottom: 30px;
    border: 1px solid #D7D7D7;
    border-radius: 8px;
    background: #FFFFFF;
    &:focus{
        outline: none;
        border: 1px solid #045D8B;
    }
`

const ButtonCommon = (bgColor) =>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 50px;
    margin-top: 20px;
    
    background-color: ${bgColor};
    border-radius: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    border: 0;

    &:hover{
      cursor: pointer;
    }
`

export const LoginButton = styled.button`
  ${ButtonCommon("blue")}
`;

export const SignupButton = styled.a`
  ${ButtonCommon("grey")}
`;
