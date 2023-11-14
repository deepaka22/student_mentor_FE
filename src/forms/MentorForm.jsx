import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MentorForm = ()=>{

  const [mentName, setmentName] = useState("");
  const [batch,setbatch] = useState("");
  const [course, Setcourse] = useState("");

  const navitoGetstu = useNavigate();

  
const formHandler = (e)=>{

  e.preventDefault();
  
  console.log(e);
  // console.log(stuname, MenAssigned, mentorName, Batch, course);
  
  const mentorDetails = {mentorName:mentName, mentorBatch: batch, course:course };
  // const jsonformat = JSON.stringify(studentDetails);
  console.log(mentorDetails);
  
  fetch ("https://deepak-student-mentor.onrender.com/mentors/newMentor", {
    method:"POST", 
    headers:{
      "content-type" : "application/json",
    },
    body: JSON.stringify(mentorDetails)}).then(()=>navitoGetstu('/AllMentors'))
  
  }


    return(
        <div className='row'>
                      <div className='col-sm-2'></div>
                      <div className='col-sm-8'>

            <div className="mt-4 mb-4 text-center"><h1>Mentors Form</h1></div>

<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">Mentor Name <span className="colorforstar">*</span></label>
  <input type="text" className="form-control" id="formGroupExampleInput" 
  onChange={(e)=>{setmentName(e.target.value)}} required placeholder="Enter you Name"/>
</div>


  <div className="col-md-12 mb-3">
    <label htmlFor="inputState" className="form-label">Batch Name <span className="colorforstar" >*</span></label>
    <input type="text" className="form-control" id="formGroupExampleInput" 
    onChange={(e)=>{setbatch(e.target.value)}} required placeholder="Enter your Batch name"/>
  </div>

  <div className="col-md-12 mb-3">
    <label htmlFor="inputState" className="form-label">Course<span className="colorforstar">*</span></label>
    <select id="inputState"  className="form-select" onChange={(e)=>{Setcourse(e.target.value)}} required>
      <option value={"invalid"} >Choose...</option>
      <option value={"FSD"}>FSD</option>
      <option value={"Data Scientist"}>Data Scientist</option>
      <option value={"Cyber security"}>Cyber security</option>
      <option value={"Application Testing"}>Application Testing</option>
    </select>
  </div>
<div>  <button className="btn btn-primary col-md-12" onClick={(e)=>{formHandler(e)}} type="submit" >Submit</button>
</div>
</div>
<div className='col-sm-2'></div>

        </div>

    )
}

export default MentorForm;