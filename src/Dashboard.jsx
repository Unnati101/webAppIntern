import { useState } from 'react'
import logo from './assets/dashboard_logo.jpg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import './dash.css';

function dashboard() {
  return (
    <>
      <img className='logo' src={logo} />
      <div className="empProgress">

        <br></br>
        Productivity on Monday
        <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgb(33, 33, 33)' }}>
          <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant="determinate" value={50} />
          </Box>
          <Box sx={{ minWidth: 3, backgroundColor: 'rgb(33, 33, 33)' }}>
            <Typography variant="body2" color="white" bgcolor='rgb(33,33,33)'>{`50%`}</Typography>
          </Box>
        </Box>


        Productivity on Tuesday
        <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgb(33, 33, 33)' }}>
          <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant="determinate" value={60} />
          </Box>
          <Box sx={{ minWidth: 3, backgroundColor: 'rgb(33, 33, 33)' }}>
            <Typography variant="body2" color="white" bgcolor='rgb(33,33,33)'>{`60%`}</Typography>
          </Box>
        </Box>

      </div >
    </>
  );
}
export default dashboard