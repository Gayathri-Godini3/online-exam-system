import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Exam from "./pages/Exam";
import NavbarComponent from "./components/Navbar";
import Welcome from "./components/Welcome";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import AddFaculty from "./components/AddFaculty";
import FacultyList from "./components/FacultyList";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Welcome />} /> {/* Default to Login */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/teacherdashboard" element={<TeacherDashboard />} />
        <Route path="/add-faculty" element={<AddFaculty />} />
        <Route path="/faculty-list" element={<FacultyList />} />
      </Routes>
    </Router>
  );
}

export default App;
