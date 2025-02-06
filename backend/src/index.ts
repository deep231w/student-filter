import express,{Response,Request } from "express";
import userDetails from "../src/routes/userDetails"


const app=express();

app.use(express.json());

app.get("/",userDetails );


app.listen(3000, ()=>{
    console.log("server running on port 3000");
})