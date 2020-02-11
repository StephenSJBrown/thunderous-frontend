import React from "react";
import { Link } from "react-router-dom";

const Category = ({ name }) => {
  return (
    <Link to={`coupons/${name}`}>
      <div className="category">
        <img src="{name}.jpg" />
        <h3>{name}</h3>
      </div>
    </Link>
  );
};

export default Category
