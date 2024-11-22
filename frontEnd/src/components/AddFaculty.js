import React, { useState } from "react";
import axios from "axios"; // Import axios for making API calls
import "../styles/AddFaculty.css"; // Import CSS for styling

const AddFaculty = () => {
  // State for form fields
  const [facultyData, setFacultyData] = useState({
    name: "",
    email: "",
    department: "",
  });

  const [error, setError] = useState(""); // State to handle error messages
  const [success, setSuccess] = useState(""); // State to handle success messages

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFacultyData({
      ...facultyData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make API call to add faculty
      const response = await axios.post(
        "https://ystqxz-8000.csb.app/api/faculty/add/", // Updated backend URL
        facultyData
      );

      console.log("Faculty added:", response.data);

      // Set success message
      setSuccess("Faculty added successfully!");
      setError(""); // Clear any previous error message

      // Reset form fields after submission
      setFacultyData({
        name: "",
        email: "",
        department: "",
      });
    } catch (err) {
      console.error("Error adding faculty:", err);
      setError("Error adding faculty. Please try again.");
      setSuccess(""); // Clear any previous success message
    }
  };

  return (
    <div className="add-faculty-container">
      <h2>Add Faculty</h2>
      <form onSubmit={handleSubmit} className="add-faculty-form">
        <div className="form-group">
          <label htmlFor="name">Faculty Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={facultyData.name}
            onChange={handleChange}
            placeholder="Enter faculty name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Faculty Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={facultyData.email}
            onChange={handleChange}
            placeholder="Enter faculty email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department</label>
          <input
            type="text"
            id="department"
            name="department"
            value={facultyData.department}
            onChange={handleChange}
            placeholder="Enter faculty department"
            required
          />
        </div>
        {success && <p className="success">{success}</p>}{" "}
        {/* Success message */}
        {error && <p className="error">{error}</p>} {/* Error message */}
        <button type="submit" className="submit-btn">
          Add Faculty
        </button>
      </form>
    </div>
  );
};

export default AddFaculty;
