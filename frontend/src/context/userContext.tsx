import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

interface Student {
  id: string;
  name: string;
  school: string;
  rollno: string;
  village: string;
}

interface StudentContextType {
  students: Student[];
  loading: boolean;
  error: string | null;
}

const StudentContext = createContext<StudentContextType | null>(null);

export const useStudents = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error("useStudents must be used within a StudentProvider");
  }
  return context;
};

export const StudentProvider = ({ children }: { children: React.ReactNode }) => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/student");
        setStudents(res.data);
      } catch (err) {
        setError("Error fetching student details");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <StudentContext.Provider value={{ students, loading, error }}>
      {children}
    </StudentContext.Provider>
  );
};
