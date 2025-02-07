import express ,{Response, Request} from "express";
import prisma from "../db/db";
const router=express.Router();


  
router.get("/student", async(req:Request, res:Response)=>{
    console.log("inside route");

    const {rollno, school, village} =req.query as Record<string, string |undefined>
    try{
        const users= await prisma.user.findMany({
            where:{
                AND:[
                    rollno? {rollno: rollno} :{},
                    school? {school: school} : {},
                    village? {village: village}:{}
                ]
            },
            select:{
                id:true,
                name:true,
                school:true,
                rollno:true,
                village:true,
                fathersName:true
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
router.get("/student/:id",async(req:Request, res:Response)=>{
    const {id}=req.params;
    if(!id){
        res.status(400).send("student not found");
    }

    try{
        const response= await prisma.user.findFirst({
            where:{
                id:parseInt(id)
            }
        })
        res.status(200).json(response);
        
    }catch(e){
        console.log("error in student card route ",e);
        res.status(500).json({
            error:"server error , rout= /student/:id"
        })
    }
})


export default router ;