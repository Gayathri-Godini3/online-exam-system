import React from "react";
import axios from "axios";

const FacultyList = ({ faculties, setFaculties }) => {
  const handleRemove = async (id) => {
    try {
      await axios.delete(
        `https://ystqxz-8000.csb.app/api/faculty/remove/${id}/`
      );
      setFaculties(faculties.filter((faculty) => faculty.id !== id));
    } catch (err) {
      console.error("Error removing faculty:", err);
      alert("Failed to remove faculty.");
    }
  };

  return (
    <div>
      <h2>Faculty List</h2>
      <ul>
        {faculties.map((faculty) => (
          <li key={faculty.id}>
            {faculty.name} - {faculty.department}
            <button onClick={() => handleRemove(faculty.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacultyList;
