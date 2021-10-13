import * as express from "express"
import { connect } from "./db";
import { User } from "./models/User";
import authRouter from "./routes/auth";
const cors=require("cors");

connect();

const corsOption = {
  origin: "http://127.0.0.1:3000",
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

app.get("/add", async (req: express.Request, res: express.Response) => {
  const user = new User({
    username: "testuser",
    email: "test@test.com",
    password: "testpassword"
  });
  user.save((err, userInfo) => {
    console.log("Added user" + JSON.stringify(user))
    res.send("Add user complete");
  }); 
})

app.get("/", async (req: express.Request, res: express.Response) => {
  User.find({}, (err, user) => {
    console.log("get User from Mongo");
    res.send(user);
  }).clone().catch(function (err) { console.log(err) });
  
})

app.use("/auth", authRouter);

app.listen(5000,()=>console.log("start"));