import React from "react";

function Navbar(){
  return(
      
      <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
    
    <div class="container-fluid">
   
      <a class="navbar-brand text-light" href="https://www.google.com/">
        UEM</a>
  
    
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
  
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="https://www.google.com/">Home</a>
          </li>
          
          <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="#events">
              Events
            </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#about">About Us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#contact">Contact Us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/sample">Sample</a>
            </li>
            <button type="button" class="btn btn-info btn-rounded"data-bs-toggle="modal" data-bs-target="#login">LOGIN</button>

            
        </ul>
        
      </div>
      
    </div>
   
  </nav>
  );
}
export default Navbar