import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import{About} from "./About.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
