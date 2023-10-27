//시작 시 터미널에
// 터미널1에  yarn dev
// 터미널2에 json-server db/data.json --port 3001

import "./App.css";
import MemberSearch from "./MemberSearch.jsx";
import { Link } from "react-router-dom";



const Navbar = () => {

  return (
    <nav className="navbar-container">
      <div>
        <ul className="navbar-menu">
          <li className="navbar-menu-item">
            <Link to ="/about">About</Link>
          </li>
          <li className="navbar-menu-item">
            <Link to ="/support">Support</Link>
          </li>
          <li className="navbar-menu-item">
            <Link to ="/arrivals">Arrivals</Link>
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
