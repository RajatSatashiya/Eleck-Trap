import React from "react";
import { useRef, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Stylings/Navbar.css";

function Navbar() {
  const navbar = useRef();

  return (
    <>
      <nav ref={navbar} className="nav2">
        <div className="nav-portion">
          <Link to="/">
            <h3 className="project-title">Eleck Trap</h3>
          </Link>
          <ul className="nav-list">
            <li>
              <Link to="/gaming" className="llblink">
                Gaming Accessories
              </Link>
            </li>
            <li>
              <Link to="/laptop" className="llblink">
                Laptop
              </Link>
            </li>
            <li>
              <Link to="/mobile" className="llblink">
                Mobile Devices 
              </Link>
            </li>
            <li>
              <i className="fas fa-cart-plus"></i>
            </li>
          </ul>
        </div>

        
      </nav>
    </>
  );
}

export default Navbar;
