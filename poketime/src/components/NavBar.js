import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'


// Wrapping (by Using higher order component) NavBar component inorder to give props here all those properties that Route tag provides to rendering component
const NavBar = (props) => {
    return(
        <nav className="nav-wrapper cyan darken-5">
            <div className="container">
                <Link to='/' className="brand-logo">PokeTimes</Link>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">AboutUs</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
export default withRouter(NavBar)