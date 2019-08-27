import React from 'react'
import Color from '../hoc/Colors'

const About = (props) => {
    return(
        <div className="About container">
            <h3 className="center">About</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquid ut quos tempore optio aut maxime explicabo autem quaerat itaque nemo sed accusantium ullam nisi corporis illum, sint odio debitis.</p>
        </div>
    )
}
export default Color(About)