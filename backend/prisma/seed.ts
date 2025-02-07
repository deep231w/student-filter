import {PrismaClient} from "@prisma/client";
import dotenv from "dotenv";


dotenv.config({path:"../.env"});
const prisma= new PrismaClient();

async function main(){

await prisma.user.createMany({
    data:[
        {
            name:"Deepak Maharana",
            school:"saraswati sisu vidyamandir",
            rollno:"1",
            village:"kuhudi"
        },{
            name:"Raju Sarkar",
            school:"swami vivekananda school ",
            rollno:"1",
            village:"balugaon"
        },{
            name:"Sanju Behera",
            school:"janata high school",
            rollno:"2",
            village:"kuhudi"
        },{
            name:"Smruti Jena",
            school:"saraswati sisu vidyamandir",
            rollno:"2",
            village:"kuhudi"
        },{
            name:"Sumeet Maharana",
            school:"swami vivekananda school",
            rollno:"2",
            village:"tangi"
        },{
            name:"Rajesh Nayak",
            school:"janata high school",
            rollno:"3",
            village:"kuhudi"
        },{
            name:"Rama Barik",
            school:"janata high school",
            rollno:"4",
            village:"balugaon"
        },{
            name:"Biswa Barik",
            school:"janata high school",
            rollno:"5",
            village:"tangi"
        },{
            name:"Samir Sahoo",
            school:"saraswati sisu vidyamandir",
            rollno:"3",
            village:"balugaon"
        },{
            name:"Rama Barik",
            school:"swami vivekananda school",
            rollno:"5",
            village:"tangi"
        },{
            name:"Rama Barik",
            school:"janata high school",
            rollno:"6",
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