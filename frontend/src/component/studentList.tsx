import axios from "axios";
import { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
interface studentData{
    id:string,
    name:string
}

export const StudentList= ()=>{

    const [students, setStudents]=useState<studentData[]>([]);

    useEffect(()=>{
       async function fetchStudents() {
        try{
            const res=await axios.get("http://localhost:3000/api/student")
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
            {students.map(student=> 
                <h1 key={student.id}>
                    <Link 
                        to={`/student/${student.id}`}
                        className="block text-lg font-medium text-blue-600 hover:text-blue-800 transition">
                            {student.name}
                    </Link>
                </h1>)}
        </div>
    )
}