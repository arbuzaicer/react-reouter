import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  useEffect(() => {
    console.log("nav bar is mounted");
  }, []);

  return (
    <nav>
      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/settings">Settings</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
