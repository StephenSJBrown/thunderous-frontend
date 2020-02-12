import React from 'react'
import {Link} from 'react-router-dom'

const Result = () => {

    return <>
        <h2>You deposited</h2>
        <h2>165</h2><h2>kg</h2>
        <h3>and recieved</h3>
        <h2>Points</h2>
        <Link to="/coupons"><p>See coupons</p></Link>
    </>
}

export default Result