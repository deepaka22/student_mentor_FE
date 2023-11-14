import { useEffect,useState } from "react";



const GetParticularMentor = ()=>{

    const [GetMentorData, SetGetMentorData] = useState([]);
    const [userclickMentor, SetuserclickMentor] = useState();
    const [filterData, setfilterData ] = useState([]);

    const getMentdata  = ()=> {
  
        fetch("https://deepak-student-mentor.onrender.com/mentors/getmentors").then((data) => {
          return data.json();
        })
        .then((data) => {
            SetGetMentorData(data);      
            console.log(data);
        });
  
  
        } 

        console.log(userclickMentor);

const formHandler = (e)=>{

    e.preventDefault();

    fetch("https://deepak-student-mentor.onrender.com/students/getstudents").then((data) => {
        return data.json();
      })
      .then((data) => {

        const userData = data.filter((ele)=>{
            return ele.mentorName === userclickMentor
        })
        setfilterData(userData);
      });
   
      
}

  useEffect( ()=>getMentdata(), [])
//   useEffect( ()=>getStuData(), [])
  
  console.log(userclickMentor);

    return(
        <div>
            <div className="row">
         <div className='col-sm-2'></div>
         <div className='col-sm-8 '>
        
        <h2 className="mt-4 mb-4 text-center ">Get All Students tagged under Particular Mentor </h2>

<form>
 <select class="form-select mb-2" onChange={(e)=>{SetuserclickMentor(e.target.value)}} aria-label="Default select example">
  <option value={"invalid"}>...choose</option>
  {GetMentorData.map((ment, k)=>(
  <option key={k} value={ment.mentorName}>{ment.mentorName}</option>
  ))}
 
</select>
<div className="text-center">
<button className="btn btn-primary mt-4 mb-4" onClick={(e)=>{formHandler(e)}} type="submit">Submit</button>
</div>      

<div>
<table className="table table-striped mt-4 mb-4">

<thead>
    <tr>
    <th scope="col">Sl.no</th>
      <th scope="col">Student Name</th>
      <th scope="col">Mentor Name</th>
      <th scope="col">Batch</th>
      <th scope="col">Course</th>
    </tr>
  </thead>
  <tbody>

{filterData.map((ele, i)=>(
    <tr key={i}>
    <td>{i+1}</td>
    <td>{ele.studentName}</td>
    <td>{ele.mentorName}</td>
    <td>{ele.batch}</td>
    <td>{ele.course}</td>
  </tr>    
))}

</tbody>
</table> 
</div>
</form>
        </div>

        <div className='col-sm-2'></div>
        </div>
        </div>
    )
}

export default GetParticularMentor;