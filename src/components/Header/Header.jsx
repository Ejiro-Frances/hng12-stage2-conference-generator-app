import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  // const navigate = useNavigate();
  return (
    <header className="header">
      <img className="logo" src="logo.svg" alt="Logo" />
      <nav className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Events
        </NavLink>

        <NavLink
          to="/tickets"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          My Tickets
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          About Project
        </NavLink>
      </nav>
      <NavLink to="/myticket" className="header-button">
        <span>MY TICKETS</span>
        <img src="arrowright.svg" alt="Right arrow" />
      </NavLink>
    </header>
  );
};

export default Header;
