import React from "react";
import { Link } from "react-router-dom";

const Coupon = ({ name, deal, points, id }) => {
  return (
    <>
      <Link to={`/coupon/${id}`}>
        <h2>{name}</h2>
        <h2>{deal}</h2>
        <h2>{points}</h2>
      </Link>
    </>
  );
};

export default Coupon;
