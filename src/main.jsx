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
import { Arrivals2 } from "./Arrivals2.jsx"
import { Navbar } from "./Navbar.jsx"
import { AdminSelected } from './AdminSelected.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/admin-selected" element={<AdminSelected />} />
        <Route exact path="/support" element={<Support />} />
        <Route exact path="/arrivals" element={ <><Arrivals/></>} />
        <Route exact path="/arrivals-specific" element={ <><Arrivals2/></>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
