import React, {useState} from "react";

function Navbar(){

  const [category, setCategory]=useState("general")

  return(
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className = "badge bg-light text-dark fs-4">News-Daily</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item" >
          <div className="nav-link active" onClick={()=>setCategory("sports")} >Sports</div>
          <div className="nav-link active" >Technology</div>
          <div className="nav-link active" >Business</div>
          <div className="nav-link active" >Science</div>
          <div className="nav-link active" >Health</div>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar;
