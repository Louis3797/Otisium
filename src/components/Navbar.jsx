import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import "../css/Navbar.css";

import Logo from "../assets/images/otisium-logo.png";

export const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="navbar-div">
      <Link to="">
        <img src={Logo} alt="" />
      </Link>
      <div className="navbar-nav-div">
        <Link to="#" className={sidebar ? "navbar-icon active" : "navbar-icon"}>
          <IoIosMenu onClick={showSidebar} />
        </Link>
      </div>
      <div className={sidebar ? "navbar-sidebar active" : "navbar-sidebar"}>
        <IoMdClose className="navbar-icon-close" onClick={showSidebar} />

        <Link to="/" className="navbar-link" onClick={showSidebar}>
          Home
        </Link>
        <Link to="/about" className="navbar-link" onClick={showSidebar}>
          Über uns
        </Link>
        <Link to="/trainer" className="navbar-link" onClick={showSidebar}>
          Trainer
        </Link>
        <Link to="/contact" className="navbar-link" onClick={showSidebar}>
          Kontakt
        </Link>
      </div>
    </div>
  );
};
