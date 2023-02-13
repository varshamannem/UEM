import React from "react";
import Footer from "./components/Footer/Footer";
import AdminLogin from "./Screens/Admin/Admin";
import RequestComp from "./Screens/Organiser/RequestComp";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Requests from "../src/Screens/Requests";
import Home from "./Screens/Home/Home";
import Schedule from "./Screens/Organiser/schedule";
const App=()=>(
  <BrowserRouter>
  <main>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin-login" element={<AdminLogin/>}/>
      < Route exact path="/organiser" element={<Requests/>}/>

      <Route path="/schedule" element={<Schedule/>}/>

       
    
      
      
      
    </Routes>
  </main>
  <Footer/>
  
  </BrowserRouter>
);

export default App;