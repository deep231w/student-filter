import express,{Response,Request } from "express";
import userDetails from "./routes/userDetails"
import dotenv from "dotenv";

dotenv.config();
const app=express();

app.use(express.json());

app.use("/api",userDetails );


app.listen(3000, ()=>{
    console.log("server running on port 3000");
})