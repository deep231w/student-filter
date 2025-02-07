import axios from "axios";
import { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
interface studentData{
    id:string,
    name:string,
    school:string,
    rollno:string,
    village:string
}

type props={
    filter:{
        school?:string,
        rollno?:string,
        village?:string
    }
}
export const StudentList= ({filter}:props)=>{

    const [students, setStudents]=useState<studentData[]>([]);
    const [filterStudents,  setFilterStudents]= useState<studentData[]>([])
    useEffect(()=>{
       async function fetchStudents() {
        try{
            const res=await axios.get(`http://localhost:3000/api/student`)
            const data=res.data;
            setStudents(data);
            setFilterStudents(data);
        }catch(e){
            console.log("error during fetching student details", e);
        }
       }

       fetchStudents();
    },[])
    
    useEffect(()=>{
        const filtered=students.filter(student => {
            return (
              (!filter.school || student.school === filter.school) &&
              (!filter.rollno || student.rollno === filter.rollno) &&
              (!filter.village || student.village === filter.village)
            );
          })
          setFilterStudents(filtered);
    },[filter,students]);

    return (
        <div>
            {filterStudents.map(student=> 
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