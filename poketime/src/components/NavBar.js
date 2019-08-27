import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// NavLink gives u nav bar an active class as well which Link doesnt you can check in inspect element
// Lesson 1
const NavBar = (props) => {
    return(
        <nav className="nav-wrapper cyan darken-5">
            <div className="container">
                <a className="brand-logo">PokeTimes</a>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">AboutUs</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar