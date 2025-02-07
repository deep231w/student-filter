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
            village:"kuhudi",
            fathersName:"Rabindra Maharana"
        },{
            name:"Raju Sarkar",
            school:"swami vivekananda school ",
            rollno:"1",
            village:"balugaon",
            fathersName:"Saroj"
        },{
            name:"Sanju Behera",
            school:"janata high school",
            rollno:"2",
            village:"kuhudi",
            fathersName:"Xyz"
        },{
            name:"Smruti Jena",
            school:"saraswati sisu vidyamandir",
            rollno:"2",
            village:"kuhudi",
            fathersName:"Shyama"
        },{
            name:"Sumeet Maharana",
            school:"swami vivekananda school",
            rollno:"2",
            village:"tangi",
            fathersName:"YYYY"
        },{
            name:"Rajesh Nayak",
            school:"janata high school",
            rollno:"3",
            village:"kuhudi",
            fathersName:"Saroj"
        },{
            name:"Rama Barik",
            school:"janata high school",
            rollno:"4",
            village:"balugaon",
            fathersName:"Deeep"
        },{
            name:"Biswa Barik",
            school:"janata high school",
            rollno:"5",
            village:"tangi",
            fathersName:"Rahul"
        },{
            name:"Samir Sahoo",
            school:"saraswati sisu vidyamandir",
            rollno:"3",
            village:"balugaon",
            fathersName:"Gudu "
        },{
            name:"Rama Barik",
            school:"swami vivekananda school",
            rollno:"5",
            village:"tangi",
            fathersName:"Manas"
        },{
            name:"Rama Barik",
            school:"janata high school",
            rollno:"6",
            village:"tangi",
            fathersName:"Kalia"
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