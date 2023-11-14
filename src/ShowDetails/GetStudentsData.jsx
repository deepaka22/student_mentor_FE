import { useEffect,useState } from "react";

const GetStudentsData = ()=>{

  const [Data, SetData] = useState([]);

  const getStuData  = ()=> {

      fetch("https://deepak-student-mentor.onrender.com/students/getstudents").then((data) => {
        return data.json();
      })
      .then((data) => {
          SetData(data);      
          console.log(data);
      });


      } 

useEffect( ()=>getStuData(), [])



    return(
        <div className="row">
         <div className='col-sm-2'></div>
         <div className='col-sm-8 '>

        <h1 className="mt-4 mb-4 text-center ">All students Data </h1>
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Student Name</th>
      <th scope="col">Mentor Assigned</th>
      <th scope="col">Mentor Name</th>
      <th scope="col">Batch</th>
      <th scope="col">Course</th>
    </tr>
  </thead>
  <tbody>
        {/* Mapped the data recieved */}

{ Data.map((ele, i)=>(
<tr key={i}>
    <td>{ele.studentName}</td>
    <td>{ele.mentorAssigned}</td>
    <td>{ele.mentorName}</td>
    <td>{ele.batch}</td>
    <td>{ele.course}</td>
  </tr>

  ))
}    

    
  </tbody>
</table>

         </div>

         <div className='col-sm-2'></div>
   

        </div>
    )
}

export default GetStudentsData;