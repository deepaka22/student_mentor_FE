import { useEffect,useState } from "react";


 const GetMentorDatas = ()=>{

    const [Data, SetData] = useState([]);

    const getMentor  = ()=> {

        fetch("https://deepak-student-mentor.onrender.com/mentors/getmentors").then((data) => {
          return data.json();
        })
        .then((data) => {
            SetData(data);      
        });

        } 

useEffect( ()=>getMentor(), [])


 


    return(
        <div>
             <div className="row">
         <div className='col-sm-2'></div>
         <div className='col-sm-8 '>

        <h1 className="mt-4 mb-4 text-center">All Mentors Data </h1>
        <table className="table table-striped ">
  <thead>
  
    <tr>
      <th scope="col">Mentor Name</th>
      <th scope="col">Batch</th>
      <th scope="col">Course</th>
      
    </tr>
  </thead>
  <tbody>
    {/* Mapped the data recieved */}
{ Data.map((ele, i)=>(
<tr key={i}>
    <td>{ele.mentorName}</td>
    <td>{ele.mentorBatch}</td>
    <td>{ele.course}</td>
  </tr>

  ))
}    
  </tbody>
</table>

         </div>

         <div className='col-sm-2'></div>
   

        </div>
        </div>
    )
 }

 export default GetMentorDatas;