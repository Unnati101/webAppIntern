import { useState } from 'react'
import logo from './assets/dashboard_logo.jpg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import './dash.css';

function dashboard(){
    return(
        <>
        <img className='logo'src={logo}/>
        <div className="empProgress">
            <p className="dash">Employee Productivity Dashboard
            <br></br>
            Productivity on Monday
            <Box><LinearProgress variant="determinate" value={50} />
            <Typography variant="caption" component="div" color="text.secondary">
          {"25%"}
        </Typography>
        </Box>
        <br></br>
        Productivity on Tuesday
            <Box><LinearProgress variant="determinate" value={60} />
            <Typography variant="caption" component="div" color="text.secondary">
          {"25%"}
        </Typography>
        </Box>
        <br></br>
        Productivity on Wednesday
            <Box><LinearProgress variant="determinate" value={40} />
            <Typography variant="caption" component="div" color="text.secondary">
          {"25%"}
        </Typography>
        </Box>
      <br></br>
        Productivity on Thursday
            <Box><LinearProgress variant="determinate" value={80} />
            <Typography variant="caption" component="div" color="text.secondary">
          {"25%"}
        </Typography>
        </Box>
      <br></br>
        Productivity on Friday
            <Box><LinearProgress variant="determinate" value={90} />
            <Typography variant="caption" component="div" color="text.secondary">
          {"25%"}
        </Typography>
        </Box>
       <br></br>
            </p>
            

            
            
        </div>
    </>
    );
}
export default dashboard