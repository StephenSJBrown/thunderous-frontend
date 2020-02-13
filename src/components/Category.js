import React from "react";
import { Link } from "react-router-dom";



const buttonStyle={
  width:' 156px',
  height:' 156px',
  borderRadius:' 30px',
  border:'none',
  backgroundColor:' #B0E6CE',
  marginTop:' 10px',
  marginLeft:' 5px',
  marginRight:' 5px',
  padding:'0px',
  fontFamily: '"Dosis", sans-serif',
  fontSize:'19px',
  color:'#494949',
  cursor:'pointer'
}

const Category = ({ name }) => {
  return (
    <Link to={`coupons/${name}`}>
      <div className="category">
        <button style={buttonStyle}>
          <img src={`${name}.jpg`}/>
          <h3>{name}</h3>
        </button>
      </div>
    </Link>
  );
};

export default Category
