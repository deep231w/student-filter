import { useStudentCard } from "../hook/useStudentDetails"


export const StudentCard= ()=>{
    const {student, loading,error} =useStudentCard();
    return(
        <div className="flex flex-col items-center justify-center h-screen ">
            <div className="flex flex-col items-left text-2xl">
                <h1 className="text-blue-600"><strong className="text-gray-800">Name : </strong>{student?.name}</h1>
                <p className="text-blue-600"><strong className="text-gray-800">School : </strong>{student?.school}</p>
                <p className="text-blue-600"><strong className="text-gray-800">Roll Number :</strong>{student?.rollno}</p>
                <p className="text-blue-600"><strong className="text-gray-800">Village : </strong>{student?.village}</p>
                <p className="text-blue-600"><strong className="text-gray-800">Father's Name : </strong>{student?.fathersName}</p>
            </div>
        </div>
    )
}