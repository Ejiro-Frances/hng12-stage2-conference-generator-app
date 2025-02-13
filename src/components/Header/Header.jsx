import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
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
          to="/about-project"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          About Project
        </NavLink>
      </nav>
      <button
        onClick={() => {
          navigate("/tickets");
        }}
      >
        <span>MY TICKETS</span>
        <img src="arrowright.svg" alt="Right arrow" />
      </button>
    </header>
  );
};

export default Header;
