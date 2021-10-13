const express = require('express');
const axios = require("axios");
const authRouter = express.Router();
import { getAccessToken,getGitInfo } from "../auth/gitOAuth";

//## key: git code
//## value: git access Token
const usersToRegister = new Object();

authRouter.post("/", async (req, res, next) => {
    //code를 바탕으로 access token 얻어냄
    const { code } = req.body;
    const accessToken = await getAccessToken(code);
    //access token을 바탕으로 git profile 가져오기
    const userInformation = await getGitInfo(accessToken);

    //user 저장
    usersToRegister[code] = accessToken;
    
    res.status(200).send({ accessToken, userInformation });
})



export default authRouter ;