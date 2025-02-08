import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

interface studentData{
    id:string,
    name:string,
    school:string,
    rollno:string,
    village:string,
    fathersName:string
}

export const useStudentCard= ()=>{
    const {id}=useParams();
    const [student, setStudent]=useState<studentData|null>(null);
    const [loading, setLoading]=useState(true);
    const [error, setError]= useState<string | null>(null);

    useEffect(()=>{
        async function fetchStudent(){
            try{
                const res=await axios.get(`http://localhost:3000/api/student/${id}`)
                setStudent(res.data);
            }catch(e){
                console.log("error in hook",e)
                setError("server error ");
            }finally{
                setLoading(false);
            }
        }
        fetchStudent();
    },[id])
    
    return {student,loading,error}
}