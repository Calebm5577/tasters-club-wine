import React from 'react'
import '../CSS/main.scss'

export const Button = ({num}) => {
    return (
        <>
            <button className="Button">Show all ({num})</button>
        </>
    )
}

export default Button
