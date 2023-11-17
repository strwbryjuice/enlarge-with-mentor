import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { About } from "./About.jsx"
import { Admin } from "./Admin.jsx"
import { Support } from "./Support.jsx"
import { Arrivals } from "./Arrivals.jsx"
import { Navbar } from "./Navbar.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/support" element={<Support />} />
        <Route exact path="/arrivals" element={<Arrivals/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
