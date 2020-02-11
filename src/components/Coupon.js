import React from 'react'

const Coupon = ({name, deal, points}) => {

    return (
        <>
        <h2>{name}</h2>
        <h2>{deal}</h2>
        <h2>{points}</h2>
        </>
    )
}

export default Coupon