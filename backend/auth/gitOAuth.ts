import axios from "axios";
import { URLSearchParams } from "url";

export async function getAccessToken(code) {
    const cliendId = '0a0df7aa812c963d01ee';
    const secret = '88cc8e6f85330ae5c0ff3e3c3f6cd0937c245ade';

    const TOKEN_URL = `https://github.com/login/oauth/access_token?client_id=${cliendId}&client_secret=${secret}&code=${code}`;
    const data : any = (await axios.post(TOKEN_URL)).data;

    const searchParams = new URLSearchParams(data);
    const accessToken = searchParams.get('access_token');
    return accessToken;
}

export async function getGitInfo(accessToken) {
    const USER_PROFILE_URL = 'https://api.github.com/user';

    const { data: userInformation } = await axios.get(USER_PROFILE_URL, {
        headers: {
            Authorization: `token ${accessToken}`
        }
    });

    return userInformation;
}