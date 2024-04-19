import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    {/* <App />                  calling of App which we created in app.jsx file and this tag is only when it is exported */}
    <App />
    {/* {App()}         2nd method */}
    {/* <div>              3rd method
    <h1>KIET</h1>
    <h1>MCA</h1>
    </div> */}
  </BrowserRouter>
)
