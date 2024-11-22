// import React from "react";

// const AdminDashboard = () => {
//   return (
//     <div className="text-center mt-5">
//       <h1>Welcome, Admin!</h1>
//       <p>Manage exams, monitor students, and view reports here.</p>
//     </div>
//   );
// };

// export default AdminDashboard;
// import React from "react";
// import { Link } from "react-router-dom"; // Import Link for navigation
// import "../styles/AdminDashboard.css";

// const AdminDashboard = () => {
//   return (
//     <div className="container">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <h2>Admin Panel</h2>
//         <ul>
//           <li>
//             <Link to="/add-faculty">Add Faculty</Link>
//           </li>
//           <li>
//             <Link to="/add-student">Add Student</Link>
//           </li>
//           <li>
//             <Link to="/remove-faculty">Remove Faculty</Link>
//           </li>
//           <li>
//             <Link to="/manage-exams">Manage Exams</Link>
//           </li>
//           <li>
//             <Link to="/view-reports">View Reports</Link>
//           </li>
//         </ul>
//       </div>

//       {/* Main content beside the sidebar */}
//       <div className="main-content">
//         <div>
//           <h1>Welcome, Admin!</h1>
//           <p>Manage exams, monitor students, and view reports here.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useEffect, useState } from "react";
import axios from "axios";
import FacultyList from "../components/FacultyList";

const FacultyDashboard = () => {
  const [faculties, setFaculties] = useState([]);
  const [error, setError] = useState("");

  // Fetch faculty list from the backend
  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const response = await axios.get(
          "https://ystqxz-8000.csb.app/api/faculty/"
        );
        setFaculties(response.data); // Assuming API returns a list of faculty objects
      } catch (err) {
        console.error("Error fetching faculties:", err);
        setError("Failed to load faculty data.");
      }
    };

    fetchFaculties();
  }, []);

  return (
    <div>
      <h1>Faculty Dashboard</h1>
      <button onClick={() => (window.location.href = "/add-faculty")}>
        Add Faculty
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <FacultyList faculties={faculties} setFaculties={setFaculties} />
    </div>
  );
};

export default FacultyDashboard;
