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
        <h4 className="empHead">Employee Productivity Dashboard</h4>

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
        Productivity on Wednesday
        <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgb(33, 33, 33)' }}>
          <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant="determinate" value={40} />
          </Box>
          <Box sx={{ minWidth: 3, backgroundColor: 'rgb(33, 33, 33)' }}>
            <Typography variant="body2" color="white" bgcolor='rgb(33,33,33)'>{`40%`}</Typography>
          </Box>
        </Box>
        Productivity on Thursday
        <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgb(33, 33, 33)' }}>
          <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant="determinate" value={70} />
          </Box>
          <Box sx={{ minWidth: 3, backgroundColor: 'rgb(33, 33, 33)' }}>
            <Typography variant="body2" color="white" bgcolor='rgb(33,33,33)'>{`70%`}</Typography>
          </Box>
        </Box>
        Productivity on Friday
        <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgb(33, 33, 33)' }}>
          <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant="determinate" value={90} />
          </Box>
          <Box sx={{ minWidth: 3, backgroundColor: 'rgb(33, 33, 33)' }}>
            <Typography variant="body2" color="white" bgcolor='rgb(33,33,33)'>{`90%`}</Typography>
          </Box>
        </Box>

      </div >
    </>
  );
}
export default dashboard