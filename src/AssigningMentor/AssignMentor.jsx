
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AssignMentor = ()=>{

  const navitoGetstu = useNavigate();

    const [StudentData, SetStudentData] = useState([]);
    const [MentorData, SetMentorData] = useState([]);
    const [AssignMentor, SetAssignMentor] = useState(); // Assign mentor value is recieved 

    //  student GET request
    const getStuData  = ()=> {
  
        fetch("https://deepak-student-mentor.onrender.com/students/getstudents").then((data) => {
          return data.json();
        })
        .then((data) => {
        const filterData = data.filter((ele)=>{
            
            return ele.mentorAssigned === "no"
        })
        SetStudentData(filterData);      
            console.log(filterData);
        });} 

    // Mentor GET request    
    const getMentor  = ()=> {

            fetch("https://deepak-student-mentor.onrender.com/mentors/getmentors").then((data) => {
              return data.json();
            })
            .then((data) => {
                SetMentorData(data);     
                console.log(data); 
            });} 

  

useEffect( ()=>getMentor(), [])    
useEffect( ()=>getStuData(), [])

const formHandler = (e)=>{

    e.preventDefault();

    const toAssign = {_id :AssignMentor[1], mentorName:AssignMentor[0], mentorAssigned:"yes"}
    console.log(toAssign);

    fetch(`https://deepak-student-mentor.onrender.com/students/editstudents`,
    {method: 'PUT',
    headers: {"Content-type" : "application/json"},
    body : JSON.stringify(toAssign)
    }).then(()=>navitoGetstu('/AllStudents'));

 }
 return (
 <div className='row'>
          <div className='col-sm-2 '></div>
          <div className='col-sm-8'>
          <div> <h1 className="text-center mt-4 mb-4">Assign student to Mentor</h1></div> 
{/* // form starts here */}
<form>
<table class="table table-striped">
  <thead>
    <tr>
    <th scope="col">Sl.no</th>
      <th scope="col">Student Name</th>
      <th scope="col">Student Batch</th>
      <th scope="col">Mentors</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {/* mapped students data to display  student details */}
    {StudentData.map((ele, i)=>(
    <tr key={i}>
      <td>{i+1}</td>  
      <td>{ele.studentName}</td>
      <td>{ele.batch}</td>
      <td>
<select id="inputState" className="form-select" onChange={(e)=>{SetAssignMentor([e.target.value, ele._id])}} required>
<option value={"invalid"}>Choose...</option>
    {/* mapped mentor data to display  mentor details */}
{MentorData.map((mentor, j)=>(

<option key={j}  value={mentor.mentorName}>{mentor.mentorName}</option>
))}
</select>
    </td>
<td><button className='btn btn-primary' type='submit'onClick={(e)=>{formHandler(e)}} >Set Mentor</button></td>
    </tr>
    ))}    
  </tbody>
</table>
</form>

   </div>
   <div className="col-sm-2"></div>
</div>
)}

export default AssignMentor;