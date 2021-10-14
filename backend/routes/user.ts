const express = require('express');
import { User } from '../models/User';
import jwtToken from "../auth/token";
import { getGitInfo } from "../auth/gitOAuth";

const tokenGenerator = jwtToken().sign;

const userRouter = express.Router();

//로그인
userRouter.get("/", async (req, res, next) => {
    const userId = req.param("userId");
    
    const userInfo = await getUserbyUserId(userId);
    if (userInfo !== null) {
        const newToken = await tokenGenerator(userInfo);
        res.status(200).json({ userInfo, token: newToken });
    }
    else {
        res.status(200).json({ userInfo });
    }
})


//회원가입
userRouter.post("/", async (req, res, next) => {
    const { userId, nickname, accessToken } = req.body;
    const githubInfo  = (await getGitInfo(accessToken));
    

    const validationUserId = await isUnique({ userId: userId });
    const validationGithubId = await isUnique({ githubId: githubInfo.id });
    

    if (validationUserId && validationGithubId) {
        const newUser = new User({ userId, nickname, githubId: githubInfo.id });
        newUser.save();
        res.status(200).json({ result: true });
    }
    else {
        res.status(200).json({ result: false });
    }
})

//------to do refactor
const isUnique = async ( attribute ) => {
    return (await User.countDocuments(attribute).exec())===0;
}

const getUserbyUserId = async (userId) => {
    const userInfo = await User.findOne({ userId }).exec();
    return userInfo;
}




export default userRouter ;