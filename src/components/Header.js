import React from "react"
import { Link } from "react-router-dom"

const Header = ({name}) => {

    return (
        <>
            <img src={name}/>
        </>
    )

}

export default Header