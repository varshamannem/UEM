import React from 'react'
function Schedule() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
        
        <div class="container-fluid">
         
          <a class="navbar-brand text-light" href="#">
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
                <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                <i class="fas fa-user"></i>
                  EVENT ORGANISER
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <a class="dropdown-item" href="/">Logout</a>
                  </li>
                  
                </ul>
              </li>
            
                
            </ul>
           
          </div>
        
        </div>
        
      </nav>
      <div class="container-fluid">
        <h3 class="h">SLOT BOOKING</h3>

        
        <section>
            <div class="container-">
                <div class="hh1">
                    <h4>Freezing Venue</h4>

                </div>
                <div class="row g-4">
                    <div class="col-lg-6 col-md-6">
              
                <div class="input">
                    <h5><b>Name of the event</b></h5> 
                   
                     <div class="form-outline w-100">
                         <input type="text" id="typeText" class="form-control" />
                         <label class="form-label" for="typeText"></label>
                     </div>
                 </div>
                 <div class="input">
                     <h5><b>Date</b></h5> 
                    
                      <div class="form-outline w-100">
                          <input type="date" id="typeText" class="form-control" />
                          <label class="form-label" for="typeText"></label>
                      </div>
                  </div>
                 
                 <div class="input">
                     <h5><b>Venue</b></h5> 
                 <select id="cars" class="w-100">
                   <option value="Venue 1">Venue 1</option>
                   <option value="Venue 2">Venue 2</option>
                   <option value="Venue 3">Venue 3</option>
                 </select>
                      
                  </div>
                  
                  
                  <div class="input">
                     <h5><b>Starting Time</b></h5> 
                    
                      <div class="form-outline w-100">
                          <input type="time" id="typeText" class="form-control" />
                          <label class="form-label" for="typeText"></label>
                      </div>
                  </div>
                  <div class="input">
                   <h5><b>Ending Time</b></h5> 
                  
                    <div class="form-outline w-100">
                        <input type="time" id="typeText" class="form-control" />
                        <label class="form-label" for="typeText"></label>
                    </div>
                 </div>
                 </div>
                 </div>
                 <a href="#" class="btn btn-info" id="button">Book</a>
                 <br/>
                 <br/>

                 <div class="hh1">
                    <h4>Refreshments</h4>

                </div>

                <div class="container-fluid">
                    <br/>
                    

                    <div class="input">
                        <h5><b>Capacity</b></h5> 
                        <div class="row g-4">
                            <div class="col-lg-6 col-md-6">
                      
                         <div class="form-outline w-100">
                             <input type="number" id="typeText" class="form-control" />
                             <label class="form-label" for="typeText"></label>
                         </div>
                     </div>
                     </div>
                     </div>
                     <b>Select if refrehments are required</b>
                     <ul>
                        <li>Snacks</li>
                        <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
        <label class="form-check-label" for="inlineRadio1">Samosa</label>
      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
        <label class="form-check-label" for="inlineRadio1">Veg Puff</label>
      </div>
      <li>Beverages</li>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
        <label class="form-check-label" for="inlineRadio1">Coffee</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
        <label class="form-check-label" for="inlineRadio1">Maaza</label>
      </div>
                     </ul>
                     <a href="#" class="btn btn-info" id="button">Order</a>
                </div>
            </div>
<br/>

            <div class="hh1">
                <h4>Notifications</h4>

                

            </div>
<br/>
            <div class="container-fluid">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      abcd@gmail.com
                    </label>
                  </div>

                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      anonymous@gmail.com
                    </label>
                  </div>

                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      collegeonline@gmail.com
                    </label>
                  </div>

                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      eventorganiser@gmail.com
                    </label>
                  </div>

                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      lluvia@gmail.com
                    </label>
                  </div>

                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      someone@gmail.com
                    </label>
                  </div>
            </div>
<br/>
<a href="#" class="btn btn-secondary" id="button">Select All</a>
<a href="#" class="btn btn-info" id="button">Notify</a>
<br/>
<br/>


        </section>

        

        
      </div>
      
    </div>
  )
}
export default Schedule
