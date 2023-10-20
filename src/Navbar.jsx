//시작 시 터미널에
// 터미널1에  yarn dev
// 터미널2에 json-server db/data.json --port 3001

import React from "react";
import "./App.css";
import MemberSearch from "./MemberSearch.jsx";

const Navbar = () => {

  return (
    <nav className="navbar-container">
      <div>
        <ul className="navbar-menu">
          <li className="navbar-menu-item">
            <a href="#">About</a>
          </li>
          <li className="navbar-menu-item">
            <a href="#">Support</a>
          </li>
          <li className="navbar-menu-item">
            <a href="#">Arrivals</a>
          </li>
        </ul>
      </div>
      <div className="search-container">
        <MemberSearch />
      </div>
    </nav>
  );
};

export default Navbar;
