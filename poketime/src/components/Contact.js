import React from 'react'

const Contact = (props) => {
    // Below code progrmatically redirects to another component
    setTimeout(() => {
        props.history.push('/about')
    }, 2000)
    return(
        <div className="Contact container">
            <h3 className="center">Contact</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquid ut quos tempore optio aut maxime explicabo autem quaerat itaque nemo sed accusantium ullam nisi corporis illum, sint odio debitis.</p>
        </div>
    )
}
export default Contact