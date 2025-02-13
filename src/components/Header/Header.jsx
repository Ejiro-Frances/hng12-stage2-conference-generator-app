import "./header.css";
// import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  // const navigate = useNavigate();
  return (
    <header className="header">
      <img className="logo" src="logo.svg" alt="Logo" />
      {/* <nav className="nav-links">
        <NavLink to="/" activeclassname="active">
          Events
        </NavLink>
        <NavLink to="/tickets" activeclassname="active">
          My Tickets
        </NavLink>
        <NavLink to="/about-project" activeclassname="active">
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
      </button> */}
    </header>
  );
};

export default Header;
