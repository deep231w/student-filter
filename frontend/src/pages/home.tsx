import { StudentList } from "../component/studentList"

export const Home= ()=>{
    return (
        <div className="flex flex-col items-start justify-start min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 border-b">Student List</h1>
            <StudentList />
        </div>
    );
}