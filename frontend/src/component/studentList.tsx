import { Link } from "react-router-dom";
import { useStudents } from "../context/userContext";

type Props = {
  filter: {
    school?: string;
    rollno?: string;
    village?: string;
  };
};

export const StudentList = ({ filter }: Props) => {
  const { students, loading, error } = useStudents();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const filteredStudents = students.filter((student) => {
    return (
      (!filter.school || student.school === filter.school) &&
      (!filter.rollno || student.rollno === filter.rollno) &&
      (!filter.village || student.village === filter.village)
    );
  });

  return (
    <div>
      {filteredStudents.length > 0 ? (
        filteredStudents.map((student) => (
          <h1 key={student.id}>
            <Link
              to={`/student/${student.id}`}
              className="block text-lg font-medium text-blue-600 hover:text-blue-800 transition"
            >
              {student.name}
            </Link>
          </h1>
        ))
      ) : (
        <p>No students found</p>
      )}
    </div>
  );
};
