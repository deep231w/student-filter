import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

interface studentData{
    id:string,
    name:string,
    school:string,
    rollno:string,
    village:string
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
        <div>
            <h1>{studentCard?.name}</h1>
            <p>{studentCard?.school}</p>
            <p>{studentCard?.rollno}</p>
            <p>{studentCard?.village}</p>
        </div>
    )
}