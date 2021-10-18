import axios from 'axios';
import { userAtom } from '../store/user';

export const fetchLogin =async  (userId, setUser, history) => {
    const { userInfo, token } = (await axios.get(`http://127.0.0.1:5000/user/?userId=${userId}`)).data;
    console.log(userInfo);
    if (userInfo !== null) {
        history.push("/town");
        console.log(userInfo);
        setUser({nickname: userInfo.nickname, userId: userInfo.userId});
        
        return true;
    }
    else {
        return false;
    }
}