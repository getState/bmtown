import axios from 'axios';
export const fetchRegister = async (accessToken, userId, nickname) => {
    const { result } = (await axios.post("http://127.0.0.1:5000/user", { accessToken, userId, nickname })).data;
    if (result) {
        return true;
    }
    else {
        return false;
    }
}