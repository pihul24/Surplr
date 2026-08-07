import React from 'react'
import { HashLink } from 'react-router-hash-link'
import {Link} from "react-router-dom"

function Navbar(props) {
  return (
    <>
    <nav >
        <div className={`navLinks flex items-center gap-24  font-semibold cursor-pointer ${props.className} `}>
            <HashLink smooth to="/#how-it-works">
                How It Works
            </HashLink>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/add">Restaurants</Link>
            <Link to="/profile">Profile</Link>
            
        </div>
      </nav>
    </>
  )
}

export default Navbar