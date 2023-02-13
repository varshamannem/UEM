import React from 'react'
import { useEffect,useState } from 'react';

import { Outlet } from 'react-router-dom';
import Approved from './Approved';
import Declined from './Declined';

import Swal from "sweetalert2"

function Admin() {

    


    const nData = {
        name: "",
        nParticipants: "",
        desc: "",
        date: "",
        timeIn: "",
        timeOut: "",
        venue: "",
        approved: null,
        refreshments: false,
      };
      const [formData, setFormData] = useState(nData);
      const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const handleOnChecked = (e, i) => {
        let val = i === 1 ? e.target.checked : !e.target.checked;
        setFormData({ ...formData, refreshments: val });
      };
      const handleOnSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        let res = await fetch("http://localhost:5000/api/admin/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const json = await res.json();
    if (json.success) {
      Swal.fire("SUCCESS", "form submitted successfully", "success");
      setFormData(nData);
    }
};
return(
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand text-light" href="#">
        UEM</a>

      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>
  
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
            <i className="fas fa-user"></i>
              ADMIN
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a className="dropdown-item" href="/">Logout</a>
              </li>
              
            </ul>
          </li>
        
            
        </ul>
      </div>
    </div>
  </nav>

  
<form onSubmit={handleOnSubmit}>
  <div className="input" >
   <h5><b>Name of the event</b></h5> 
  
    <div className="form-outline w-100">
        <input type="text" id="typeText" className="form-control" 
        onChange={handleOnChange}
        value={formData.name}
        name="name"/>
        <label className="form-label" htmlFor="typeText"></label>
    </div>

    <div className="input">
    <h5><b>Date</b></h5> 
   
     <div className="form-outline w-100">
         <input type="date" id="typeText" className="form-control" 
         onChange={handleOnChange}
         value={formData.date}
         name="date"
         />
         <label className="form-label" htmlFor="typeText"></label>
     </div>
 </div>

 <div className="input">
    <h5><b>Venue</b></h5> 
<select id="cars" className="w-100"
name="venue"
value={formData.venue}
onChange={handleOnChange}
>
  <option value="Venue 1">Venue 1</option>
  <option value="Venue 2">Venue 2</option>
  <option value="Venue 3">Venue 3</option>
</select>
     
 </div>

 <div className="input">
    <h5><b>Capacity</b></h5> 
   
     <div className="form-outline w-100">
         <input type="number" id="typeText" className="form-control"
         onChange={handleOnChange}
         max="200"
         name="nParticipants"
         value={formData.nParticipants} />
         <label className="form-label" htmlFor="typeText"></label>
     </div>
 </div>

 <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            <h4>Description</h4>
          </label>
          <textarea
            className="form-control"
            id="desc"
            name="desc"
            rows="3"
            placeholder="Description"
            value={formData.desc}
            onChange={handleOnChange}
            required={true}
          ></textarea>
        </div>

 <div className="input">
    <h5><b>Starting Time</b></h5> 
   
     <div className="form-outline w-100">
         <input type="time" id="typeText" className="form-control"
         onChange={handleOnChange}
         name="timeIn"
         value={formData.timeIn}
          />
         <label className="form-label" htmlFor="typeText"></label>
     </div>
 </div>

 <div className="input">
  <h5><b>Ending Time</b></h5> 
 
   <div className="form-outline w-100">
       <input type="time" id="typeText" className="form-control" 
       onChange={handleOnChange}
       name="timeOut"
       value={formData.timeOut}/>
       <label className="form-label" htmlFor="typeText"></label>
   </div>
</div>

<div className="input">
    <h5><b>Refreshments</b></h5>
    <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="refreshments"
        onChange={(event)=>handleOnChecked(event,1)} 
        checked={formData.refreshments}id="inlineRadio1" value="option1" />
        <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
      </div>
      
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="refreshments" id="inlineRadio2" value="option2"
        onChange={(event)=>handleOnChecked(event,1)
        }
        checked={!formData.refreshments}
         />
        <label className="form-check-label" htmlFor="inlineRadio2">No</label>
      </div>

     

      <br/>
 <span className="button">
    <button type="submit" value="Request" className="btn btn-success">Request</button>

 </span>
 <span className="button">
    <button type="submit" className="btn btn-danger" value="Reset">Reset</button>

 </span>

 
<hr/>
 <br/>

 <h3>EVENTS</h3>
 <br>
 </br>
<h4>Approved Events</h4>
<hr></hr>
 <Approved/>
 <br></br>

 <hr></hr>
 <h4>Declined Events</h4>

 <Declined/>




    
 </div>






    

  </div>
  </form>



    </div>
); 
  
};

export default Admin