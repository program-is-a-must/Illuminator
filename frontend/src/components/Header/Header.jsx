import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <h1>
            ILLUMINATOR <span>PHOTOGRAPHY</span>
          </h1>
        </Link>

        <div className="menus">
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="packages">Package</Link>
          <Link to="blog">Blog</Link>
          <Link to="contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
export default Header;
