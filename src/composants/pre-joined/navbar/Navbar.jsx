import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <header>
      <Link to="/" className="logo">
        ALPHA <span>M</span>{" "}
      </Link>

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
        <Link to="signup">Sign Up</Link>
      </button>
    </header>
  );
}

export default Navbar;
