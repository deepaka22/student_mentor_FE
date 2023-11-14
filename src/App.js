// import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom"; // imported from router package..

import Welcome from "./Welcome";
import NavbarsComp from "./Navbar/NavbarsComp";
import StudentForms from "./forms/StudentForms";
import MentorForm from "./forms/MentorForm";
import GetStudentsData from "./ShowDetails/GetStudentsData";
import GetMentorDatas from "./ShowDetails/GetMentorDatas";
import AssignMentor from "./AssigningMentor/AssignMentor";
import GetParticularMentor from "./ShowDetails/GetParticularMentor";

const App = () => {
  return (
    <div className="App">
      <NavbarsComp />
      {/* messgae --  navbar components */}
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/AllStudents" element={<GetStudentsData />}></Route>
        <Route path="/AllMentors" element={<GetMentorDatas />}></Route>
        <Route path="/students" element={<StudentForms />}></Route>
        <Route path="/Mentors" element={<MentorForm />}></Route>
        <Route path="AssigningMentor" element={<AssignMentor />}></Route>
        <Route path="findStudent" element={<GetParticularMentor />}></Route>
      </Routes>
    </div>
  );
};

export default App;
