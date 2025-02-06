import express,{Response,Request } from "express";
import userDetails from "./routes/userDetails"
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app=express();

app.use(cors({
    origin:"http://localhost:5173",
    methods:['GET','POST','DELET','PUT'],
    credentials:true
}))

app.use(express.json());

app.use("/api",userDetails );


app.listen(3000, ()=>{
    console.log("server running on port 3000");
})