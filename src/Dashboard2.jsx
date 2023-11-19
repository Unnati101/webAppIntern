import { useState } from 'react'
import logo from './assets/dashboard_logo.jpg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import './dash2.css';

function dashboard2() {
    return (
        <>
         <img className='logo' src={logo} />
         <input className="search" type="text"  placeholder="Search By Name " />
         <button className="ic" type="submit"><i class="fa fa-search"></i></button>
         <div className="empProgress2">
            EMPID  : 1
            <br></br>
            <br></br>
            NAME  :  Ritvik
            <br></br>
            <br></br>
            DOB  : 02-04-2002
            <br></br>
            <br></br>
            ROLE  : Software Engineer
        </div>
        </>
    );
}

export default dashboard2
