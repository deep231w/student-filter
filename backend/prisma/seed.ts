import {PrismaClient} from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
const prisma= new PrismaClient();

async function main(){

await prisma.user.createMany({
    data:[
        {
            name:"deepak",
            school:"Saraswati sisu vidyamandir",
            rollno:"1",
            village:"kuhudi"
        },{
            name:"raju",
            school:"swami vivekananda school ",
            rollno:"1",
            village:"balugaon"
        },{
            name:"sanju",
            school:"janata high school",
            rollno:"2",
            village:"kuhudi"
        },{
            name:"smruti",
            school:"saraswati sisu vidyamandir",
            rollno:"2",
            village:"kuhudi"
        },{
            name:"sumeet",
            school:"swami vivekananda school",
            rollno:"2",
            village:"tangi"
        },{
            name:"rajesh",
            school:"janata high school",
            rollno:"3",
            village:"tangi"
        },{
            name:"rama",
            school:"janata high school",
            rollno:"4",
            village:"tangi"
        }
    ]
})
}

main()
    .catch((e)=>{
        console.log("error during seeding", e);
    })
    .finally(async()=>{
        await prisma.$disconnect();
    })