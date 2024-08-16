import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <div className="navbar">
           <Link to="/" style={{ textDecoration: 'none' }}> <h2> Albums list React app </h2> </Link> 
           <Link to="/add-album"><button> Add New Album </button></Link> 
        </div>
    )
}

export default Navbar;