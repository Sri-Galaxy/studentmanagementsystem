import React from "react";

function StudentTable({ students, onDelete }) {
  return (
    <table border="1" cellPadding="10" style={{ margin: "20px auto", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Date Of Joining</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.email}</td>
            <td>{student.dateOfJoining}</td>
            <td>
              <button onClick={() => onDelete(student.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
