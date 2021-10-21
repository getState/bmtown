import axios from 'axios';

export const fetchLogin = async (userId, setUser, history) => {
    const url = process.env.REACT_APP_BE_HOST;
    const { userInfo, token } = (await axios.get(`${url}/user/?userId=${userId}`)).data;
    if (userInfo !== null) {
        history.push("/town");
        setUser({nickname: userInfo.nickname, userId: userInfo.userId});
        return true;
    }
    else {
        return false;
    }
}