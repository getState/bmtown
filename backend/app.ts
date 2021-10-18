import * as express from "express"
import * as http from "http";
import { Server } from "socket.io";
import { connect } from "./db";
import { User } from "./models/User";
import authRouter from "./routes/auth";
import userRouter from "./routes/user";
import { liveStart } from "./routes/live";
import * as cookieParser from "cookie-parser";

const cors=require("cors");

connect();

const corsOption = {
  origin: ["http://127.0.0.1:3000","http://localhost:3000"],
  credentials: true
}

class App {
  public application : express.Application;
  constructor(){
    this.application = express();
  }
}

const app = new App().application;


app.use(express.json());
app.use(cors(corsOption));
app.use(cookieParser());

app.use("/user", userRouter);
app.use("/auth", authRouter);




// 소켓 연결을 위한 http 서버 생성
const server = require("http").Server(app);
let io = require('socket.io')(server, {
  requestCert: true,
  secure: true,
  rejectUnauthorized: false,
  transports: ['websocket']
});
liveStart(io);
server.listen(5000,()=>console.log("start"));