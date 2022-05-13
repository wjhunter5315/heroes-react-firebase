import React from "react";
import "./Navbar.css";

function Navbar() {
   
   return (
      <div className="topnav">
         <a className="active" href="/">Home</a>
         <a href="avengers">Avengers</a>
         <a href="xmen">X-Men</a>
         <a href="defenders">Defenders</a>
      </div>
   )
}

export default Navbar;