import * as express from "express"

class App {
  public application : express.Application;
  constructor(){
    this.application = express();
  }
}

const app = new App().application;
app.get("/",(req : express.Request , res : express.Response) =>{
  res.send("start");
})

app.listen(3000,()=>console.log("start"));