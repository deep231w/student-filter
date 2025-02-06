import express ,{Response, Request} from "express";
import prisma from "../db/db";
const router=express.Router();

router.get("/user", async(req:Request, res:Response)=>{
    console.log("inside route");
    try{
        const users= await prisma.user.findMany({
            select:{
                id:true,
                name:true,
                school:true,
                rollno:true,
                village:true
            }
        })
        res.status(200).json(users);
    }catch(e){
        console.log("error during fetch user details " ,e);
        res.status(500).json({
            error:"server error"
        })

    }
})
router.get("/filter",async(req:Request, res:Response)=>{

})


export default router ;