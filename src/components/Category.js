import React from "react";
import { Link } from "react-router-dom";

import food from "../icons/food.svg";
import clothing from "../icons/clothing.svg";
import hotels from "../icons/hotels.svg";
import experience from "../icons/experience.svg";
import travel from "../icons/travel.svg";
import insurance from "../icons/insurance.svg";

const buttonStyle = {
  width: " 156px",
  height: " 156px",
  borderRadius: " 30px",
  border: "none",
  backgroundColor: " #B0E6CE",
  marginTop: " 10px",
  marginLeft: " 5px",
  marginRight: " 5px",
  padding: "12px",
  fontFamily: '"Dosis", sans-serif',
  fontSize: "19px",
  color: "#494949",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
};

const imageSwitch = {
  food: food,
  clothing: clothing,
  hotels: hotels,
  experience: experience,
  travel: travel,
  insurance: insurance
};

const Category = ({ name }) => {
  return (
    <Link to={`coupons/${name}`}>
      <div className="category">
        <button style={buttonStyle}>
          <img src={imageSwitch[name]} alt=""/>
          <h3>
            {name.charAt(0).toUpperCase()}
            {name.substr(1)}
          </h3>
        </button>
      </div>
    </Link>
  );
};

export default Category;
