import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <ul>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/pictures">
          <li>Pictures</li>
        </Link>
        <Link to="/videos">
          <li>Videos</li>
        </Link>
      </ul>
    </>
  );
}

export default Navbar;
