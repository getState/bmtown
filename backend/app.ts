import * as express from "express"
import { connect } from "./db";
import { User } from "./models/User";
import authRouter from "./routes/auth";
import userRouter from "./routes/user";
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


app.use("/user", userRouter);
app.use("/auth", authRouter);

app.listen(5000,()=>console.log("start"));