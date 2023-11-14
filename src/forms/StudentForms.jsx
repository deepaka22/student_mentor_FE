
import './StudentForm.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const StudentForms = ()=>{


  const navitoGetstu = useNavigate();

const [stuname, Setstuname] = useState("");
const [MenAssigned, SetMenAssigned] = useState("");
const [mentorName, SetMentorName] = useState("");
const [Batch, SetBatch] = useState("");
const [course, Setcourse] = useState("");


console.log(stuname, MenAssigned, mentorName, Batch, course);


const formHandler = (e)=>{

e.preventDefault();

console.log(e);
// console.log(stuname, MenAssigned, mentorName, Batch, course);

const studentDetails = {studentName:stuname, mentorAssigned: MenAssigned, mentorName :mentorName, batch: Batch, course: course }
// const jsonformat = JSON.stringify(studentDetails);
// console.log(jsonformat);

fetch ("https://deepak-student-mentor.onrender.com/students/newstudents", {
  method:"POST", 
  headers:{
    "content-type" : "application/json",
  },
  body: JSON.stringify(studentDetails)}).then(()=>navitoGetstu('/AllStudents'))

}

    return(
        <div className='row'>
          <div className='col-sm-2'></div>
          <div className='col-sm-8'>
            <form  >
    <div className='mt-4 mb-4 text-center'><h1>Students Form</h1></div>

<div className="mb-3 ">
  <label htmlFor="formGroupExampleInput" className="form-label">Student Name <span className="colorforstar">*</span></label>
  <input type="text" className="form-control" id="formGroupExampleInput"required placeholder="Enter you Name"
  onChange={(e)=>{Setstuname(e.target.value)}}/>
</div>

<div className='row'>
<div className="col-md-4 mb-3">
    <label htmlFor="inputState" className="form-label">Is mentor assigned<span className="colorforstar">*</span></label>
    <select id="inputState" className="form-select" onChange={(e)=>{SetMenAssigned(e.target.value)}}  required>
      <option value={"invalid"}>Choose...</option>
      <option value={"yes"}>yes</option>
      <option value={"no"}  >no</option>
    </select>
  </div>

  <div className="col-md-8 mb-3">
    <label htmlFor="inputState" className="form-label">Mentor Name <span className="colorforstar">*</span></label>
    <input type="text" className="form-control" id="formGroupExampleInput" 
    onChange={(e)=>{SetMentorName(e.target.value)}} required placeholder="Enter mentor name only if assigned"/>
  </div>
  </div>

  <div className="col-md-12 mb-3">
    <label htmlFor="inputState" className="form-label">Batch <span className="colorforstar" >*</span></label>
    <input type="text" className="form-control" id="formGroupExampleInput" 
    onChange={(e)=>{SetBatch(e.target.value)}}  required placeholder="Enter your Batch name"/>
  </div>

  <div className="col-md-12 mb-3">
    <label htmlFor="inputState" className="form-label">Course<span className="colorforstar">*</span></label>
    <select id="inputState" className="form-select" onChange={(e)=>{Setcourse(e.target.value)}}  required>
      <option value={"invalid"}>Choose...</option>
      <option value={"FSD"}>FSD</option>
      <option value={"Data Scientist"}>Data Scientist</option>
      <option value={"Cyber security"}>Cyber security</option>
      <option value={"Application Testing"}>Application Testing</option>
    </select>
    
  </div>
<div>  <button className="btn btn-primary col-md-12" onClick={(e)=>{formHandler(e)}} type="submit" >Submit</button>
</div>
</form>

</div>

<div className='col-sm-2'></div>
        </div>
    )
}

export default StudentForms;