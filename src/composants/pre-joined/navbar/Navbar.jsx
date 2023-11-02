import "./navbar.css";
import {NavLink} from "react-router-dom";
function Navbar() {
  return (
    <header>
      <a href="" className="logo">
        ALPHA <span>M</span> 
      </a>
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink to="services">Servises</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="about">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="contact">Contact Us</NavLink>
        </li>
      </ul>

      <button className="signup-btn">
        <NavLink to="signup">
            Sign Up
        </NavLink>
      </button>
    </header>
  );
}

export default Navbar;
