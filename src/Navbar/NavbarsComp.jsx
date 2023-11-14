
const NavbarsComp = ()=>{
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><b>Student_Mentor</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      
      <ul class="navbar-nav">
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="AllStudents">Students Data</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="AllMentors">Mentors Data</a>
        </li>
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="students">Add Student</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="Mentors">Add Mentors</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="AssigningMentor">Assign Mentor</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="findStudent">Student to Mentor</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default NavbarsComp;