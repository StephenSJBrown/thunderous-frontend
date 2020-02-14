import React from "react";
import { Link } from "react-router-dom";

const couponStyle={
  color:'#494949',
  textAlign:'center'
}

const Coupon = ({ name, deal, points, id }) => {
  return (
    <>
      <Link style={couponStyle} to={`/coupon/${id}`}>
        <h3 style={{fontSize:"17px"}}>{name}</h3>
        <h3 style={{fontSize:"17px"}}>{deal}% off</h3>
        <h3 style={{fontSize:"17px"}}>{points} points</h3>
      </Link>
    </>
  );
};

export default Coupon;
