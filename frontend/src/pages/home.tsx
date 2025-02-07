import { useState } from "react";
import { StudentList } from "../component/studentList"

export const Home= ()=>{
    const [studentFilter, setStudentFilter]=useState<{
        school?: string;
        rollno?: string;
        village?: string;
    }>({});
    const [dropdown, setDropdown]=useState<string |null>(null);

    const schools=["swami vivekananda school", "janata high school", "saraswati sisu vidyamandir"];
    const rollnos=["1","2","3","4","5","6","7","8","9","10"];
    const villages=["kuhudi","tangi","balugaon"];

    const updateFilter= (key:string, value:string)=>{
        setStudentFilter(prev=>({
            ...prev, [key]:value
        }))
    }

    return (
        <div className="flex flex-col items-start justify-start min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 border-b">Student List</h1>

        <div className="flex space-x-4 mb-4">
            <div className="relative">
                <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setDropdown(dropdown === "school" ? null : "school")}>
                    Filter by School
                </button>
                {dropdown === "school" && (
                    <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-md">
                        {schools.map((school) => (
                            <div key={school} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => updateFilter("school", school)}>
                                {school}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="relative">
                <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={() => setDropdown(dropdown === "village" ? null : "village")}>
                    Filter by Village
                </button>
                {dropdown === "village" && (
                    <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-md">
                        {villages.map((village) => (
                            <div key={village} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => updateFilter("village", village)}>
                                {village}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="relative">
                <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => setDropdown(dropdown === "rollno" ? null : "rollno")}>
                    Filter by Roll No
                </button>
                {dropdown === "rollno" && (
                    <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-md">
                        {rollnos.map((roll) => (
                            <div key={roll} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => updateFilter("rollno", roll)}>
                                {roll}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div>
                <button
                className="px-4 py-2 bg-gray-500 text-white rounded" 
                onClick={()=>(setStudentFilter({}))}>
                    Clear Filter
                </button>
            </div>
        </div>
        <div className="py-10">
            <StudentList filter={studentFilter} />
        </div>
        
    </div>
    );
}