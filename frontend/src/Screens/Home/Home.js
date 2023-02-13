import React from "react";
import Navbar from "../../components/Header/Header";
const Home = () =>{
    return(
        <div>
    <Navbar/>
    <div className="container-fluid">
    <div id="carouselMaterialStyle" className="carousel slide carousel-fade my-2" data-mdb-ride="carousel">
        
        <div className="carousel-indicators">
            <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="2"
                aria-label="Slide 3"></button>
        </div>

        
        <div className="carousel-inner rounded-5 shadow-4-strong">
            
            <div className="carousel-item active">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(10).webp" className="d-block w-100"
                    alt="Sunset Over the City" />
                <div className="carousel-caption d-none d-md-block">
                    
                </div>
            </div>

            
            <div className="carousel-item">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" className="d-block w-100"
                    alt="Canyon at Nigh" />
                <div className="carousel-caption d-none d-md-block">
                    
                </div>
            </div>

        
            <div className="carousel-item">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(11).webp" className="d-block w-100"
                    alt="Cliff Above a Stormy Sea" />
                <div className="carousel-caption d-none d-md-block">
                    
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-mdb-target="#carouselMaterialStyle"
            data-mdb-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-mdb-target="#carouselMaterialStyle"
            data-mdb-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>

<div className="container ">
    <h2>
        <center style={{padding: "50px"}}>
            EVENTS
        </center>
        
    </h2>


</div>
<section id="events">
    <div className="container">
        <div className="row g-4">
            <div className="col-md-6 col-lg-3">
                <div className="card text-center">
                    <div className="card-header">Venue</div>
                    <div className="card-body">
                      <h5 className="card-title">Event A</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea in natus exercitationem qui non molestias!</p>
                      
                    </div>
                    <div className="card-footer text-muted">1 day ago</div>
                  </div>

            </div>
            <div className="col-md-6 col-lg-3">
                <div className="card text-center">
                    <div className="card-header">Venue</div>
                    <div className="card-body">
                      <h5 className="card-title">Event B</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea in natus exercitationem qui non molestias!</p>
                      
                    </div>
                    <div className="card-footer text-muted">2 days ago</div>
                  </div>

            </div>
            <div className="col-md-6 col-lg-3">
                <div className="card text-center">
                    <div className="card-header">Venue</div>
                    <div className="card-body">
                      <h5 className="card-title">Event C</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea in natus exercitationem qui non molestias!</p>
                      
                    </div>
                    <div className="card-footer text-muted">3 days ago</div>
                  </div>

            </div>
            <div className="col-md-6 col-lg-3">
                <div className="card text-center">
                    <div className="card-header">Venue</div>
                    <div className="card-body">
                      <h5 className="card-title">Event D</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea in natus exercitationem qui non molestias!</p>
                      
                    </div>
                    <div className="card-footer text-muted">6 days ago</div>
                  </div>

            </div>

        </div>
    </div>
</section>
<section id="about" className="p-5 bg-dark text-light">
    <div className="container">
        <div className="row align--items-center justify-content-between">

            <div className="col-md p-5">
                <h2>About Us</h2>
                <p className="lead">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, minima nobis. Perspiciatis quasi
                    dignissimos aut consequuntur ipsum quidem? Hic nemo recusandae harum numquam accusantium ut
                    repellat voluptas ipsam ex aliquid!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatibus deleniti consectetur
                    nihil voluptates soluta eligendi culpa, consequatur non doloremque aspernatur molestiae
                    assumenda reiciendis excepturi nisi eius ducimus atque voluptate totam. Pariatur quis neque
                    velit est eveniet libero ea vitae.
                </p>
                

            </div>
            <div className="col-md">
                <img src="public/images/event.jpg" className="img-fluid" alt="" width="1000"/>
            </div>

        </div>
    </div>

</section>


</div>
<section id="contact">
    
        <div className="container" style={{padding: "30px"}}>
            <div className="row g-4">
                <div className="col-md">
                    <h2 className="text-center mb-4">
                        Contact Info
                    </h2>
                    <ul className="list-group list-group-flush lead">
                        
                        <li className="list-group-item">
                            <span className="fw-bold">
                                Contact Number :
                            </span>000-000-000-0000
                        </li>
                        <li className="list-group-item">
                            <span className="fw-bold">
                                Email :
                            </span>anonymous@gmail.com
                        </li>
                    </ul>
                </div>
                <div className="col-md">


                </div>
            </div>

        </div>
   
</section>
<div className="modal fade" id="login" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">LOGIN</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <p className="lead">
                    Enter your credentials
                </p>
                <div class="input-group my-5">
                        <span>
                            <select class="venue">
                                <option>Select User: </option>             
                                <option>Admin</option>
                                <option>Event Organizer</option>
                            </select>
                        </span>
                </div>
                <form>
                    <div className="mb-3">
                        <label for="username" className="col-form-label">
                            Username

                        </label>
                        <input type="text" className="form-control" id="username"/>

                    </div>


                    <div className="mb-3">
                        <label for="password" className="col-form-label">
                            Password

                        </label>
                        <input type="password" className="form-control" id="password"/>

                    </div>

                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Login</button>
            </div>
        </div>
    </div>
</div>
</div>
 

    )
}

export default Home