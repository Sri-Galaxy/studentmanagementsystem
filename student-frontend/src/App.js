import React, { useEffect, useState } from "react";
import StudentTable from "./components/StudentTable";
import StudentForm from "./components/StudentForm";
import { getStudents, deleteStudent } from "./services/StudentService";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const loadStudents = () => {
    getStudents().then(data => setStudents(data));
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleDelete = (id) => {
    deleteStudent(id).then(() => loadStudents());
  };

  const handleSortById = () => {
    const sorted = [...students].sort((a, b) => a.id - b.id);
    setStudents(sorted);
  };

  const handleSortByName = () => {
    const sorted = [...students].sort((a, b) =>
      a.firstName.localeCompare(b.firstName)
    );
    setStudents(sorted);
  };

  const handleSortByDate = () => {
    const sorted = [...students].sort(
      (a, b) => new Date(a.dateOfJoining) - new Date(b.dateOfJoining)
    );
    setStudents(sorted);
  };

  const filteredStudents = students.filter(student =>
    student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Student Management System</h1>

      <StudentForm refresh={loadStudents} />

      <div>
        <input
          placeholder="Search by Name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button onClick={handleSortById}>Sort by ID</button>
        <button onClick={handleSortByName}>Sort by First Name</button>
        <button onClick={handleSortByDate}>Sort by Date</button>
      </div>

      <StudentTable students={filteredStudents} onDelete={handleDelete} />
    </div>
  );
}

export default App;
