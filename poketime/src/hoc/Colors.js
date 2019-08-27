import React from 'react'

const Color = (WrappedComponent) => {
    const arr = ['red', 'blue', 'green', 'orange', 'yellow', 'cyan']
    const colorName = arr[Math.floor(Math.random() * 6)]
    const className = colorName + '-text'

    return (props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>

        )
    }
}
export default Color