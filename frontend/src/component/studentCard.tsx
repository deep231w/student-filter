import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

interface studentData{
    id:string,
    name:string,
    school:string,
    rollno:string,
    village:string,
    fathersName:string
}

export const StudentCard= ()=>{

    const {id}=useParams<{id:string}>();

    const [studentCard, setStudentCard]=useState<studentData|null>(null);

    useEffect(()=>{
        async function fetchCard (){
            try{
                const res= await axios.get(`http://localhost:3000/api/student/${id}`)
                setStudentCard(res.data);
            }catch(e){
            console.log("error during fetching studentCard", e);
        }}
        fetchCard();
    },[id]);
    return(
        <div className="flex flex-col items-center justify-center h-screen ">
            <div className="flex flex-col items-left text-2xl">
                <h1 className="text-blue-600"><strong className="text-gray-800">Name : </strong>{studentCard?.name}</h1>
                <p className="text-blue-600"><strong className="text-gray-800">School : </strong>{studentCard?.school}</p>
                <p className="text-blue-600"><strong className="text-gray-800">Roll Number :</strong>{studentCard?.rollno}</p>
                <p className="text-blue-600"><strong className="text-gray-800">Village : </strong>{studentCard?.village}</p>
                <p className="text-blue-600"><strong className="text-gray-800">Father's Name : </strong>{studentCard?.fathersName}</p>
            </div>
        </div>
    )
}