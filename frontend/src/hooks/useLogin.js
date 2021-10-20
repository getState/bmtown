import axios from 'axios';

export const fetchLogin =async  (userId, setUser, history) => {
    const { userInfo, token } = (await axios.get(`http://127.0.0.1:5000/user/?userId=${userId}`)).data;
    if (userInfo !== null) {
        history.push("/town");
        setUser({nickname: userInfo.nickname, userId: userInfo.userId});
        return true;
    }
    else {
        return false;
    }
}