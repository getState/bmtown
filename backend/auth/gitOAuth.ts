import axios from "axios";
import { URLSearchParams } from "url";

export async function getAccessToken(code) {
    const cliendId = process.env.CLIENT_ID;
    const secret = process.env.SECRET;

    const TOKEN_URL = `https://github.com/login/oauth/access_token?client_id=${cliendId}&client_secret=${secret}&code=${code}`;
    const data : any = (await axios.post(TOKEN_URL)).data;

    const searchParams = new URLSearchParams(data);
    const accessToken = searchParams.get('access_token');
    return accessToken;
}

export async function getGitInfo(accessToken) {
    const USER_PROFILE_URL = 'https://api.github.com/user';

    const { data : userInformation } :any = await axios.get(USER_PROFILE_URL, {
        headers: {
            Authorization: `token ${accessToken}`
        }
    });

    return userInformation;
}