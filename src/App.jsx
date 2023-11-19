import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import logo from './assets/bird_2.jpg';
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
function App() {
 

  return (
    <>
      <img className='logo'src={logo}/>
      <form>
  
    <input className="textF" type="text" email="email" placeholder="email" />
    <br></br>


    <input className="textF" type="text" password="Password" placeholder="Password" />
    <br></br>
    <button className="button" type="submit">Login</button>
<br></br>
   <a className="forP" href="">Forgot Password?</a>
   <br></br>
<BrowserRouter>
<Routes>
  <Route  element={<Dashboard/>}/>

  </Routes>
 
    </BrowserRouter>

</form>
    </>
  )
}

export default App
