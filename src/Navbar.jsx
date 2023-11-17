//시작 시 터미널에
// 터미널1에  yarn dev
// 터미널2에 json-server db/data.json --port 3001

import MemberSearch from "./MemberSearch.jsx";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { LanguageSelect } from "./LanguageSelect";


const Navbar = () => {

  return (
    <div className="navbar">
      <div className="navbar-container">

        <Link to="/"><div className="home-button"></div></Link>

        <div className="right-navbar">
          <ul className="navbar-menu">
            <li className="navbar-menu-item">
              <Link to="/about">About</Link>
            </li>
            <li className="navbar-menu-item">
              <Link to="/support">Support</Link>
            </li>
            <li className="navbar-menu-item">
              <Link to="/arrivals">Arrivals</Link>
            </li>
          </ul>
          <LanguageSelect />
          <div className="search-container">
            <MemberSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
