import axios from "axios";
import { useEffect, useState } from "react"; 

interface studentData{
    id:string,
    name:string
}

export const StudentList= ()=>{

    const [students, setStudents]=useState<studentData[]>([]);

    useEffect(()=>{
       async function fetchStudents() {
        try{
            const res=await axios.get("http://localhost:3000/api/user")
            const data=res.data;
            setStudents(data);
        }catch(e){
            console.log("error during fetching student details", e);
        }
       }

       fetchStudents();
    },[])

    return (
        <div>
        {students.map(student=> <h1 key={student.id}>{student.name}</h1>)}
            </div>
    )
}