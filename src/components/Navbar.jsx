import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to = "/"> 
        <div className="logo">Bruit Sourd</div>
      </NavLink>
      <NavLink to = "/products"> 
      <div className="products">Products</div>
      </NavLink>
    </div>
  )
}

export default Navbar