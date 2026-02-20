import React, { useState } from "react";
import { addFullTimeStudent, addPartTimeStudent } from "../services/StudentService";

function StudentForm({ refresh }) {
  const [studentType, setStudentType] = useState("FULL_TIME");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfJoining: "",
    stipend: "",
    hoursPerWeek: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (studentType === "FULL_TIME") {
      addFullTimeStudent(formData).then(() => refresh());
    } else {
      addPartTimeStudent(formData).then(() => refresh());
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      dateOfJoining: "",
      stipend: "",
      hoursPerWeek: ""
    });
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Add Student</h2>

      <select
        value={studentType}
        onChange={(e) => setStudentType(e.target.value)}
      >
        <option value="FULL_TIME">Full Time</option>
        <option value="PART_TIME">Part Time</option>
      </select>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="date" name="dateOfJoining" value={formData.dateOfJoining} onChange={handleChange} required />

        {studentType === "FULL_TIME" ? (
          <input name="stipend" placeholder="Stipend" value={formData.stipend} onChange={handleChange} required />
        ) : (
          <input name="hoursPerWeek" placeholder="Hours Per Week" value={formData.hoursPerWeek} onChange={handleChange} required />
        )}

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default StudentForm;
