import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Dashboard from './Dashboard.jsx'
import Dashboard2 from './Dashboard2.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <App />
    <Dashboard/>
    <Dashboard2/>

   
  </React.StrictMode>,
)
