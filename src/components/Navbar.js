import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const Navbar = () => (
    <nav>
        <Link to="/" className="links">Form</Link>
        <Link to="personInfo" className="links">Card</Link>
    </nav>
);

export default Navbar;