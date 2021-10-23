import axios from 'axios';

export const fetchRegister = async (accessToken, userId, nickname) => {
    const url = process.env.REACT_APP_BE_HOST;
    const { result } = (await axios.post(`${url}/user`, { accessToken, userId, nickname })).data;
    if (result) {
        return true;
    }
    else {
        return false;
    }
}