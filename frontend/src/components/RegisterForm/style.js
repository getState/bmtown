import styled from "styled-components";


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Label = styled.label`
    padding: 10px;
    text-align:center
`;
export const Text = styled.div`
    font-size: 18px;
    font-weight: 600;
    padding: 10px;
`;

export const InputCommon = () => `
    width: 200px;
    height: 50px;
    border: 1px solid #D7D7D7;
    border-radius: 8px;
    background: #FFFFFF;
    font-size: 16px;
    padding: 0px 10px;
    transition: 0.3s all ease-in;
    &:focus{
        outline: none;
        border: 1px solid #045D8B;
        transform: scale(1.1);
    }
`;
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
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    color: #FFFFFF;
    border: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: 0.3s all ease-in;
    &:hover{
      cursor: pointer;
      transform: scale(1.1);
    }
`

export const InputId = styled.input`
    ${InputCommon()}
`;

export const InputNick = styled.input`
    ${InputCommon()}
    width: 300px;
`;

export const Button = styled.button`
    ${ButtonCommon("#045D8B")}
    opacity: 0.5;
`;

